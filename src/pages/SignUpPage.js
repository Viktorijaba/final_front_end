import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    function registerUser() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const password2 = password2Ref.current.value;

        if (password !== password2) {
            return setError("Passwords don't match!");
        }

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        };

        fetch("http://localhost:2001/register", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setError(data.message);
                setSuccess("Success! Redirecting...");
                setError(null);
                setTimeout(() => {

                    navigate("/signin");
                }, 1500);
            });
    }

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <input type="text" ref={usernameRef} placeholder="Username"/>
            <input type="password" ref={passwordRef} placeholder="Password"/>
            <input type="password" ref={password2Ref} placeholder="Confirm Password"/>
            <button onClick={registerUser}>Sign Up</button>
        </div>
    );
}
export default SignUpPage;
