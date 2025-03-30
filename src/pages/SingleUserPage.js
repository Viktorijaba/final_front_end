import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/https";

const SingleUserPage = () => {
    const { username } = useParams();
    const [userInfo, setUserInfo] = useState(null);
    const [posts, setPosts] = useState([]);
    const [messageSent, setMessageSent] = useState("");
    const messageRef = useRef(null);

    useEffect(() => {
        fetchUserInfo();
        fetchUserPosts();
    }, [username]);

    const fetchUserInfo = async () => {
        const res = await http.getToken(`http://localhost:2002/getUser/${username}`);
        if (res?.success === false || !res?.username) {
            console.error("Could not load user info:", res.message);
            return;
        }
        setUserInfo(res);
    };


    const fetchUserPosts = async () => {
        const res = await http.getToken(`http://localhost:2002/userPosts/${username}`);
        if (!Array.isArray(res)) {
            console.error("Could not load posts:", res.message);
            return;
        }
        setPosts(res);
    };


    const sendMessage = async () => {
        const content = messageRef.current.value;
        if (!content) return;

        const res = await http.postToken("http://localhost:2002/sendMessage", {
            to: username,
            content
        });

        if (res.success) {
            setMessageSent("Message sent!");
            messageRef.current.value = "";
        } else {
            setMessageSent("Failed to send message.");
        }
    };

    if (!userInfo) return <p>Loading user info...</p>;

    return (
        <div className="post-container">
            <h2>{userInfo.username}</h2>
            <img
                src={
                    userInfo.photo ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mTu9SmW287hGN-MH_IohejnGyvpF8zV2sb0Qvr1R0BTXgZAiUxF_Z_c&s"
                }
                alt=""
                className="user-image"
            />

            <div style={{ marginTop: "20px" }}>
                <h3>Send a message to {username}</h3>
                <input ref={messageRef} type="text" placeholder="Your message..." />
                <button onClick={sendMessage}>Send</button>
                {messageSent && <p>{messageSent}</p>}
            </div>

            <div style={{ marginTop: "40px" }}>
                <h3>Posts by {username}</h3>
                {posts.length === 0 ? (
                    <p>No posts yet.</p>
                ) : (
                    <div className="post-list">
                        {posts.map((post) => (
                            <div key={post._id} className="post-card">
                                <img className="post-image" src={post.image} alt={post.title} />
                                <h4>{post.title}</h4>
                                <p>{new Date(post.time).toLocaleString()}</p>
                                <p>{post.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleUserPage;
