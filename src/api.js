import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/accounts/', // Django backend URL
});

export const signup = (data) => API.post('signup/', data);
export const login = (data) => API.post('login/', data);
