// src/components/HeroBackground.jsx
import React from "react";
import pattern from "../assets/pattern.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-[#E3F9EC]  ">
      {/* Pattern Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${pattern})`, // Use the imported pattern
          backgroundRepeat: "repeat",
          backgroundSize: "20%",
        }}
      ></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-200 opacity-70"></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left: Text & Form */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold text-black-50 leading-tight">
            Don’t miss our daily
            <br />
            amazing deals.
          </h1>
          <p className="text-lg font-bold text-black-50">
            Save up to{" "}
            <span className="text-green-600 font-semibold">60% off</span> on
            your first order
          </p>

          {/* Email Subscription Form */}
          <div className="flex flex-col sm:flex-row max-w-md items-center  b">
            <div className="relative flex ">
              {" "}
              {/* Relative container */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-0 focus:ring-green-500 pr-10" // Added pr-10
              />
            </div>
            <button className="bg-green-600   text-white px-6 py-3.5 rounded-r-md hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Right: Fruit Image  made corrections here */}
      <div className=" absolute -right-16 top-0">
        <img
          src="/src/assets/heroimg.svg"
          alt="Fresh fruits and vegetables"
          className=" w-[90%]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
