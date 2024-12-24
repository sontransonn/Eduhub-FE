import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/lesson',
    withCredentials: true,
});

export const getLessonByID = async (courseSlug: string, lessonId: string) => {
    try {
        const response = await api.get(`/${courseSlug}/${lessonId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}