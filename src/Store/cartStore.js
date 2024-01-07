import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useCartStore = create(
  immer((set) => ({
    cart: [],
    addToCart: (id, count) =>
      set((state) => {
        state.cart.push({ id, count });
      }),
    removeFromCart: (id) =>
      set((state) => {
        state.cart = state.cart.filter((item) => item.id !== id);
      }),
    increaseItemcount: (id) =>
      set((state) => {
        if (!state.cart.find((item) => item.id === id)) {
          state.cart = [...state.cart, { id, count: 1 }];
        } else {
          state.cart = state.cart.map((item) => {
            if (item.id === id) {
              return { ...item, count: item.count + 1 };
            } else {
              return item;
            }
          });
        }
      }),
    decreaseItemcount: (id) =>
      set((state) => {
        if (state.cart.find((item) => item.id === id)?.count === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          state.cart = state.cart.map((item) => {
            if (item.id === id) {
              return { ...item, count: item.count - 1 };
            } else {
              return item;
            }
          });
        }
      }),
  }))
);
