import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/user',
    withCredentials: true,
});

export const getUserInfo = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
}