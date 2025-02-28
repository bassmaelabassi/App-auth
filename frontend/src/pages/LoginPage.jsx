import React, { useState } from 'react';
import { login } from '../services/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await login({ email, password });
            localStorage.setItem('token', res.data.token);
            alert('Connexion réussie');
        } catch (err) {
            alert('Erreur lors de la connexion');
        }
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <h2 className="text-xl font-bold">Connexion</h2>
            <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Se connecter</button>
        </div>
    );
};

export default LoginPage;
