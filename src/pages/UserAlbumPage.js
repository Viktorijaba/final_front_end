import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserAlbumPage = () => {
    const { id } = useParams();
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(response => response.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading albums...</div>;
    }

    return (
        <div className="user-albums-page">
            <h1>User Albums Info</h1>
            <div className="albums-container">
                {albums.map((album) => (
                    <Link to={`/album/${album.id}/photos`} key={album.id} className="album-link">
                        <div className="album-card">
                            <h3>{album.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserAlbumPage;
