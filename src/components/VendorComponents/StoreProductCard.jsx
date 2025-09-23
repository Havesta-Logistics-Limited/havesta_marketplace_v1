import { memo, useCallback } from "react";
import { Heart, Bell, Star } from "lucide-react";
import { BiCart } from "react-icons/bi";
import { useCartStore } from "../../store/CartStore";

// ===================
// Subcomponents
// ===================

const OutOfStockBadge = () => (
  <div className="absolute top-0 left-0 bg-[#FF0606] text-white px-2 py-1 text-xs rounded-tl-sm rounded-br-sm flex items-center gap-1 z-20">
    <Bell size={10} />
    Out Of Stock
  </div>
);

const FavoriteButton = ({ isFavorite, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-3 right-3 z-20 p-1 rounded-full hover:bg-gray-100 transition-colors"
    type="button"
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  >
    <Heart
      size={18}
      className={`transition-all duration-300 ease-in-out
        ${
          isFavorite
            ? "text-[#005231] fill-[#005231] scale-110"
            : "text-gray-400 fill-none scale-100 hover:text-[#005231]"
        }`}
    />
  </button>
);

const ProductImage = ({ product }) => (
  <div className="relative mb-3">
    <img
      src={product.image}
      alt={product.name}
      className={`w-full h-32 object-contain ${
        !product.inStock ? "opacity-80" : ""
      }`}
      loading="lazy"
    />
    {!product.inStock && (
      <div className="absolute inset-0 bg-black/60 rounded-t-md z-10 flex items-center justify-center text-white text-xs font-medium">
        <div className="flex flex-col items-center gap-2">
          <Bell
            size={40}
            fill="#ffffff"
            className="border-2 rounded-full p-2"
          />
          <p>NOTIFY ME</p>
        </div>
      </div>
    )}
  </div>
);

const ProductRating = ({ rating, reviews }) => (
  <div className="flex items-center justify-start mb-2">
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.floor(rating) ? "fill-current" : "text-gray-300"}
        />
      ))}
    </div>
    <span className="text-xs text-gray-500 ml-1">({reviews})</span>
  </div>
);

const ProductPrice = ({ price, originalPrice }) => (
  <>
    <span className="font-bold text-lg text-[#005231]">
      ₦{price.toFixed(2)}
    </span>
    <span className="text-sm text-gray-400 -ml-1 line-through">
      ₦{originalPrice.toFixed(2)}
    </span>
  </>
);

const AddToCartButton = ({ inStock, onClick }) => (
  <button
    onClick={onClick}
    className={`ml-auto ${
      !inStock ? "invisible" : ""
    } p-2 px-4 rounded-sm text-sm font-medium transition-colors bg-[#005231] text-white hover:bg-green-700`}
    type="button"
    disabled={!inStock}
  >
    <div className="flex items-center justify-center gap-2">
      <BiCart size={18} />
      Add
    </div>
  </button>
);

// ===================
// Main Component
// ===================
const StoreProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onOpenModal = () => {},
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleToggleFavorite = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onToggleFavorite(product.id);
    },
    [onToggleFavorite, product.id]
  );

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
      onOpenModal();
    },
    [addToCart, product, onOpenModal]
  );

  return (
    <div className="bg-white rounded-lg border border-gray-100  transform hover:shadow-green-300 hover:shadow-lg transition-shadow duration-200 relative group">
      {/* Badges & Favorite */}
      {!product.inStock && <OutOfStockBadge />}
      {product.inStock && (
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={handleToggleFavorite}
        />
      )}

      {/* Image */}
      <ProductImage product={product} />

      {/* Info */}
      <div className="text-left p-3">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-medium text-gray-800 text-sm my-2">
          {product.name}
        </h3>

        <ProductRating rating={product.rating} reviews={product.reviews} />

        <p className="text-xs text-gray-600 mb-3">
          by <span className="text-[#005231]">{product.brand}</span>
        </p>

        <div className="flex items-center justify-start gap-2 mb-3">
          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
          />
          <AddToCartButton
            inStock={product.inStock}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(StoreProductCard);
