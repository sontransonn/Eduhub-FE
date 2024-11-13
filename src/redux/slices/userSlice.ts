import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: typeof window !== 'undefined' && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")!)
        : null,
    loading: false,
}

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
        setLoading: (state, { payload }) => {
            state.loading = payload
        },
    }
})

export const {
    setUserInfo,
    resetUserInfo,
    setLoading
} = userSlice.actions

export default userSlice.reducer