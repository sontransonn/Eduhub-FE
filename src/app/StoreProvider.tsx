'use client'
import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux/store'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}