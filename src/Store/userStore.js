import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer((set) => ({
    user: null,
    isAuth: false,
    wishlist: [],
    logout: () =>
      set((state) => {
        state.user = null;
        state.isAuth = false;
        localStorage.removeItem('token');
      }),
    setUser: (user) =>
      set((state) => {
        if (user?._id) {
          console.log(user);
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
  }))
);
