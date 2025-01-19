import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPhotosPage = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                setLoading(false);
            });
    }, [albumId]);

    if (loading) {
        return <div>Loading photos...</div>;
    }

    return (
        <div className="user-photos-page">
            <h1>Album Photos</h1>
            <div className="photos-container">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPhotosPage;
