// src/components/Header.jsx
import React from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  LayoutGrid,
  Home,
  Flame,
  TicketPercent,
  Megaphone,
  Phone,
} from "lucide-react";
import harvesterLogo from "../../assets/Havesta 1 5.png";
import noel from "../../assets/noel.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 pb-6">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={harvesterLogo} alt="Harvester Logo" className="h-8" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-6">
          <div className="relative">
            <select className="absolute inset-y-0 left-0 pl-4 pr-2 text-black-500 bg-transparent border-none focus:outline-none">
              <option>All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full pl-40 pr-10 py-2 bg-gray-50 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-1.5 rounded">
              <Search size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <div className="flex items-center space-x-2"></div>
          {/*wishlist button with icon + counter*/}
          <div className="relative">
            <button className="text-gray-700 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1 text-xs">
              <Heart size={25} />
              {/*wishlist item counter*/}
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                +
              </span>
            </button>
          </div>
          {/*wishlist text*/}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">wishlist</span>
            <span className="text-xs text-green-500">0 items </span>
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-2">
          {/* Cart Button with Icon + Counter */}
          <div className="relative">
            <button className="text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center space-x-1">
              <ShoppingCart size={25} />
              {/*cart item counter*/}
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                +
              </span>
            </button>
          </div>
          {/* Cart Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">Cart</span>
            <span className="text-xs text-green-500">&#8358;100,000 </span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img src={noel} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium">Noel Amobeda</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Row */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-16">
            {/* Browse All Vendors */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1">
              <LayoutGrid size={20} />
              <span>Browse All Vendors</span>
            </button>

            {/* Home */}
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              <Home size={20} className="text-harvestaDarkGreen" />
              <span>Home</span>
            </a>

            {/* Bulk Deals */}
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              <Flame size={20} className="text-red-500" />
              <span>Bulk deals</span>
            </a>

            {/* Promotions */}
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              <TicketPercent size={20} className="text-yellow-500" />
              <span>Promotions</span>
            </a>

            {/* New Products */}
            <a
              href="#"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              <Megaphone size={20} />
              <span>New products</span>
            </a>

            {/* Support Center */}
            <div className="flex items-center space-x-1 text-gray-500 text-sm ml-auto">
              <Phone size={18} />
              <span className="text-lg font-bold text-green-500">
                080HAVESTA
              </span>
              <span className="text-xs font-bold">24/7 support center</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
