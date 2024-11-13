'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

import AuthHeader from '@/components/AuthHeader';
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LayoutProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname()
    const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/login-otp"

    return (
        <>
            {isAuthPage ? <AuthHeader /> : <><Header /><Navbar /></>}
            {children}
            <Footer />
        </>
    )
}

export default LayoutProvider