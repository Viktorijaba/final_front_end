import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import SingleUser from "../components/SingleUser";

const Users = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        http.getToken("http://localhost:2002/allusers")
            .then(res => {
                console.log(res)
                setItems(res.allUsers)
            })
    }, [])

    return (
        <div>
            {items.map((x, i) => <SingleUser key={i} user={x}/>)}
        </div>
    );
};

export default Users;