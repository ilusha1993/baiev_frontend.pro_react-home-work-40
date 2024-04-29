import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {users.map(user => (
                    <li key={user.id} style={{display: "flex", gap: "20px"}}>
                        {user.name}
                        <Link to={`/albums/${user.id}`} id={user.id} style={{textDecoration: "none"}}>👉 Перейти</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;

