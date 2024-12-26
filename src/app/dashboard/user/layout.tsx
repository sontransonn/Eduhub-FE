"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux'
import Link from 'next/link';

import { RootState } from '@/redux/store'

import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

export default function UserDashboardLayout({
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
                        <span className='text-[40px] font-medium'>Học viên : {userInfo?.fullName}</span>
                    </div>

                    {/* Hiển thị khi màn hình > 768px */}
                    <div className='md:flex hidden'>
                        <ul className='flex gap-5 font-medium'>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/course"} className='hover:text-slate-400'>Khóa học</Link>
                                {slug == "course" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/group"} className='hover:text-slate-400'>Hội viên</Link>
                                {slug == "group" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/wishlist"} className='hover:text-slate-400'>Yêu thích</Link>
                                {slug == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/wallet"} className='hover:text-slate-400'>Ví của bạn</Link>
                                {slug == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/order"} className='hover:text-slate-400'>Lịch sử đặt hàng</Link>
                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                        </ul>
                    </div>

                    {/* Hiển thị Slide khi màn hình < 768px */}
                    <div className='md:hidden'>
                        <Carousel className='w-full'>
                            <CarouselContent className='m-0 cursor-pointer justify-between flex'>
                                <CarouselItem className="p-0 basis-auto">
                                    <div className='flex'>
                                        <ul className='flex gap-5 font-medium'>
                                            <li className='flex flex-col gap-4 cursor-pointer'>
                                                <Link href={"/dashboard/user/course"} className='hover:text-slate-400'>Khóa học</Link>
                                                {slug == "course" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer'>
                                                <Link href={"/dashboard/user/group"} className='hover:text-slate-400'>Hội viên</Link>
                                                {slug == "group" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer'>
                                                <Link href={"/dashboard/user/wishlist"} className='hover:text-slate-400'>Yêu thích</Link>
                                                {slug == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer'>
                                                <Link href={"/dashboard/user/wallet"} className='hover:text-slate-400'>Ví của bạn</Link>
                                                {slug == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer'>
                                                <Link href={"/dashboard/user/order"} className='hover:text-slate-400'>Lịch sử đặt hàng</Link>
                                                {slug == "order" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                        </ul>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                    {children}
                </div>
            </div>
        </>
    );
}