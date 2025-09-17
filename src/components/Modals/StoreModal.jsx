import { useEffect, useState } from "react";
import Modal from "./Modal";
import { Minus, Plus } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const StoreModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) setQuantity(1);
  }, [isOpen]);

  if (!product) return null;

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
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="max-w-[50%]">
            {/* Price and Name */}
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold text-black">
                <motion.p key={quantity}>
                  ₦{product.price.toLocaleString()}
                </motion.p>
                <span className="text-sm text-[#FF0606] line-through">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
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
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
              >
                <Plus size={16} />
              </button>

              <motion.button
                onClick={() => {
                  onAddToCart({ ...product, quantity });
                  onClose();
                }}
                className="w-[140px] bg-green-500 text-white py-3 rounded-full font-semibold text-sm truncate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                NGN{(product.price * quantity).toLocaleString()}
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
