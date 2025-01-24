import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/main";

const ToolbarPage = () => {
    const logoutUser = useStore((state) => state.logoutUser);

    return (
        <nav className="toolbar">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/users-list">Users List</Link>
            <Link to="/create-post">Create Post</Link>
            <Link to="/all-posts">All Posts</Link>
            <Link to="/conversations">Chat</Link>
            <button onClick={logoutUser}>Logout</button>
        </nav>
    );
};

export default ToolbarPage;
