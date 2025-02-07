import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordOneRef = useRef();
    const passwordTwoRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    function registerUser() {
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const passwordOne = passwordOneRef.current.value;
        const passwordTwo = passwordTwoRef.current.value;

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, passwordOne, passwordTwo }),
        };

        fetch("http://localhost:2001/register", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.message);
                    setSuccess(null);
                } else {
                    setSuccess("Registration successful! Redirecting to Sign In...");
                    setError(null);
                    setTimeout(() => navigate("/signin"), 1500);
                }
            });
    }


    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <input type="text" ref={usernameRef} placeholder="Username" />
            <input type="email" ref={emailRef} placeholder="Email" />
            <input type="password" ref={passwordOneRef} placeholder="Password" />
            <input type="password" ref={passwordTwoRef} placeholder="Confirm Password" />
            <button onClick={registerUser}>Sign Up</button>
        </div>
    );
}

export default SignUpPage;
