import React, {useEffect, useState} from "react";
import SinglePost from "../components/SinglePost";

const IndexPage = ({secretKey, loggedInUsername}) => {
    const [posts, setPosts] = useState([]);

    console.log("Secret Key in IndexPage:", secretKey);
    console.log("Logged In Username in IndexPage:", loggedInUsername);

    useEffect(() => {
        fetch("http://167.99.138.67:1111/getallposts")
            .then((response) => response.json())
            .then((data) => setPosts(data.data));
        console.log("Posts in IndexPage:", posts);
    }, []);

    const handleDeletePost = (id) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    };
    return (
        <div className="posts-page">
            <h1>Posts</h1>
            <div className="post-container">
                {posts.map((post) => (
                    <SinglePost key={post.id}
                                post={post}
                    secretKey ={secretKey}
                    onDelete={handleDeletePost}
                                loggedInUsername={loggedInUsername} />
                ))}
            </div>
        </div>
    );
};

export default IndexPage;
