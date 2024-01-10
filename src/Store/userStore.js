import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  persist(
    immer((set) => ({
      user: null,
      isAuth: false,
      wishlist: [],
      logout: () =>
        set((state) => {
          state.user = null;
          state.isAuth = false;
          state.wishlist = [];
          localStorage.removeItem('token');
        }),
      setUser: (user) =>
        set((state) => {
          if (user?._id) {
            state.user = user;
            state.isAuth = true;
          }
        }),
      setIsAuth: (token) =>
        set((state) => {
          state.isAuth = true;
          localStorage.setItem('token', token);
        }),
      setWishlist: (wishlist) =>
        set((state) => {
          state.wishlist = wishlist.products;
        }),
    })),
    {
      name: 'user-localstorage',
    }
  )
);
