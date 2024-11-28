'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const routeNoUseRootLayout = ["/login", "/register", "/login-otp", "/learning"]

const LayoutProvider = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname()
    const isRoute = routeNoUseRootLayout.includes(pathname);

    if (isRoute == true) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default LayoutProvider