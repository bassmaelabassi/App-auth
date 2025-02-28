import React, { useState } from 'react';
import { register } from '../services/api';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const res = await register({ name, email, password });
            alert(res.data.message);
        } catch (err) {
            alert('Erreur lors de l\'inscription');
        }
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <h2 className="text-xl font-bold">Inscription</h2>
            <input type="text" placeholder="Nom" className="border p-2" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded">S'inscrire</button>
        </div>
    );
};

export default RegisterPage;
