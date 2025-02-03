import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainStore from "../store/main";

const SignInPage = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { setUser } = mainStore(state => state);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function loginUser() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;


        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        };

        fetch("http://localhost:2001/login", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.message);
                    return;
                }
                setUser(data.user);
                navigate("/dashboard");
            });
    }

    return (
        <div className="form-container">
            <h2>Sign In</h2>
            {error && <p className="error">{error}</p>}
            <input type="text" ref={usernameRef} placeholder="Username" />
            <input type="password" ref={passwordRef} placeholder="Password" />
            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default SignInPage;
