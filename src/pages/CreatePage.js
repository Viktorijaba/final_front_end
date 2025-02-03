import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

const CreatePage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreatePost = () => {
        if (!imageUrl || !title) {
            setError("Please enter an image URL and title");
            return
    }
        fetch("http://localhost:2001/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: imageUrl, title, id: Date.now().toString() }),
        })
            .then((response) => response.json())
            .then(() => {
                setError("");
                navigate("/");
            })
            .catch((error) => console.error("Error creating post:", error));
    };
    return (
        <div className="container">
            <h2>Create Post</h2>
            <input
                type="text"
                placeholder="Img URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleCreatePost}>Post</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default CreatePage;
