"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import UserCourse from '@/containers/dashboard/UserCourse'

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('course');

    const { userInfo } = useSelector((state: any) => state.user)

    const renderContent = () => {
        switch (activeTab) {
            case 'course':
                return <UserCourse />
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
                        <span className='text-[40px] font-medium'>Học viên : {userInfo?.fullName}</span>
                    </div>
                    <div className='flex'>
                        <ul className='flex gap-5 font-medium'>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <span className='hover:text-slate-400' onClick={() => setActiveTab('course')}>Khóa học</span>
                                <div className='h-[4px] bg-white w-full'></div>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('group')}>
                                <span className='hover:text-slate-400'>Hội viên</span>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer' onClick={() => setActiveTab('wishlist')}>
                                <span className='hover:text-slate-400'>Yêu thích</span>
                            </li>
                            <li className='flex flex-col cursor-pointer' onClick={() => setActiveTab('wallet')}>
                                <span className='hover:text-slate-400'>Ví của bạn</span>
                            </li>
                            <li className='flex flex-col cursor-pointer' onClick={() => setActiveTab('order')}>
                                <span className='hover:text-slate-400'>Lịch sử đặt hàng</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {renderContent()}
        </>
    )
}
