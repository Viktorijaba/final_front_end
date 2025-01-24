import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolbarPage from "./pages/ToolbarPage";
import RegisterZustPage from "./pages/RegisterZustPage";
import LoginZustPage from "./pages/LoginZustPage";
import ProfileZustPage from "./pages/ProfileZustPage";
import UsersListZustPage from "./pages/UsersListZustPage";
import CreatePostPage from "./pages/CreatePostPage";
import AllPostsPage from "./pages/AllPostsPage";
import SinglePostZustPage from "./pages/SinglePostZustPage";
import ConversationsPage from "./pages/ConversationsPage";

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <ToolbarPage />
                <div className="content">
                    <Routes>
                        <Route path="/register" element={<RegisterZustPage />} />
                        <Route path="/login" element={<LoginZustPage />} />
                        <Route path="/profile" element={<ProfileZustPage />} />
                        <Route path="/users-list" element={<UsersListZustPage />} />
                        <Route path="/create-post" element={<CreatePostPage />} />
                        <Route path="/all-posts" element={<AllPostsPage />} />
                        <Route path="/post/:id" element={<SinglePostZustPage />} />
                        <Route path="/conversations" element={<ConversationsPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
