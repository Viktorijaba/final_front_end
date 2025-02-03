import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/main';

const SinglePostZustPage = () => {
    const { id } = useParams();
    const { posts, currentUser, addComment, likePost, deleteComment, deletePost } = useStore();

    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const postId = Number(id);
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return <p>Sorry, post not found.</p>;
    }

    const handleAddComment = () => {
        if (comment.trim() === '') {
            setError('Comment cannot be empty');
            return;
        }
        addComment(post.id, comment);
        setComment('');
        setError('');
    };

    const handleLikePost = () => {
        const result = likePost(post.id);
        if (result?.error) {
            setError(result.error);
        }
    };

    const handleDeleteComment = (commentIndex) => {
        deleteComment(post.id, commentIndex);
    };

    const handleDeletePost = () => {
        deletePost(post.id);
    };

    return (
        <div className="container">
            <h2>Post Details</h2>
            <img src={post.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKj5KdeSgoWfk-dgpM32GIxwbK6HqZzDn8Xg&s'} alt="Post" width="300" />
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Owner:</strong> {post.owner}</p>

            <p><strong>Likes:</strong> {post.likedBy ? post.likedBy.length : 0}</p>
            <button onClick={handleLikePost}>Like</button>

            {currentUser?.username === post.owner && (
                <button onClick={handleDeletePost} style={{ marginTop: '5px', backgroundColor: 'red' }}>Delete Post</button>
            )}

            <input
                type="text"
                placeholder="New comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Comment</button>
            {error && <p className="error">{error}</p>}

            <h3>Comments</h3>
            <div className="comments-container">
                {post.comments.length > 0 ? (
                    post.comments.map((c, index) => (
                        <div key={index} className="comment">
                            <strong>{c.user}:</strong> {c.text}
                            {c.user === currentUser?.username && (
                                <button
                                    onClick={() => handleDeleteComment(index)}
                                    style={{ marginLeft: '10px', backgroundColor: 'red' }}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No comments yet.</div>
                )}
            </div>
        </div>
    );
};

export default SinglePostZustPage;
