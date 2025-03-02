import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h2 className="text-3xl font-bold">Bienvenue</h2>
            <div className="flex gap-4">
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Se connecter</Link>
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">S'inscrire</Link>
            </div>
        </div>
    );
};

export default Home;