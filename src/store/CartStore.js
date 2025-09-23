// stores/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Zustand Cart Store
 * Manages cart state, actions, and helper functions.
 */

export const useCartStore = create(
  persist(
    (set, get) => ({
      // Cart items: array of objects { id, title, price, quantity }
      items: [],

      // Total number of items across all cart products

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      // Total price of all items in cart

      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),

      /** -----------------------------
       * ACTIONS (Mutations)
       * ----------------------------- */

      // Add item to cart (if it exists, increase quantity)

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === productId
          );

          if (existingItem && existingItem.quantity > 1) {
            return {
              items: state.items.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          }

          return {
            items: state.items.filter((item) => item.id !== productId),
          };
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== productId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          };
        }),

      clearItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ items: [] }),

      // Helper functions
      getItemQuantity: (productId) => {
        const item = get().items.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
    }),
    // persists cart items to local storage
    {
      name: "cart-storage", // localStorage key
      partialize: (state) => ({ items: state.items }), // persist items
    }
  )
);
