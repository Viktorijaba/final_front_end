import React, { useRef, useState } from "react";
import mainStore from "../store/main";

const CreateRecord = () => {
    const { setUsers, setError } = mainStore(state => state);
    const [validation, setValidation] = useState([false, false, false, false]);

    const refs = {
        username: useRef(),
        age: useRef(),
        gender: useRef(),
        race: useRef(),
    };

    function create() {
        const item = {
            username: refs.username.current?.value.trim() || "",
            age: refs.age.current?.value.trim() || "",
            gender: refs.gender.current?.value || "",
            race: refs.race.current?.value || "",
        };

        let valid = [false, false, false, false];

        if (item.username.length > 20 || item.username.length < 4) valid[0] = true;
        if (item.username && item.username[0] !== item.username[0].toUpperCase()) valid[0] = true;
        if (Number(item.age) > 80 || Number(item.age) < 18) valid[1] = true;
        if (item.gender !== "male" && item.gender !== "female") valid[2] = true;
        if (!["european", "african", "asian", "indian"].includes(item.race)) valid[3] = true;

        if (valid.includes(true)) {
            setValidation(valid);
            return;
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        };

        setError(null);
        setValidation([false, false, false, false]);

        fetch("http://localhost:2001/create", options)
            .then(res => res.json())
            .then(data => {
                if (data.error) return setError(data.message);

                fetch("http://localhost:2001/users")
                    .then(res => res.json())
                    .then(usersData => setUsers(usersData));
            });
    }

    return (
        <div className="d-flex direction-col gap-2">
            <input type="text" ref={refs.username} placeholder="username"
                   style={{ backgroundColor: validation[0] ? "#FFA5A5FF" : "white" }} />
            <input type="number" ref={refs.age} placeholder="age"
                   style={{ backgroundColor: validation[1] ? "#FFA5A5FF" : "white" }} />

            <select ref={refs.gender} style={{ backgroundColor: validation[2] ? "#FFA5A5FF" : "white" }}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select ref={refs.race} style={{ backgroundColor: validation[3] ? "#FFA5A5FF" : "white" }}>
                <option value="asian">Asian</option>
                <option value="african">African</option>
                <option value="european">European</option>
                <option value="indian">Indian</option>
            </select>

            <button onClick={create}>Create</button>
        </div>
    );
};

export default CreateRecord;
