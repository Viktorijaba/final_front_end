import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserPostsPage = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    return (
        <div className="user-posts-page">
            <h1>User Posts</h1>
            <div className="posts-container">
                {posts.map((post) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="post-link">
                        <div className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserPostsPage;
