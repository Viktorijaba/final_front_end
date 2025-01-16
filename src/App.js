import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolbarPage from "./pages/ToolbarPage";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import UserPage from "./pages/UserPage";
import SinglePostPage from "./pages/SinglePostPage";
import EditPostPage  from "./pages/EditPostPage";

import './App.css'

const App = () => {
    const [secretKey, setSecretKey] = useState(null);
    const [loggedInUsername, setLoggedInUsername] = useState(null);

    console.log("Secret Key in App:", secretKey);
    console.log("Logged In Username in App:", loggedInUsername);
    return (
        <BrowserRouter>
            <div className="app-layout">
                <ToolbarPage secretKey={secretKey} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<IndexPage secretKey={secretKey} loggedInUsername={loggedInUsername} />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage setSecretKey={setSecretKey} setLoggedInUsername={setLoggedInUsername} />} />
                        <Route path="/upload" element={<UploadPage secretKey={secretKey} />} />
                        <Route path="/singlepost/:username/:post_id" element={<SinglePostPage />} />
                        <Route path="/user/:username" element={<UserPage />} />
                        <Route
                            path="/editpost/:id"
                            element={<EditPostPage secretKey={secretKey} />}
                        />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
