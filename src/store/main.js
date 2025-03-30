import { create } from "zustand";

const useStore = create((set) => ({
    user: null,
    setUser: ({ username, token }) => {
        set({ user: { username, token } });
    },
    logout: () => set({ user: null }),
}));

export default useStore;
