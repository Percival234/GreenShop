import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer(() => ({
    isAuth: false,
    isAdmin: false,
    user: null,
  }))
);
