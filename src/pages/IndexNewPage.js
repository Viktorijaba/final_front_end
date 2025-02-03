import React, {useEffect, useState} from "react";


const IndexNewPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:2001/")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const handleDeletePost = (id) => {
        if (!id) {
            console.error("Error: Post ID is undefined");
            return;
        }
        fetch(`http://localhost:2001/remove/${id}`)
            .then((response) => response.json())
            .then(() => {

                setPosts(posts.filter(post => post.id !== id));
            })

    };
    return (
        <div className="posts-page">
            <h1>Posts</h1>
            <div className="post-container">
                {posts.map((post, index) => (
                    <div key={index} className="post-card">
                        <img src={post.image} alt="Post"/>
                        <p>{post.title}</p>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndexNewPage;
