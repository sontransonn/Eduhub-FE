import { createSlice } from '@reduxjs/toolkit'
interface UserInfo {
    id: string;
    avatar: string;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    country: string;
    city: string;
    dateOfBirth: Date | null;
    role: string
}

interface UserState {
    userInfo: UserInfo | null;
}

const initialState: UserState = {
    userInfo: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.userInfo = payload
        },
        resetUserInfo: (state) => {
            state.userInfo = null
        },
    }
})

export const {
    setUserInfo,
    resetUserInfo,
} = userSlice.actions

export default userSlice.reducer