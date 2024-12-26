"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { RootState } from '@/redux/store';

export default function TeacherDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const slug = segments[segments.length - 1];

    const { userInfo } = useSelector((state: RootState) => state.user)

    return (
        <>
            <div className='bg-[#003555] text-white'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 pt-12 flex flex-col gap-[60px] leading-normal'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[40px] font-medium'>Giảng viên : {userInfo?.fullName}</span>
                    </div>
                    <div className='flex'>
                        <ul className='flex gap-5 font-medium'>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/course"} className='hover:text-slate-400'>Bài giảng</Link>
                                {(slug == "course" || slug == "create") && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/group"} className='hover:text-slate-400'>Hội viên</Link>
                                {slug == "group" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/"} className='hover:text-slate-400'>Học viên</Link>
                                {slug == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/"} className='hover:text-slate-400'>Học tập</Link>
                                {slug == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/coupon"} className='hover:text-slate-400'>Coupon</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/order"} className='hover:text-slate-400'>Đơn hàng</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/revenue"} className='hover:text-slate-400'>Thu nhập</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/"} className='hover:text-slate-400'>Thảo luận</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/profile"} className='hover:text-slate-400'>Hồ sơ</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/teacher/"} className='hover:text-slate-400'>Cài đặt thanh toán</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                    {children}
                </div>
            </div>
        </>
    )
}