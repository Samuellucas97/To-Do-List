import axios from 'axios';

const api = axios.create({
    withCredentials: true,
    baseURL:process.env.API_URL,
});

export default api;