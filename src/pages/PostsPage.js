import React, {useEffect, useState} from "react";
import SinglePost from "../components/SinglePost";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="posts-page">
            <h1>Posts</h1>
            <div className="post-container">
                {posts.map((post) => (
                    <SinglePost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
