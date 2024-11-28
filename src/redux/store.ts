import { configureStore } from '@reduxjs/toolkit'

import userReducer from "@/redux/slices/userSlice"
import courseReducer from "@/redux/slices/courseSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            course: courseReducer
        },
        devTools: process.env.NEXT_PUBLIC_API_URL_NODE !== 'production' ? true : false,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']