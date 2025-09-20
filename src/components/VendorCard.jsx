import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
function VendorCard({
  image,
  name,
  price,
  deliveryTime,
  rating,
  reviews,
  isFavorite = false,
  discount,
  isSoldOut = false,
  isOpen = true,
}) {
  const isUnavailable = isSoldOut || !isOpen;

  return (
    <Link to={"/vendorstorefront"}>
      <div className="relative bg-white rounded-xl hover:shadow-green-300 cursor-pointer shadow-md overflow-hidden hover:shadow-md transition-all duration-300">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            className={`w-full h-full object-cover ${
              isUnavailable ? "filter grayscale" : ""
            } `}
            src={image}
            alt={name}
          />

          {/* Store Closed Overlay */}
          {!isOpen && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <Lock size={24} className="mx-auto mb-2" />
                <span className="text-sm font-bold">Store Closed</span>
              </div>
            </div>
          )}

          {/* Discount Badge */}
          {discount && (
            <div
              className={`absolute top-3 left-3 ${
                isUnavailable
                  ? "bg-white text-black"
                  : "bg-yellow-500 text-black"
              }  text-xs font-semibold px-2 py-1 rounded`}
            >
              {discount}
            </div>
          )}
        </div>

        {/* Product Info */}

        <div className="p-4">
          {/* Product Name & Favorite Button*/}

          <div className="flex items-center align-middle justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 ">{name}</h3>

            {/* Favorite Button */}
            <img
              src="../images/heart.svg"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            ></img>
          </div>

          {/* Price & Delivery Info */}
          <div className="flex items-center align-middle justify-between mb-2">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <img
                src="../images/Group 1171274916.svg"
                className="mr-1"
                alt="Clock Icon"
              />
              <span className="ml-2">
                From {price} | {deliveryTime}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fbbf24"
                className="mr-1"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="text-gray-600">
                {rating} ({reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VendorCard;
