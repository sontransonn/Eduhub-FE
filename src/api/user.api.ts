import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/user`,
    withCredentials: true,
});

export const searchTeacher = async (name: string, page: number) => {
    try {
        const response = await api.get(`/search/instructor?name=${name}&page=${page}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const createRate = async (courseSLug: string, rating: number, content: string) => {
    try {
        const response = await api.post(`/rate/${courseSLug}`, {
            rating: rating,
            content: content
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

export const getRate = async (courseId: string) => {
    try {
        const response = await api.get(`/rate/${courseId}`)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const changePassword = async (oldPassword: string, newPassword: string, passwordConfirm: string) => {
    try {
        const response = await api.post("/change-password", {
            oldPassword: oldPassword,
            newPassword: newPassword,
            passwordConfirm: passwordConfirm
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getUserInfo = async () => {
    try {
        const response = await api.get('/profile');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch user information');
        }
        throw new Error('An unknown error occurred while fetching user information');
    }
}

export const applyInstructor = async (data: FormData) => {
    try {
        const response = await api.post("/apply", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getCoursePurchased = async () => {
    try {
        const response = await api.get('/course-purchased');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch user information');
        }
        throw new Error('An unknown error occurred while fetching user information');
    }
}

export const getAllInstructor = async (pageNumber: number) => {
    try {
        const response = await api.get(`/instructor?page=${pageNumber}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const updateUserInfo = async (data: FormData) => {
    try {
        const response = await api.patch("/edit-profile", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getTeacherById = async (teacherId: string) => {
    try {
        const response = await api.get(`/instructor/${teacherId}`);
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}