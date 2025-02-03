import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainStore from "../store/main";

const PeopleList = () => {
    const { user } = mainStore(state => state);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate("/signin");
            return;
        }

        fetch("http://localhost:2001/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [user, navigate]);

    function pokeUser(targetUsername) {

        if (!targetUsername) {
            alert("Error: Target username is undefined!");
            return;
        }

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secretKey: user.secretKey, toUser: targetUsername }),
        };

        fetch("http://localhost:2001/poke", options)
            .then(res => res.json())
            .then(data => {
                alert(data.message);
            });
    }


    return (
        <div>
            <h2>People List</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map((u, i) => (
                    <div key={i} className="border p-2 m-2 d-flex">
                        <span>{u.username}</span>
                        {u.username !== user.username && (
                            <button onClick={() => pokeUser(u.username)}>Poke</button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default PeopleList;
