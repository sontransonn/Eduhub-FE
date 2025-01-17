import axios from 'axios';

const api = axios.create({
    baseURL: 'https://eduhub-be-sr86.onrender.com/v1/user',
    withCredentials: true,
});

export const getResultQuiz = async (quizId: string) => {
    try {
        const response = await api.get(`/result/${quizId}`);
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