import { create } from 'zustand';

const useStore = create((set, get) => ({
    users: [],
    currentUser: null,
    posts: [],
    messages: [],

    registerUser: (username, password, confirmPassword) => {
        const state = get();

        if (!username || !password || !confirmPassword) {
            return { error: "All fields are required." };
        }

        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].username === username) {
                return { error: "Username already exists." };
            }
        }

        if (password !== confirmPassword) {
            return { error: "Passwords do not match." };
        }

        const newUser = {
            username,
            password,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKj5KdeSgoWfk-dgpM32GIxwbK6HqZzDn8Xg&s',
        };

        set({ users: [...state.users, newUser] });

        return { success: true };
    },

    loginUser: (username, password) => {
        const state = get();
        let foundUser = null;

        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].username === username && state.users[i].password === password) {
                foundUser = state.users[i];
            }
        }

        if (foundUser) {
            set({ currentUser: foundUser });
            return { success: true };
        }
        return { error: "Invalid username or password." };
    },

    logoutUser: () => set({ currentUser: null }),

    createPost: (imageUrl, description) => {
        const state = get();

        if (!state.currentUser) {
            return { error: "You must be logged in to create a post." };
        }

        const newPost = {
            id: Date.now(),
            image: imageUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKj5KdeSgoWfk-dgpM32GIxwbK6HqZzDn8Xg&s',
            description,
            owner: state.currentUser.username,
            comments: [],
            likedBy: [],
        };

        set({ posts: [...state.posts, newPost] });
        return { success: true };
    },

    addComment: (postId, comment) => {
        const state = get();

        if (!state.currentUser) {
            return { error: "You must be logged in to comment." };
        }

        const updatedPosts = state.posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, { user: state.currentUser.username, text: comment }]
                };
            }
            return post;
        });

        set({ posts: updatedPosts });
    },

    likePost: (postId) => {
        const state = get();

        if (!state.currentUser) {
            return { error: "You must be logged in to like a post." };
        }

        const updatedPosts = state.posts.map(post => {
            if (post.id === postId) {
                if (!post.likedBy.includes(state.currentUser.username)) {
                    return {
                        ...post,
                        likedBy: [...post.likedBy, state.currentUser.username]
                    };
                }
            }
            return post;
        });

        set({ posts: updatedPosts });
    },

    updateUserImage: (newImageUrl) => {
        set((state) => {
            if (!state.currentUser) return state;
            return {
                currentUser: { ...state.currentUser, image: newImageUrl },
                users: state.users.map(user =>
                    user.username === state.currentUser.username ? { ...user, image: newImageUrl } : user
                ),
            };
        });
    },

    deleteComment: (postId, commentIndex) => {
        const updatedPosts = get().posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: post.comments.filter((_, index) => index !== commentIndex),
                };
            }
            return post;
        });

        set({ posts: updatedPosts });
    },

    deletePost: (postId) => {
        const updatedPosts = get().posts.filter(post => post.id !== postId);
        set({ posts: updatedPosts });
    },

    deleteProfile: (password) => {
        const state = get();
        if (state.currentUser && state.currentUser.password === password) {
            const updatedUsers = state.users.filter(user => user.username !== state.currentUser.username);
            const updatedPosts = state.posts.filter(post => post.owner !== state.currentUser.username);

            set({
                users: updatedUsers,
                posts: updatedPosts,
                currentUser: null
            });

            return { success: true };
        }
        return { error: "Incorrect password." };
    },
    sendMessage: (recipient, message) => {
        const state = get();

        if (!state.currentUser) {
            return { error: "You must be logged in to send a message." };
        }

        const newMessage = {
            id: Date.now(),
            sender: state.currentUser.username,
            recipient,
            text: message
        };

        set({ messages: [...state.messages, newMessage] });
    },

}));

export default useStore;
