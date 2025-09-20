import { useState, useCallback } from "react";
import { vendorProductData } from "../../data/data";
import StoreProductCard from "./StoreProductCard";
import StoreModal from "../Modals/StoreModal";
import DeliveryModal from "../Modals/DeliveryModal";
import { useCartStore } from "../../store/CartStore";

//  Floating cart indicator
const CartIndicator = ({ totalItems, onClick }) => {
  if (totalItems === 0) return null;
  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg cursor-pointer hover:bg-green-700 transition-colors"
      style={{ zIndex: 1000 }}
    >
      <p className="text-sm">Cart: {totalItems} items</p>
    </div>
  );
};

// Category section
const CategorySection = ({
  title,
  products,
  favorites,
  toggleFavorite,
  addToCart,
  handleOpenModal,
}) => (
  <div className="mb-20">
    <h2 className="text-2xl font-bold text-gray-900 mb-20">{title}</h2>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      style={{ minHeight: "300px" }}
    >
      {products.map((product) => (
        <div key={`${title}-${product.id}`} className="cursor-default ">
          <StoreProductCard
            product={product}
            isFavorite={favorites.has(product.id)}
            onToggleFavorite={toggleFavorite}
            onAddToCart={addToCart}
            onOpenModal={() => handleOpenModal(product)}
          />
        </div>
      ))}
    </div>
  </div>
);

const VendorCategories = () => {
  // Cart details from Zustand
  const addToCart = useCartStore((state) => state.addToCart);
  const totalItems = useCartStore((state) => state.totalItems());

  // Local state for favorites and modals
  const [favorites, setFavorites] = useState(new Set());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      newFavorites.has(productId)
        ? newFavorites.delete(productId)
        : newFavorites.add(productId);
      return newFavorites;
    });
  }, []);

  const handleOpenStoreModal = useCallback((product) => {
    setSelectedProduct(product);
    setActiveModal("product");
  }, []);

  const handleCloseStoreModal = useCallback(() => {
    setSelectedProduct(null);
    setActiveModal(null);
  }, []);

  const handleOpenDeliveryModal = useCallback(() => {
    setActiveModal("delivery");
  }, []);

  const handleCloseDeliveryModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <div className="max-w-7xl mx-[64px] py-6  min-h-screen">
      {/* Render Categories */}
      {Object.entries(vendorProductData).map(([category, products]) => (
        <CategorySection
          key={category}
          title={category}
          products={products}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          handleOpenModal={handleOpenStoreModal}
        />
      ))}

      {/* Cart Indicator */}
      <CartIndicator
        totalItems={totalItems}
        onClick={handleOpenDeliveryModal}
      />

      {/* Product Modal */}
      {selectedProduct && (
        <StoreModal
          product={selectedProduct}
          isOpen={activeModal === "product"}
          onClose={handleCloseStoreModal}
          onAddToCart={addToCart}
        />
      )}

      {/* Delivery Modal */}
      <DeliveryModal
        isOpen={activeModal === "delivery"}
        onClose={handleCloseDeliveryModal}
      />
    </div>
  );
};

export default VendorCategories;
