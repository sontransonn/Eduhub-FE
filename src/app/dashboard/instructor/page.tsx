"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import InstructorCourse from '@/containers/dashboard/instructor/InstructorCourse';
import CreateCourse from '@/containers/dashboard/instructor/CreateCourse';

export default function InstructorDashboard() {
    const [activeTab, setActiveTab] = useState('course');

    const { userInfo } = useSelector((state: any) => state.user)

    const renderContent = () => {
        switch (activeTab) {
            case 'course':
                return <InstructorCourse setActiveTab={setActiveTab} />
            case 'course/create':
                return <CreateCourse setActiveTab={setActiveTab} />
            case 'group':
                return <>helo</>
            case 'wishlist':
                return <>helo</>
            case 'wallet':
                return <div>Đây là nội dung của tab Hỏi & Đáp.</div>;
            case 'order':
                return <div>Đây là nội dung của tab Quản lý học tập.</div>;
            default:
                return <div>Chọn tab để xem nội dung.</div>;
        }
    };

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
                                <span className='hover:text-slate-400' onClick={() => setActiveTab('course')}>Bài giảng</span>
                                {(activeTab == "course" || activeTab == "course/create") && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('group')}>
                                <span className='hover:text-slate-400'>Hội viên</span>
                                {activeTab == "group" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wishlist')}>
                                <span className='hover:text-slate-400'>Học viên</span>
                                {activeTab == "wishlist" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wallet')}>
                                <span className='hover:text-slate-400'>Học tập</span>
                                {activeTab == "wallet" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Coupon</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Đơn hàng</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Thu nhập</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Thảo luận</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Hồ sơ</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Cài đặt thanh toán</span>
                                {activeTab == "order" && <div className='h-[4px] bg-white w-full'></div>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                    {renderContent()}
                </div>
            </div>
        </>
    )
}
