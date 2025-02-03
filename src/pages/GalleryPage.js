import React, { useState, useEffect } from "react";
import Photo from "../components/Photo";

const GalleryPage = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
            .then((response) => response.json())
            .then((data) => setPhotos(data));
    }, []);

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="photos-grid">
                {photos.map((photo) => (
                    <Photo key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
