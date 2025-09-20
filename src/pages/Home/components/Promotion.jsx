import { useState } from "react";
import ProductCard from "../../../components/VendorCard";
import { promotions } from "../../../data/data";
import VendorCard from "../../../components/VendorCard";

export default function Promotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, promotions.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <img
                width={200}
                height={200}
                className="w-[37.46px] h-[39.39px] object-contain"
                src="/images/Vector-1.svg"
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Promotions</h2>
          </div>

          <div className="flex items-center gap-2 text-green-600 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="font-medium">Ikosi Ketu, NGA</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9L12 15L18 9" />
            </svg>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-green-300 hover:bg-green-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            &larr;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-green-300 hover:bg-green-200 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            &rarr;
          </button>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {promotions
              .slice(currentIndex, currentIndex + 3)
              .map((item, idx) => (
                <VendorCard key={currentIndex + idx} {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
