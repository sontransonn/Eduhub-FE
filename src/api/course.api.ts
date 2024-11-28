import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/course',
    withCredentials: true,
});

export const getAllCourse = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed');
    }
}

export const getCourseByOptions = async (option: string, page: number) => {
    try {
        const response = await api.get(`/by-option?option=${option}&page=${page}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed');
    }
}