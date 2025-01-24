import React, {useState} from 'react';
import useStore from '../store/main';
import { useNavigate} from "react-router-dom";

const CreatePostPage = () => {

        const createPost = useStore((state) => state.createPost);
        const [imageUrl, setImageUrl] = useState('');
        const [description, setDescription] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

    const handleCreatePost = () => {
        const result = createPost(imageUrl, description);
        if (result.error) {
            setError(result.error);
        } else {
            setError('');
            navigate('/all-posts');
        }
    };

    return (
        <div className="container">
            <h2>Create Post</h2>
            <input type="text"
                   placeholder="Img URL"
                   value={imageUrl}
                   onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleCreatePost}>Post</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default CreatePostPage;
