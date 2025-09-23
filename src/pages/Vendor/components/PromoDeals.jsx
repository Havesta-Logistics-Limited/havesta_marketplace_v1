import React, { useState, useEffect } from "react";
import pattern from "../../assets/pattern.png";
import bellPepperImg from "../../assets/bellpepper.svg";
import sausageImg from "../../assets/sausage.svg";
import greenTeaImg from "../../assets/greentea.svg";
import onionImg from "../../assets/onions.svg";
import { ShoppingCart } from "lucide-react";

const PromoDealsSection = () => {
  // Mock product data (to be replaced with API data later)
  const products = [
    {
      id: 1,
      imageUrl: bellPepperImg,
      category: "Coffe & teas",
      title: "Bell Pepper 200g",
      rating: 4.0,
      reviewCount: 44,
      vendor: "Heritage Fruits",
      currentPrice: 20,
      oldPrice: 25,
      sold: 20,
      total: 50,
      discount: 10,
      inStock: true,
    },
    {
      id: 2,
      imageUrl: sausageImg,
      category: "Meat",
      title: "Halal Sausage 350g",
      rating: 3.0,
      reviewCount: 36,
      vendor: "Heritage Fruits",
      currentPrice: 4,
      oldPrice: 10,
      sold: 7,
      total: 20,
      discount: 10,
      inStock: true,
    },
    {
      id: 3,
      imageUrl: greenTeaImg,
      category: "Coffe & Teas",
      title: "Green Tea 250g",
      rating: 4.2,
      reviewCount: 44,
      vendor: "Grace Tomatoes",
      currentPrice: 3,
      oldPrice: 7,
      sold: 32,
      total: 50,
      discount: 4,
      inStock: true,
    },
    {
      id: 4,
      imageUrl: onionImg,
      category: "Vegetables",
      title: "Onion 1kg",
      rating: 4.0,
      reviewCount: 44,
      vendor: "Grace Tomatoes",
      currentPrice: 0.5,
      oldPrice: 2,
      sold: 2,
      total: 10,
      discount: 8,
      inStock: true,
    },
  ];

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 10,
    minutes: 56,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { seconds, minutes, hours, days } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;

          if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  // Star rating component
  const StarRating = ({ rating, reviewCount }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= Math.floor(rating)
              ? "text-yellow-400"
              : i === Math.ceil(rating)
              ? "text-yellow-400"
              : "text-gray-300"
          } fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.12a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.12a1 1 0 00-1.175 0l-3.976 2.12c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.12c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    }
    return (
      <div className="flex items-center space-x-1 text-sm text-gray-500">
        <div className="flex">{stars}</div>
        <span className="text-xs">({reviewCount})</span>
      </div>
    );
  };

  // Add to cart button
  const AddToCartButton = ({ onClick, disabled, className }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`mx-auto mb-3 w-4/5 flex items-center gap-2 justify-center px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-md transition-all duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    );
  };

  return (
    <section className="py-8 sm:px-[64px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">Promo Deals</h2>
          <div className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium">
            Expires in: {formatTime(timeLeft.hours)}:
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Product Cards */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-green-300 hover:shadow-lg flex flex-col w-full h-[400px]"
            >
              {/* Card content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col w-full h-full">
                {/* Image */}
                <div className="relative h-48 w-full bg-white overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-1 left-1 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                      Save {product.discount}%
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-4 flex-grow">
                  <div className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <StarRating
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                  <div className="text-sm text-gray-600 mt-2 mb-3">
                    By {product.vendor}
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      ₦{product.currentPrice}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ₦{product.oldPrice}
                    </span>
                  </div>
                  {/* Progress */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(product.sold / product.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Sold: {product.sold}/{product.total}
                  </div>
                </div>
                <AddToCartButton
                  onClick={() => console.log(`Added ${product.title} to cart`)}
                  disabled={!product.inStock}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Promo Card */}
        <div className="md:col-span-1">
          <div
            className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-sm border border-yellow-200"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "200px",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-amber-200 opacity-70"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10% OFF</h3>
              <p className="text-sm text-gray-700 mb-4">
                For new member that registers for the first time
              </p>
              <button className="w-full bg-green-600 text-white font-medium px-4 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoDealsSection;
