import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer((set) => ({
    user: null,
    isAuth: false,
    isAdmin: false,
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
    register: (token) =>
      set((state) => {
        state.isAuth = true;
        localStorage.setItem('token', token);
      }),
    login: (token) =>
      set((state) => {
        state.isAuth = true;
        localStorage.setItem('token', token);
      }),
  }))
);
