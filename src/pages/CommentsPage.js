import React, { useState, useEffect } from "react";
import Comment from "../components/Comments";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=20")
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, []);

    return (
        <div className="comments-page">
            <h1>Comments</h1>
            <div className="comments-container">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentsPage;
