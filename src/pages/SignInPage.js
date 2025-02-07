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

        fetch("http://localhost:2001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.message);
                    return;
                }

                console.log("✅ Token received on login:", data.token); // ✅ Debugging Log
                localStorage.setItem("token", data.token); // ✅ Store token in Local Storage
                setUser(data.user); // ✅ Update Zustand state
                navigate("/dashboard");
            });
    }


    return (
        <div className="form-container">
            <h2>Sign In</h2>
            {error && <p className="error">{error}</p>}
            <input type="text" ref={usernameRef} placeholder="Username" />
            <input type="password" ref={passwordRef} placeholder="Password" />
            <button onClick={loginUser}>Sign In</button>
        </div>
    );
};

export default SignInPage;
