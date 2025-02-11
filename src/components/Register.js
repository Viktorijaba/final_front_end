import React, { useRef, useState } from "react";
import http from "../plugins/https";

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

        const res = await http.post("http://localhost:2002/register", { username, password1, password2 });

        if (res.ok) {
            setSuccess("Registration successful!");
            usernameRef.current.value = "";
            password1Ref.current.value = "";
            password2Ref.current.value = "";
        } else {
            setError(res.message || "Registration failed");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>User Registration</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <input ref={usernameRef} type="text" placeholder="Username" style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }} />
            <input ref={password1Ref} type="password" placeholder="Password" style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }} />
            <input ref={password2Ref} type="password" placeholder="Confirm Password" style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }} />
            <button onClick={handleSubmit} style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Register</button>
        </div>
    );
};

export default Register;
