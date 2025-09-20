// src/components/OrderSummarySection.jsx
import React from "react";

const OrderSummarySection = () => {
  const items = [
    { qty: 1, name: "Bell Pepper - Green", price: 7000, discount: null },
    { qty: 4, name: "Bell Pepper - Green", price: 7000, discount: -15 },
    { qty: 1, name: "Bell Pepper - Green", price: 7000, discount: null },
    { qty: 4, name: "Bell Pepper - Green", price: 7000, discount: -15 },
  ];

  return (
    <div>
      <p className="text font-bold text-gray-900">Order Summary</p>
      <h2 className="text-xl text-green-600 font-bold mt-1">HERITAGE FRUITS</h2>

      <ul className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col">
            {/* Top Row: Name + Counter (together) */}
            <div className="flex items-center">
              {/* Product name */}
              <span className="text-m font-bold">{item.name}</span>

              {/* Counter sits right beside */}
              <div className="flex items-center space-x-2 ml-4">
                <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100">
                  –
                </button>
                <span className="w-8 text-center text-sm font-bold">{item.qty}</span>
                <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-green-600 hover:bg-green-50">
                  +
                </button>
              </div>
            </div>

            {/* Bottom Row: Price + Discount */}
            <div className="mt-1">
              <div className="text-m font-bold text-gray-900">
                ₦{item.price.toLocaleString()}
              </div>
              {item.discount && (
                <span className="text-xs font-bold text-yellow-600">
                  {item.discount}%
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummarySection;
