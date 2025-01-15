import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/instructor',
    withCredentials: true,
});

interface Answer {
    text: string;
    isCorrect: boolean;
}

interface Question {
    text: string;
    maxScore: number;
    answers: Answer[];
}

interface QuizData {
    quizName: string;
    courseId: string;
    durationTime: number;
    maxScore: number;
    questions: Question[];
}

export const deleteQuiz = async (quizId: string) => {
    try {
        const response = await api.delete(`/quiz/${quizId}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const deleteCourse = async (courseId: string) => {
    try {
        const response = await api.delete(`/course/${courseId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const InstructorCreateCourse = async (courseName: string) => {
    try {
        const response = await api.post("/course/create", { courseName });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getInstructorCourse = async () => {
    try {
        const response = await api.get("/my-course");
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const updateCourse = async (data: FormData, courseId: string) => {
    try {
        const response = await api.patch(`/course/update/${courseId}`, data, {
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

export const getCourseByID = async (courseId: string) => {
    try {
        const response = await api.get(`/course/${courseId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const createQuiz = async (formData: QuizData) => {
    try {
        const response = await api.post(`/create-quiz`, {
            quizName: formData.quizName,
            courseId: formData.courseId,
            durationTime: formData.durationTime,
            maxScore: formData.maxScore,
            questions: formData.questions
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getLessons = async (courseId: string) => {
    try {
        const response = await api.get(`/lesson/${courseId}`);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const getQuizs = async (courseId: string) => {
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