import React, { useRef, useState } from "react";
import http from "../plugins/https";
import { Link } from "react-router-dom";

const Register = () => {
    const usernameRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const username = usernameRef.current.value;
        const password1 = password1Ref.current.value;
        const password2 = password2Ref.current.value;

        if (!username || !password1 || !password2) {
            setError("All fields are required");
            return;
        }

        if (password1 !== password2) {
            setError("Passwords do not match");
            return;
        }

        const res = await http.post("http://localhost:2002/register", {
            username,
            password1,
            password2
        });

        if (res.success) {
            setSuccess("Registration successful!");
            usernameRef.current.value = "";
            password1Ref.current.value = "";
            password2Ref.current.value = "";
        } else {
            setError(res.message || "Registration failed");
        }
    };

    return (
        <div className="auth-box">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={password1Ref} type="password" placeholder="Password" />
            <input ref={password2Ref} type="password" placeholder="Confirm Password" />

            <button onClick={handleSubmit}>Register</button>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default Register;
