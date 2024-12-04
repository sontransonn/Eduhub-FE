import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/auth',
    withCredentials: true,
});

export const login = async (formData: { email: string, password: string }) => {
    try {
        const response = await api.post('/login', {
            email: formData.email,
            password: formData.password
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const register = async (formData: { fullName: string, email: string, password: string }) => {
    try {
        const response = await api.post('/register', {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Register failed');
    }
}

export const logout = async () => {
    try {
        const response = await api.post('/log-out');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Logout failed');
    }
}