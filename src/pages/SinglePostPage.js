import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
    const { username, post_id } = useParams();
    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://167.99.138.67:1111/getSinglePost/${username}/${post_id}`)
            .then((response) => response.json())
            .then((data) => setPosts(data.data));
    }, [username, post_id]);

    return (
        <div className="single-post-page">
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
};
export default SinglePostPage;