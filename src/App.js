import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import MessagesPage from "./pages/MessagesPage";
import SinglePostPage from "./pages/SinglePostPage";
import SingleUserPage from "./pages/SingleUserPage";

import useStore from "./store/main";

function App() {
    const user = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (token && username) {
            setUser({ username, token });
        }
    }, [setUser]);

    useEffect(() => {

    }, [user]);

    return (
        <BrowserRouter>
            {user?.token && <Toolbar />}
            <Routes>
                {!user?.token ? (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create-post" element={<CreatePostPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/post/:id" element={<SinglePostPage />} />
                        <Route path="/user/:username" element={<SingleUserPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
