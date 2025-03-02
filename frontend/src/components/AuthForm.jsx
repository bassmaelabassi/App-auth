import React, { useState } from 'react';
import { register, login } from '../services/api';

const AuthForm = ({ type }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = async () => {
        try {
            if (type === 'register') {
                await register({ name, email, password });
                alert('Inscription réussie');
            } else {
                const res = await login({ email, password });
                localStorage.setItem('token', res.data.token);
                alert('Connexion réussie');
            }
        } catch (err) {
            alert('Erreur lors du processus');
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center">{type === 'register' ? 'Inscription' : 'Connexion'}</h2>
            {type === 'register' && <input type="text" placeholder="Nom" className="border p-2 rounded" onChange={(e) => setName(e.target.value)} />}
            <input type="email" placeholder="Email" className="border p-2 rounded" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" className="border p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{type === 'register' ? "S'inscrire" : "Se connecter"}</button>
        </div>
    );
};

export default AuthForm;