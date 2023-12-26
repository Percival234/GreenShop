import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useEventStore = create(
  immer((set) => ({
    toggle: (event) =>
      set((state) => {
        state[event] = !state[event];
      }),
    open: (event) =>
      set((state) => {
        state[event] = true;
      }),
    close: (event) =>
      set((state) => {
        state[event] = false;
      }),
  }))
);
