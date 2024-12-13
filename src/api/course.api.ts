import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/course',
    withCredentials: true,
});

export const getAllCourse = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch all courses');
        }
        throw new Error('An unknown error occurred while fetching all courses');
    }
}

export const getCourseByOptions = async (option: string, page: number) => {
    try {
        const response = await api.get(`/by-option?option=${option}&page=${page}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch courses by options');
        }
        throw new Error('An unknown error occurred while fetching courses by options');
    }
}

export const getCourseBySlug = async (slug: string) => {
    try {
        const response = await api.get(`/${slug}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch course by slug');
        }
        throw new Error('An unknown error occurred while fetching course by slug');
    }
}