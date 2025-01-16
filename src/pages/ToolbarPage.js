import React from "react";
import { Link } from "react-router-dom";

const ToolbarPage = ({ secretKey }) => {
    return (
        <header className="toolbar">
            <Link to="/">Home</Link>
            {!secretKey && <Link to="/register">Register</Link>}
            {!secretKey && <Link to="/login">Login</Link>}
            {secretKey && <Link to="/upload">Upload</Link>}
        </header>
    );
};

export default ToolbarPage;
