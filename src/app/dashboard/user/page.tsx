"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UserCourse from '@/containers/dashboard/user/UserCourse'
import UserOrder from '@/containers/dashboard/user/UserOrder'
import UserWishlist from '@/containers/dashboard/user/UserWishlist'
import UserGroup from '@/containers/dashboard/user/UserGroup'
import UserWallet from '@/containers/dashboard/user/UserWallet'
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('course');

    const { userInfo } = useSelector((state: any) => state.user)

    const renderContent = () => {
        switch (activeTab) {
            case 'course':
                return <UserCourse />
            case 'group':
                return <UserGroup />
            case 'wishlist':
                return <UserWishlist />
            case 'wallet':
                return <UserWallet />
            case 'order':
                return <UserOrder />
        }
    };

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
                                <span className='hover:text-slate-400' onClick={() => setActiveTab('course')}>Khóa học</span>
                                {activeTab == "course" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('group')}>
                                <span className='hover:text-slate-400'>Hội viên</span>
                                {activeTab == "group" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wishlist')}>
                                <span className='hover:text-slate-400'>Yêu thích</span>
                                {activeTab == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wallet')}>
                                <span className='hover:text-slate-400'>Ví của bạn</span>
                                {activeTab == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Lịch sử đặt hàng</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
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
                                                <span className='hover:text-slate-400' onClick={() => setActiveTab('course')}>Khóa học</span>
                                                {activeTab == "course" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('group')}>
                                                <span className='hover:text-slate-400'>Hội viên</span>
                                                {activeTab == "group" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wishlist')}>
                                                <span className='hover:text-slate-400'>Yêu thích</span>
                                                {activeTab == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wallet')}>
                                                <span className='hover:text-slate-400'>Ví của bạn</span>
                                                {activeTab == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                                <span className='hover:text-slate-400'>Lịch sử đặt hàng</span>
                                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                                            </li>
                                        </ul>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>

            {renderContent()}
        </>
    )
}
