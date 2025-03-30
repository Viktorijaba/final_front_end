import React, { useEffect, useState } from "react";
import http from "../plugins/https";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        http.getToken("http://localhost:2002/getPosts").then((data) => {
            if (data && Array.isArray(data)) {
                setPosts(data);
            }
        });
    }, []);

    const handleAddFavorite = (postId) => {
        http.postToken(`http://localhost:2002/addFavorite/${postId}`, {}).then((res) => {
            if (res.success) alert("Added to favorites!");
        });
    };

    return (
        <div className="post-container">
            <h2 style={{ textAlign: "center" }}>All Posts</h2>
            <div className="post-list">
                {posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img className="post-image" src={post.image} alt={post.title} />

                        <h4
                            style={{ cursor: "pointer", color: "#085e60" }}
                            onClick={() => nav(`/post/${post._id}`)}
                        >
                            {post.title}
                        </h4>

                        <p
                            style={{ cursor: "pointer", fontWeight: "bold" }}
                            onClick={() => nav(`/user/${post.username}`)}
                        >
                            {post.username}
                        </p>

                        <p style={{ fontSize: "12px", color: "gray" }}>{new Date(post.time).toLocaleString()}</p>

                        <button onClick={() => handleAddFavorite(post._id)}>Add to Favorites</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
