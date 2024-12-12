import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/payment',
    withCredentials: true,
});

export const zalopay = async () => {
    try {
        const response = await api.post('/zalopay/create-payment');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
}