import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">AuthApp</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-gray-400">Connexion</Link>
                    </li>
                    <li>
                        <Link to="/register" className="hover:text-gray-400">Inscription</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
