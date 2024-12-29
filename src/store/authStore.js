import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,
  setAuth: (isAuthenticated, token) => set({ isAuthenticated, token }),
}));

export default useAuthStore;
