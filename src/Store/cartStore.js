import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer((set) => ({
    cart: localStorage.getItem('cart'),

    addToCart: () => set((state) => {}),
    removeFromCart: (wishlist) =>
      set((state) => {
        state.wishlist = wishlist.products;
      }),
  }))
);
