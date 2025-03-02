import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Mon Site</h1>
            <div>
                <Link to="/" className="px-4 hover:text-gray-400">Accueil</Link>
                <Link to="/login" className="px-4 hover:text-gray-400">Connexion</Link>
                <Link to="/register" className="px-4 hover:text-gray-400">Inscription</Link>
            </div>
        </nav>
    );
};