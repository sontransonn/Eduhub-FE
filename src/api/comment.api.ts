import axios from 'axios';

const api = axios.create({
    baseURL: 'https://eduhub-be-sr86.onrender.com/v1/comment',
    withCredentials: true,
});

export const getAllComments = async (courseId: string) => {
    try {
        const response = await api.get(`/${courseId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const createComment = async (courseId: string, commentContent: string) => {
    try {
        const response = await api.post(`/create/${courseId}`, {
            commentContent: commentContent
        });
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const createReply = async (commentId: string, replyContent: string) => {
    try {
        const response = await api.post(`/reply/${commentId}`, {
            replyContent: replyContent
        });
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}