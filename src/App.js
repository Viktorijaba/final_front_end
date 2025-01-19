import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import User from "./components/User";
import UserDetailsPage from "./pages/UserDetailsPage";
import UserTodosPage from "./pages/UserTodosPage";
import UserAlbumPage from "./pages/UserAlbumPage";
import UserPostsPage from "./pages/UserPostsPage";
import OnePostPage from "./pages/OnePostPage";
import UserPhotosPage from "./pages/UserPhotosPage";

import './App.css'

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-layout">
                <div className="content">
                    <Routes>
                            <Route path="/" element={<UsersPage />} />
                            <Route path="/user" element={<User />} />
                            <Route path="/user/:id" element={<UserDetailsPage />} />
                            <Route path="/user/:id/todos" element={<UserTodosPage />} />
                            <Route path="/user/:id/albums" element={<UserAlbumPage />} />
                            <Route path="/user/:id/posts" element={<UserPostsPage />} />
                            <Route path="/post/:postId" element={<OnePostPage />} />
                            <Route path="/album/:albumId/photos" element={<UserPhotosPage />} />
                        </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
