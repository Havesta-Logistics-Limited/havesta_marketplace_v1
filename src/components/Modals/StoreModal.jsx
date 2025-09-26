import { useEffect, useState } from "react";
import Modal from "./Modal";
import { Minus, Plus } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/CartStore";

const StoreModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen]);

  if (!product) return null;

  // helper to format price
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Product Details"
      className="w-[900px]"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex gap-10 justify-center items-center p-6"
        >
          {/* Product Image */}
          <div className="max-w-[50%]">
            <motion.img
              src={product.image}
              alt={product.name}
              width={300}
              className="max-w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="max-w-[50%]">
            {/* Price and Name */}
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold text-black">
                <motion.p key={quantity}>{formatPrice(product.price)}</motion.p>
                {product.originalPrice && (
                  <span className="text-sm text-[#FF0606] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">
                Category:{" "}
                <span className="text-green-900">{product.category}</span>
              </p>
            </div>

            {/* Measurement Unit */}
            <div>
              <p className="text-sm font-semibold mt-6 text-gray-600">
                MEASUREMENT UNIT
              </p>
              <p className="text-sm text-gray-700">
                {product.unit || "Per Item"}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-start my-10 space-x-4 max-w-[400px]">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <Minus size={16} />
              </button>

              {/* quantity display */}
              <span className="text-lg font-semibold w-6 text-center">
                {quantity}
              </span>

              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
              >
                <Plus size={16} />
              </button>

              <motion.button
                type="button"
                onClick={handleAddToCart}
                className="w-[140px] bg-green-500 text-white py-3 rounded-full font-semibold text-sm truncate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {formatPrice(product.price * quantity)}
              </motion.button>
            </div>

            {/* Product Description */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-600">
                PRODUCT DESCRIPTION
              </h4>
              <p className="text-xs text-black">
                {product.description || "No description available."}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default StoreModal;
