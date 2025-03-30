import React, { useEffect, useRef, useState } from "react";
import http from "../plugins/https";
import useStore from "../store/main";

const ProfilePage = () => {
    const setUserStore = useStore(state => state.setUser);
    const [user, setUser] = useState({ username: "", photo: "" });
    const [message, setMessage] = useState("");

    const usernameRef = useRef(null);
    const photoRef = useRef(null);
    const password1Ref = useRef(null);
    const password2Ref = useRef(null);

    useEffect(() => {
        http.getToken("http://localhost:2002/getProfile").then((res) => {
            if (res.username) {
                setUser({ username: res.username, photo: res.photo });
            }
        });
    }, []);

    const handleUsernameChange = async () => {
        const newUsername = usernameRef.current.value;
        const res = await http.postToken("http://localhost:2002/updateUsername", { newUsername });
        setMessage(res.message);

        if (res.success) {
            const token = localStorage.getItem("token");

            localStorage.setItem("username", newUsername);
            setUserStore({ username: newUsername, token });

            setUser((prev) => ({ ...prev, username: newUsername }));
        }
    };

    const handlePhotoChange = async () => {
        const photo = photoRef.current.value;
        const res = await http.postToken("http://localhost:2002/updatePhoto", { photo });
        setMessage(res.message);
    };

    const handlePasswordChange = async () => {
        const password1 = password1Ref.current.value;
        const password2 = password2Ref.current.value;

        const res = await http.postToken("http://localhost:2002/updatePassword", {
            password1,
            password2
        });

        setMessage(res.message);
    };

    return (
        <div className="post-container">
            <h2 style={{ textAlign: "center" }}>Profile Settings</h2>
            {message && <p style={{ textAlign: "center", color: "green" }}>{message}</p>}

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <img
                    src={user.photo || "data:image/jpeg;base64,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"}
                    alt="profile"
                    className="user-image"
                />
                <p>Username: <strong>{user.username}</strong></p>

                <input ref={usernameRef} type="text" placeholder="New username" />
                <button onClick={handleUsernameChange}>Change Username</button>

                <input ref={photoRef} type="text" placeholder="New photo URL" />
                <button onClick={handlePhotoChange}>Change Photo</button>

                <input ref={password1Ref} type="password" placeholder="New password" />
                <input ref={password2Ref} type="password" placeholder="Repeat password" />
                <button onClick={handlePasswordChange}>Change Password</button>
            </div>
        </div>
    );
};

export default ProfilePage;
