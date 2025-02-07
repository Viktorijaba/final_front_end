import React, { useEffect, useState } from "react";
import mainStore from "../store/main";

const API_URL = "http://localhost:2001";

const PeopleList = () => {
    const { user, users, setUsers } = mainStore(state => state);

    useEffect(() => {
        const token = localStorage.getItem("token");

        console.log("🔹 Sending Token in /users Request:", token); // ✅ Debugging Log

        fetch(`${API_URL}/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,  // ✅ Send token with request
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("✅ Users received:", data); // ✅ Debugging Log
                if (Array.isArray(data)) {
                    setUsers(data);
                }
            })
            .catch(err => console.error("❌ Error fetching users:", err));
    }, [user]);

    return (
        <div>
            <h2>People List</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map((u, i) => (
                    <div key={i} className="user-box" style={{ backgroundColor: u.color }}>
                        <span>{u.username}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default PeopleList;
