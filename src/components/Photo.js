import React from "react";

const Photo = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} className="photo-thumbnail" />
            <p>{photo.title}</p>
        </div>
    );
};

export default Photo;
