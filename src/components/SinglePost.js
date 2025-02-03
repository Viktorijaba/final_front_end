import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ post, secretKey, onDelete, loggedInUsername }) => {
    const deletePost = () => {
        fetch("http://167.99.138.67:1111/deletepost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                secretKey: secretKey,
                id: post.id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Post deleted successfully!");
                    onDelete(post.id);
                } else {
                    alert("Error: " + (data.message || "Unable to delete post"));
                }
            });
    };

    return (
        <div className="single-post">
            <Link to={`/singlepost/${post.username}/${post.id}`}>
                {post.title}
            </Link>
            <p>{post.body}</p>
            <p>{post.description}</p>
            <Link to={`/user/${post.username}`}>{post.username}</Link>
            <img src={post.image} alt={post.title} />
            {secretKey && loggedInUsername === post.username && (
                <>
                    <button style={{ marginBottom: "10px" }} onClick={deletePost}>Delete</button>
                    <Link
                        to={`/editpost/${post.id}`}
                        state={{ post }}
                    >
                        <button>Edit</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default SinglePost;
