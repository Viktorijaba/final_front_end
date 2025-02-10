import React from 'react';
import {Link} from "react-router-dom";

const SingleUser = ({user}) => {
    return (
        <div className="p-3 border mb-2">
            <Link to={`/user/${user.username}`}>
                <h3>{user.username}</h3>
            </Link>
        </div>
    );
};

export default SingleUser;