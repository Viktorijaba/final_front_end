import React from "react";

const RegisterPage = () => {
    const registerAccount = () => {

        const name = document.getElementById("name").value;
        const passwordOne = document.getElementById("passwordOne").value;
        const passwordTwo = document.getElementById("passwordTwo").value;

        fetch("http://167.99.138.67:1111/createaccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                passwordOne: passwordOne,
                passwordTwo: passwordTwo,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Account created successfully!");
                } else {
                    alert("Error: " + (data.message || "Unable to create account"));
                }
            });
    };

    return (
        <div>
            <h1>Register</h1>
            <div>
                <input type="text" id="name" placeholder="Username" />
            </div>
            <div>
                <input type="password" id="passwordOne" placeholder="Password" />
            </div>
            <div>
                <input type="password" id="passwordTwo" placeholder="Confirm Password" />
            </div>
            <button onClick={registerAccount}>Register</button>
        </div>
    );
};

export default RegisterPage;

