import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { SHIPPING } from '@Constants/SHIPPING';
import { PAYMENT_METHODS } from '@Constants/PAYMENT_METHODS';

export const useCartStore = create(
  persist(
    immer((set) => ({
      cartItems: [],
      shipping: SHIPPING,
      totalPrice: 0,
      payment: PAYMENT_METHODS[0],
      order: null,
      setPayment: (payment) => {
        set((state) => {
          state.payment = payment;
        });
      },
      setOrder: (order) => {
        set((state) => {
          state.order = order;
        });
      },
      clearCart: () =>
        set((state) => {
          state.cartItems = [];
        }),
      setTotalPrice: (totalPrice) =>
        set((state) => {
          state.totalPrice = totalPrice;
        }),
      addToCart: (product, count) =>
        set((state) => {
          state.cartItems.push({ product, count });
        }),
      removeFromCart: (id) =>
        set((state) => {
          state.cartItems = state.cartItems.filter((item) => item.product._id !== id);
        }),
      increaseItemCount: (id) =>
        set((state) => {
          state.cartItems = state.cartItems.map((item) => {
            return item.product._id === id ? { ...item, count: item.count + 1 } : item;
          });
        }),
      decreaseItemCount: (id) =>
        set((state) => {
          state.cartItems = state.cartItems.map((item) => {
            return item.product._id === id ? { ...item, count: item.count - 1 } : item;
          });
        }),
    })),
    {
      name: 'cart-localstorage',
    }
  )
);
