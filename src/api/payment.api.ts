import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/payment',
    withCredentials: true,
});

export const zalopay = async () => {
    try {
        const response = await api.post('/zalopay/create-payment');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Payment creation failed');
        }
        throw new Error('An unknown error occurred while creating the payment');
    }
}

export const momo = async (orderId: (string)) => {
    try {
        const response = await api.post('/momo', { id: orderId });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Payment creation failed');
        }
        throw new Error('An unknown error occurred while creating the payment');
    }
}