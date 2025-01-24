import React, { useState } from 'react';
import useStore from '../store/main';

const ProfileZustPage = () => {
    const { currentUser, updateUserImage, logoutUser, deleteProfile } = useStore();
    const [newImage, setNewImage] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!currentUser) {
        return <p>Please log in first.</p>;
    }

    const handleDeleteProfile = () => {
        const result = deleteProfile(password);
        if (result.success) {
            alert('Profile deleted successfully.');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="container">
            <img src={currentUser.image} alt="Profile" width="100" />
            <p><strong>Username:</strong> {currentUser.username}</p>
            <input
                type="text"
                placeholder="New Img URL"
                onChange={(e) => setNewImage(e.target.value)}
            />
            <button style={{ marginBottom: '5px', marginRight: '5px'}} onClick={() => updateUserImage(newImage)}>
                Change Image
            </button>
            <button onClick={logoutUser}>Logout</button>

            <h3>Delete Profile</h3>
            <input
                type="password"
                placeholder="Enter password to delete profile"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                style={{ backgroundColor: 'red', marginTop: '10px' }}
                onClick={handleDeleteProfile}
            >
                Delete Profile
            </button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default ProfileZustPage;
