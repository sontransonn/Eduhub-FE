import React from 'react'
import Header from '@/components/Header'
import CategoryMenu from '@/components/CategoryMenu'
import Footer from '@/components/Footer'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <CategoryMenu />
            {children}
            <Footer />
        </>
    )
}
