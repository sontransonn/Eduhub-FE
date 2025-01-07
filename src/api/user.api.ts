import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/user',
    withCredentials: true,
});

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

export const getQuizsInCourse = async (courseId: string) => {
    try {
        const response = await api.get(`/quiz/${courseId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getQuizDetails = async (courseId: string, quizId: string) => {
    try {
        const response = await api.get(`/${courseId}/${quizId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const submitQuiz = async (data: { courseId: string, quizId: string, userAnswers: { questionId: string; selectedAnswerId: string }[] }) => {
    try {
        const response = await api.post(`/quiz/submit`, {
            courseId: data.courseId,
            quizId: data.quizId,
            userAnswers: data.userAnswers
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