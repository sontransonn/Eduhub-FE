'use client'
import React from 'react'
import { usePathname } from 'next/navigation';

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const routeNoUseRootLayout = new Set(["/login", "/register", "/info", "/change-password"]);

export default function LayoutProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    const isRoute = routeNoUseRootLayout.has(pathname) || pathname.startsWith('/quiz') || pathname.startsWith('/join')
    const learningRoute = pathname.startsWith('/learning');

    if (learningRoute) {
        return (
            <>
                {children}
                <Footer />
            </>
        )
    }

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
