import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/main';

const AllPostsPage = () => {
    const posts = useStore((state) => state.posts);

    return (
        <div className="container">
            <h2>All Posts</h2>
            <div className="post-list">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post-item">
                            <Link to={`/post/${post.id}`}>
                                <img src={post.image} alt="Post" width="150" />
                                <p>{post.description}</p>
                            </Link>
                            <p><strong>By:</strong> {post.owner}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available. Create a new post!</p>
                )}
            </div>
        </div>
    );
};

export default AllPostsPage;
