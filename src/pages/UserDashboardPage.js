import React, { useState } from "react";
import mainStore from "../store/main";

const UserDashboardPage = () => {
    const { user, setUser } = mainStore(state => state);
    const [color, setColor] = useState(user?.color || "#ADD8E6");
    const updateColor = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("No token found, please log in again.");
            return;
        }

        console.log("🔹 Sending token:", token); // ✅ Debugging log

        fetch("http://localhost:2001/updateColor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,  // ✅ Ensure token is sent
            },
            body: JSON.stringify({ color }),
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setUser({ ...user, color });
                    localStorage.setItem("token", data.token); // ✅ Save updated token
                    alert("Color updated!");
                } else {
                    alert(data.message);
                }
            })
            .catch(err => console.error("❌ Error updating color:", err));
    };

    return (
        <div>
            <h2>Welcome, {user?.username}!</h2>
            <label>Pick Your Color:</label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={updateColor}>Save Color</button>
        </div>
    );
};

export default UserDashboardPage;
