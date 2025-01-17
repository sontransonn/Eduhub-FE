import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/lesson`,
    withCredentials: true,
});

export const updateLesson = async (courseId: string, lessonId: string, updatedData: { lessonName: string, lessonContent: string }) => {
    try {
        const response = await api.patch(`/update/${courseId}/${lessonId}`, {
            lessonName: updatedData.lessonName,
            lessonContent: updatedData.lessonContent
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

export const deleteLesson = async (courseId: string, lessonId: string) => {
    try {
        const response = await api.delete(`/delete/${courseId}/${lessonId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

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

export const createLessonByLink = async (courseId: string, data: { lessonName: string, lessonContent: string }) => {
    try {
        const response = await api.post(`/uplink/${courseId}`, {
            lessonName: data.lessonName,
            lessonContent: data.lessonContent
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