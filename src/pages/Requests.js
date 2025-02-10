import React, {useEffect, useState} from 'react';
import http from "../plugins/https";
import SingleNotification from "../components/SingleNotification";

const Requests = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        http.getToken("http://localhost:2002/notifications")
            .then(res => {
                console.log(res)
                setItems(res.myNotifications)
            })
    }, [])

    function remove(id) {
        let copy = [...items]
        copy = copy.filter(x => x.id !== id)
        setItems(copy)
    }

    return (
        <div>
            {items.map(x => <SingleNotification remove={remove} item={x} key={x.time}/>)}
        </div>
    );
};

export default Requests;