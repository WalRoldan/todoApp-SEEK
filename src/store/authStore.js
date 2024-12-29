import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,

  // Método para configurar autenticación
  setAuth: (isAuthenticated, token) => set({ isAuthenticated, token }),

  // Método para reiniciar el estado (logout o limpieza)
  resetAuth: () => set({ isAuthenticated: false, token: null }),
}));

export default useAuthStore;
