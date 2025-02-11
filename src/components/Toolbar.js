import React from 'react';
import mainStore from "../store/main";

const Toolbar = () => {
    const { user } = mainStore(state => state);

    return (
        <div className="d-flex justify-content-between p-3 border mb-5">
            <div>
                {user ? `Logged in as: ${user.username}` : "Not logged in"}
            </div>
        </div>
    );
};

export default Toolbar;
