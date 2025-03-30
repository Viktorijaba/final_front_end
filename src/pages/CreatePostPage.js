import React, { useRef, useState } from "react";
import http from "../plugins/https";

const CreatePostPage = () => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const descRef = useRef(null);
    const [message, setMessage] = useState("");

    const handleCreate = async () => {
        setMessage("");

        const title = titleRef.current.value;
        const image = imageRef.current.value;
        const description = descRef.current.value;

        if (!title || !image || !description) {
            setMessage("All fields are required.");
            return;
        }

        const res = await http.postToken("http://localhost:2002/createPost", {
            title,
            image,
            description
        });

        if (res.success) {
            setMessage("Post created successfully!");
            titleRef.current.value = "";
            imageRef.current.value = "";
            descRef.current.value = "";
        } else {
            setMessage("Failed to create post.");
        }
    };

    return (
        <div className="post-container">
            <h2>Create a New Post</h2>
            {message && <p style={{ textAlign: "center", color: "darkgreen" }}>{message}</p>}

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <input ref={titleRef} type="text" placeholder="Title" />
                <input ref={imageRef} type="text" placeholder="Image URL" />
                <textarea ref={descRef} rows={4} placeholder="Description..." />

                <button onClick={handleCreate}>Create Post</button>
            </div>
        </div>
    );
};

export default CreatePostPage;
