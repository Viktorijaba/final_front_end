import React, { useEffect, useState } from "react";
import mainStore from "../store/main";
import { useNavigate } from "react-router-dom";

const UserDashboardPage = () => {
    const { user, deleteUser } = mainStore(state => state);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        fetch("http://localhost:2001/getnotifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secretKey: user.secretKey }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    return;
                }
                setNotifications(data.notifications);
                setLoading(false);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [user]);

    function pokeBack(targetUser) {
        if (!user) return;

        fetch("http://localhost:2001/poke", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secretKey: user.secretKey, toUser: targetUser }),
        })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => console.error("Poke back error:", err));
    }

    const handleDeleteAccount = async () => {
        if (!password) {
            setError("Please enter your password to confirm.");
            return;
        }

        await deleteUser(password);
        navigate("/signin");
    };

    return (
        <div>
            <h2>Welcome, {user?.username}</h2>
            <h3  style={{ color: "#456cdd"}}>Notifications</h3>
            {loading ? <p>Loading notifications...</p> : null}
            {notifications.length === 0 ? (
                <p>No notifications yet</p>
            ) : (
                notifications.map((n, i) => (
                    <div key={i} className="border p-2 m-2">
                        <p>You were poked by <b>{n.fromUser}</b></p>
                        <small>{n.date}</small>
                        <button onClick={() => pokeBack(n.fromUser)}>Poke Back</button>
                    </div>
                ))
            )}

            <h3 style={{ color: "red", marginTop: "10px" }}>Delete Your Account</h3>
            <input
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginRight: "10px", marginBottom: "20px", padding: "5px" }}
            />
            <button
                onClick={handleDeleteAccount}
                style={{ backgroundColor: "red", color: "white", padding: "5px 10px", cursor: "pointer" }}
            >
                Delete Account
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default UserDashboardPage;
