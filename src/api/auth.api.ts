import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth`,
    withCredentials: true,
});

export const login = async (formData: { email: string, password: string }) => {
    try {
        const response = await api.post('/login', {
            email: formData.email,
            password: formData.password
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
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
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const logout = async () => {
    try {
        const response = await api.post('/log-out');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data?.message || 'Failed';
            throw new Error(errorMessage);
        }
        throw new Error('An unknown error occurred');
    }
}

export const sendOtp = async (email: string) => {
    try {
        const response = await api.post('/send-otp', {
            email: email
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

export const verifyOtp = async (email: string, otpCode: string) => {
    try {
        const response = await api.post('/verify-otp', {
            email: email,
            otpCode: otpCode
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

export const resetPassword = async (email: string, newPassword: string, confirmPassword: string) => {
    try {
        const response = await api.post('/reset-password', {
            email: email,
            newPassword: newPassword,
            confirmPassword: confirmPassword
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