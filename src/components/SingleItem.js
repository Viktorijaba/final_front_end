import React from 'react';
import http from "../plugins/https";

const SingleItem = ({item, request}) => {

    function makeRequest() {

        const data = {
            username: request,
            item
        }

        http.postToken("http://localhost:2002/request", data)
            .then(res => {
                console.log(res)
            })

    }

    return (
        <div className="item text-center">
            <div className="icon">{item.icon}</div>
            {request &&  <button onClick={makeRequest}>Request</button>}

        </div>
    );
};

export default SingleItem;