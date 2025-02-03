import { create } from "zustand";

const mainStore = create((set) => ({
    users: [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,

    setUsers: (newUsers) => set(() => ({ users: newUsers })),

    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        set(() => ({ user }));
    },

    logoutUser: () => {
        localStorage.removeItem("user");
        set(() => ({ user: null }));
    },

    setError: (message) => set(() => ({ error: message })),

    deleteUser: async (password) => {
        const { user } = mainStore.getState();
        if (!user) return;

        try {
            const response = await fetch("http://localhost:2001/deleteUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ secretKey: user.secretKey, password }),
            });

            const data = await response.json();
            if (data.error) {
                set(() => ({ error: data.message }));
            } else {
                alert("Your account has been deleted.");
                localStorage.removeItem("user");
                set(() => ({ user: null }));
            }
        } catch (err) {
            console.error("Error deleting account:", err);
            set(() => ({ error: "Something went wrong" }));
        }
    },
}));

export default mainStore;
