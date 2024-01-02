import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer((set) => ({
    user: null,
    isAuth: false,
    isAdmin: false,
    wishlist: [],
    logout: () =>
      set((state) => {
        state.user = null;
        state.isAuth = false;
        state.isAdmin = false;
        localStorage.removeItem('token');
      }),
    setUser: (user) =>
      set((state) => {
        if (user?._id) {
          console.log(user);
          state.user = user;
          state.isAuth = true;
          state.isAdmin = state.user.roles.includes('ADMIN_ROLE');
          console.log('user setted');
        }
      }),
    setIsAuth: (token) =>
      set((state) => {
        console.log('set ueer in setIsAuth');
        state.isAuth = true;
        localStorage.setItem('token', token);
      }),
    setWishlist: (wishlist) =>
      set((state) => {
        state.wishlist = wishlist.products;
      }),
  }))
);
