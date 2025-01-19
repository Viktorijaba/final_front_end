import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";

const UserDetailsPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
    <div className="user-details-page">
            <h1>{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p><strong>Company:</strong> {user.company.name}</p>

            <div className="user-links">
                <Link to={`/user/${id}/posts`} className="user-link">User Posts</Link>
                <Link to={`/user/${id}/albums`} className="user-link">User Albums</Link>
                <Link to={`/user/${id}/todos`} className="user-link">User Todos</Link>

            </div>
    </div>
    );
};

 export default UserDetailsPage ;

