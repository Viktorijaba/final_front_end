import React from 'react';

const SingleRecord = ({user}) => {
    return (
        <div className="border p-2 m-2">
            <b>{user.username}</b>
            <div>Age: {user.age}</div>
            <div>Race {user.race}</div>
            <div>Gender: {user.gender}</div>
        </div>
    );
};

export default SingleRecord;