import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/user`,
    withCredentials: true,
});

export const handleAddRemoveWithWishlist = async (wishlistId: string) => {
    try {
        const response = await api.post(`/wishlist/${wishlistId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getMyWishlist = async () => {
    try {
        const response = await api.get(`/my-wishlist`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}