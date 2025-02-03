import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OnePostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            });
    }, [postId]);

    if (loading) {
        return <div>Loading post...</div>;
    }

    return (
        <div className="single-post-page">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default OnePostPage;
