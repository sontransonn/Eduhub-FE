'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LayoutProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname()

    if (pathname == "/login" || pathname == "/register") {
        return (
            <>
                {children}
                <Footer />
                <Toaster position="top-right" />
            </>
        )
    }

    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-right" />
        </>
    )
}

export default LayoutProvider