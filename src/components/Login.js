import React, { useRef, useState } from "react";
import http from "../plugins/https";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useStore from "../store/main";

const Login = () => {
    const setUser = useStore(state => state.setUser);
    const nav = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (!username || !password) {
            setError("All fields are required");
            return;
        }

        const res = await http.post("http://localhost:2002/login", { username, password });

        if (res.success) {

            localStorage.setItem("token", res.token);
            localStorage.setItem("username", username);

            setUser({ username, token: res.token });

            nav("/", { replace: true });
        } else {
            console.warn("Login failed:", res.message);
            setError(res.message || "Login failed");
        }
    };

    return (
        <div className="auth-box">
            <h2>User Login</h2>
            {error && <p className="error">{error}</p>}

            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={passwordRef} type="password" placeholder="Password" />

            <button onClick={handleSubmit}>Login</button>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;
