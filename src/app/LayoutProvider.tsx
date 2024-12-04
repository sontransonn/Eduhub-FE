'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const routeNoUseRootLayout = ["/login", "/register", "/info", "/learning"]

export default function LayoutProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    const isRoute = routeNoUseRootLayout.includes(pathname);

    if (isRoute) {
        return <>{children}</>
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
