import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/user',
    withCredentials: true,
});

export const handleAddRemoveWithCart = async (courseId: string) => {
    try {
        const response = await api.post(`/cart/${courseId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getMyCart = async () => {
    try {
        const response = await api.get(`/my-cart`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}