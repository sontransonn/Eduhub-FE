"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthHeader = () => {
    const pathname = usePathname()
    const isLoginPage = pathname === "/login" || pathname === "/login-otp";
    const isRegisterPage = pathname === "/register";

    return (
        <header className='bg-[#003555] shadow-2xl text-white'>
            <div className='flex flex-row max-w-8xl mx-auto xl:px-20 px-4 py-6 justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <Link href={"/"} className='select-none'>
                        <img
                            width={140}
                            src="https://unica.vn/media/img/logo-unica.svg"
                            alt="Học Online: 2000+ Khóa học trực tuyến cho người đi làm"
                            className="max-w-none"
                        />
                    </Link>
                    <span className='text-2xl hidden lg:block'>
                        {isLoginPage ? "Đăng nhập" : isRegisterPage ? "Đăng ký" : ""}
                    </span>
                </div>
                <span className='text-sm cursor-pointer'>Bạn cần giúp đỡ?</span>
            </div>
        </header>
    )
}

export default AuthHeader