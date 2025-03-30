import React, { useEffect, useState } from "react";
import http from "../plugins/https";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        http.getToken("http://localhost:2002/getFavorites").then((res) => {
            if (Array.isArray(res)) {
                setFavorites(res);
            }
        });
    }, []);

    const handleRemoveFavorite = (postId) => {
        http.postToken(`http://localhost:2002/removeFavorite/${postId}`, {}).then((res) => {
            if (res.success) {
                setFavorites((prev) => prev.filter((post) => post._id !== postId));
            }
        });
    };

    return (
        <div className="post-container">
            <h2 style={{ textAlign: "center" }}>My Favorite Posts</h2>
            <div className="post-list">
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    favorites.map((post) => (
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
                            <p style={{ fontSize: "12px", color: "gray" }}>
                                {new Date(post.time).toLocaleString()}
                            </p>
                            <button onClick={() => handleRemoveFavorite(post._id)}>Remove from Favorites</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
