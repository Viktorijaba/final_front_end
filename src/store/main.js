import { create } from 'zustand'

const useStore = create((set) => ({
    user: null,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // changeName: () => set({ username: "Jonas" }),
    setUser: (user) => set({ user }),
}))

export default useStore;

