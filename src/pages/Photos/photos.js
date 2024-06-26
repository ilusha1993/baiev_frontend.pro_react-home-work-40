import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=1`)
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, [albumId]);

    return (
        <div>
            <h1>Фотографії альбому</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Photos;

