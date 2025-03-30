import React from 'react';
import { Link } from "react-router-dom";
import useStore from "../store/main";

const Toolbar = () => {
    const user = useStore(state => state.user);
    const logout = useStore(state => state.logout);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        logout();
        window.location.href = "/";
    };

    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <Link className="toolbar-link" to="/">Home</Link>
                <Link className="toolbar-link" to="/create-post">New Post</Link>
                <Link className="toolbar-link" to="/favorites">Favorites</Link>
                <Link className="toolbar-link" to="/messages">Messages</Link>
                <Link className="toolbar-link" to="/profile">Profile</Link>
            </div>

            <div className="toolbar-right">
                {user && (
                    <>
                        <span className="toolbar-user">Logged in as: <strong>{user.username}</strong></span>
                        <button className="toolbar-logout" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Toolbar;
