import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { SHIPPING } from '@Constants/CONSTANTS';

export const useCartStore = create(
  immer((set) => ({
    cartItems: [],
    shipping: SHIPPING,
    totalPrice: 0,
    payment: 'cash',
    setTotalPrice: () =>
      set((state) => {
        state.totalPrice = state.cartItems.reduce(
          (acc, item) => acc + (item.product.price - item.product.price * item.product.sale),
          0
        );
      }),
    addToCart: (product, count) =>
      set((state) => {
        state.cartItems.push({ product, count });
        state.setTotalPrice();
      }),
    removeFromCart: (id) =>
      set((state) => {
        state.cartItems = state.cartItems.filter((item) => item.product._id !== id);
        state.setTotalPrice();
      }),
    increaseItemCount: (id) =>
      set((state) => {
        state.cartItems = state.cartItems.map((item) => {
          return item.product._id === id ? { ...item, count: item.count + 1 } : item;
        });
        state.setTotalPrice();
      }),
    decreaseItemCount: (id) =>
      set((state) => {
        state.cartItems = state.cartItems.map((item) => {
          return item.product._id === id ? { ...item, count: item.count - 1 } : item;
        });
        state.setTotalPrice();
      }),
  }))
);
