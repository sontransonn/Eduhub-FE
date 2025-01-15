import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/order',
    withCredentials: true,
});

export const getOrderById = async (orderId: string) => {
    try {
        const response = await api.get(`/${orderId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const createOrder = async (courseIds: (number | string)[]) => {
    try {
        const response = await api.post(`/create`, { courseIds });
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getMyOrder = async () => {
    try {
        const response = await api.get(`/my-order`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}