import { create } from "zustand";
export const useAuthZustand = create((set) => ({
  isAuth: !!localStorage.getItem("token"),
  login: (token) => {
    localStorage.setItem("token", token);
    set({ isAuth: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ isAuth: false });
  },
}));
