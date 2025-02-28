import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};

export const fetchUser = async (token) => {
    return await axios.get(`${API_URL}/user`, { headers: { Authorization: token } });
};