// src/components/SummaryPanel.jsx
import React from "react";
import fruitBagIcon from "../assets/fruit-bag.png";
import usePaystackScript from "../hooks/usePaystackScript";

const SummaryPanel = () => {
  usePaystackScript(); // load paystack script when component mounts

  const handlePayment = () => {
    if (!window.PaystackPop) {
      alert("Payment system not loaded yet, please wait a moment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_bf8847c338d1bfd47e867dd305e924d71e3c053b", 
      email: "customer@email.com", // dynamic: pass logged-in user’s email
      amount: 819000, // amount in kobo (₦8,190 = 819000)
      currency: "NGN",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // unique ref
      onClose: () => alert("Payment closed."),
      callback: (response) => {
        alert("Payment successful! Ref: " + response.reference);
        // ✅ Here you can also send response.reference to your backend
      },
    });

    handler.openIframe();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 w-80 mx-auto">
      {/* Header: Summary + Icon */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-gray-900 text-xl">Summary</h3>
        <img src={fruitBagIcon} alt="Fruit Basket" className="w-15 h-15 text-green-600" />
      </div>

      {/* Border Line After Summary */}
      <div className="border-t border-gray-200 mb-5"></div>

      {/* Items List */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Product</span>
          <span className="font-medium">₦7,000.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Delivery</span>
          <span className="font-medium">₦980.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-700">Service</span>
          <span className="font-medium">₦210.00</span>
        </div>
      </div>

      {/* Total Section */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-base font-bold">
          <span className="text-gray-900">TOTAL</span>
          <span className="text-gray-900">₦8,190.00</span>
        </div>
      </div>

      {/* Make Payment Button */}
      <button
        onClick={handlePayment}
        className="w-full mt-6 bg-green-600 text-white py-3.5 rounded-full font-medium hover:bg-green-700 transition"
      >
        Make Payment
      </button>

      {/* Dotted Bottom Border */}
      <div className="mt-4 border-b border-dashed border-gray-300"></div>
    </div>
  );
};

export default SummaryPanel;
