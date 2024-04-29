import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}&_limit=2`)
            .then(response => response.json())
            .then(data => setAlbums(data));
    }, [userId]);

    return (
        <div>
            <h1>Альбоми користувача</h1>
            <ul style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {albums.map(album => (
                    <li key={album.id} style={{display: "flex", gap: "20px"}}>
                        {album.title}
                        <Link to={`/photos/${album.id}`} style={{textDecoration: "none"}}>🖼️ Фото</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Albums;

