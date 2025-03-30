import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/https";

const SinglePostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const commentRef = useRef(null);

    useEffect(() => {
        http.getToken(`http://localhost:2002/getPost/${id}`).then((data) => {
            if (data) setPost(data);
        });
    }, [id]);

    const addComment = () => {
        const comment = commentRef.current.value;
        if (!comment) return;

        http.postToken(`http://localhost:2002/comment/${id}`, { comment }).then((res) => {
            if (res.success) {
                setPost(res.post);
                commentRef.current.value = "";
            }
        });
    };

    if (!post) return <p>Loading post...</p>;

    return (
        <div className="post-container">
            <div className="post-card">
                <img className="post-image" src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p><strong>By:</strong> {post.username}</p>
                <p><strong>Posted:</strong> {new Date(post.time).toLocaleString()}</p>
                <p>{post.description}</p>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h3>Comments</h3>
                <div>
                    <input ref={commentRef} type="text" placeholder="Add a comment..." />
                    <button onClick={addComment}>Comment</button>
                </div>

                {post.comments?.length > 0 ? (
                    post.comments.map((c, i) => (
                        <div key={i} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
                            <strong>{c.username}:</strong> {c.comment}
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default SinglePostPage;
