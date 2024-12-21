import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "@/redux/slices/userSlice"
import courseReducer from "@/redux/slices/courseSlice"
import cartReducer from "@/redux/slices/cartSlice"
import wishlistReducer from "@/redux/slices/wishlistSlice"

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        course: courseReducer,
        cart: cartReducer,
        wishlist: wishlistReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
