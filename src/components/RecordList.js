import React from 'react';
import SingleRecord from "./SingleRecord";
import mainStore from "../store/main";

const RecordList = () => {
    const {users} = mainStore(state => state)

    return (
        <div>
            {users.map((x, i) => <SingleRecord user={x} key={i}/>)}
        </div>
    );
};

export default RecordList;