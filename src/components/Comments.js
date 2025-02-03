import React from "react";

const Comment = ({ comment }) => {
    const { name, email, body } = comment;

    return (
        <div className="comment-card">
            <h3>{name}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;
