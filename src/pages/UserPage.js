import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import {useParams} from "react-router-dom";
import SingleItem from "../components/SingleItem";

const UserPage = () => {

    const {username} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        http.getToken("http://localhost:2002/user/"+username)
            .then(res => {
                console.log(res)
                setItems(res.userItems.inventory)
            })
    }, [])

    return (
        <div>
            <h3>{username} Inventory</h3>
            <div className="d-flex flex-wrap">
                {items.map(x => <SingleItem request={username} item={x} key={x.id}/>)}
            </div>
        </div>
    );
};

export default UserPage;