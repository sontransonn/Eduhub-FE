'use client'
import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import LoadingPage from '@/app/LoadingPage';

import { store, persistor } from '@/store'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingPage />} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}