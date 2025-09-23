// src/components/PaymentMethod.jsx
import React, { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";

const PaymentMethod = () => {
  const [selected, setSelected] = useState("online");

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>

      <div className="mt-4 space-y-3">
        {/* Pay Online */}
        <label
          onClick={() => setSelected("online")}
          className={`flex items-center p-3 rounded-lg cursor-pointer border ${
            selected === "online"
              ? "border-teal-200 bg-teal-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <CreditCard
            className={`w-5 h-5 mr-2 ${
              selected === "online" ? "text-teal-600" : "text-black-500"
            }`}
          />
          <span className="text-sm">Pay Online</span>
          <span
            className={`ml-auto w-4 h-4 rounded-full ${
              selected === "online"
                ? "bg-teal-600"
                : "border border-gray-300"
            }`}
          ></span>
        </label>

        {/* Pay with Wallet */}
        <label
          onClick={() => setSelected("wallet")}
          className={`flex items-center p-3 rounded-lg cursor-pointer border ${
            selected === "wallet"
              ? "border-teal-200 bg-teal-50"
              : "border-gray-200 bg-white"
          }`}
        >
          <Wallet
            className={`w-5 h-5 mr-2 ${
              selected === "wallet" ? "text-teal-600" : "text-black-500"
            }`}
          />
          <span className="text-sm">Pay with wallet (₦0.00)</span>
          <span
            className={`ml-auto w-4 h-4 rounded-full ${
              selected === "wallet"
                ? "bg-teal-600"
                : "border border-gray-300"
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
