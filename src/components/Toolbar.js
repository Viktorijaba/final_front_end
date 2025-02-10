import React from 'react';
import {Link} from "react-router-dom";
import mainStore from "../store/main";

const Toolbar = () => {
    const {user} = mainStore(state => state)


    return (
        <div className="d-flex justify-content-between p-3 border mb-5">
            <div className="d-flex gap-2">
                <Link to="/inventory">Inventory</Link>
                <Link to="/requests">Requests</Link>
                <Link to="/users">All Users</Link>
            </div>

            <div>
                Logged in as: <b>{user}</b>
            </div>
        </div>
    );
};

export default Toolbar;