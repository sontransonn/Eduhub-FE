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
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getCourseByOptions = async (option: string, page: number) => {
    try {
        const response = await api.get(`/by-option?option=${option}&page=${page}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getCourseBySlug = async (slug: string) => {
    try {
        const response = await api.get(`/${slug}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const searchCourseByName = async (name: string) => {
    try {
        const response = await api.get(`/searching?name=${name}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const searchCourse = async (name: string, page: number) => {
    try {
        const response = await api.get(`/search?name=${name}&page=${page}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}


export const getCourseByCategory = async (categorySlug: string) => {
    try {
        const response = await api.get(`/categories/${categorySlug}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getCourseBySubCategory = async (subCategorySlug: string) => {
    try {
        const response = await api.get(`/subCategories/${subCategorySlug}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}