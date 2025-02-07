import { create } from "zustand";

const mainStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    users: [],

    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set({ user });
    },

    setUsers: (users) => {
        set({ users });
    },

    logoutUser: () => {
        localStorage.removeItem("user");
        set({ user: null });
    },
}));

export default mainStore;
