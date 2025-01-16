import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const { username } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getUserPosts/${username}`)
            .then((response) => response.json())
            .then((data) => setPosts(data.data || []));
    }, [username]);

    return (
        <div>
            <h1>Posts by {username}</h1>
            <div className="post-container">
                {posts.map((post) => (
                    <div key={post.id} className="single-post">
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                        <img src={post.image} alt={post.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;
