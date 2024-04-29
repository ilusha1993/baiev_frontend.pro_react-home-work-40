import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/Users/users';
import Albums from './pages/Albums/albums';
import Photos from './pages/Photos/photos';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/albums/:userId" element={<Albums />} />
                <Route path="/photos/:albumId" element={<Photos />} />
            </Routes>
    );
}

export default App;
