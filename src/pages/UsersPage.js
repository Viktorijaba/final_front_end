import React, { useState, useEffect } from "react";
import User from "../components/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="users-page">
            <h1>Users</h1>
            <div className="users-container">
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};
export default UsersPage;

