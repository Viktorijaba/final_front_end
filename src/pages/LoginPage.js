import React from "react";

const LoginPage = ({ setSecretKey, setLoggedInUsername }) => {
    const loginAccount = () => {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        fetch("http://167.99.138.67:1111/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Logged in successfully!");
                    setSecretKey(data.secretKey);
                    setLoggedInUsername(name);
                } else {
                    alert("Error: " + (data.message || "Unable to login"));
                }
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" id="name" placeholder="Username" />
            </div>
            <div>
                <input type="password" id="password" placeholder="Password" />
            </div>
            <button onClick={loginAccount}>Login</button>
        </div>
    );
};

export default LoginPage;
