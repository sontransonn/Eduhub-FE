import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/instructor',
    withCredentials: true,
});

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