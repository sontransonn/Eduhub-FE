"use client"
import React, { useState } from 'react'
import Link from 'next/link';

import OverviewTab from '@/containers/overview-page/OverviewTab';
import LessonsTab from '@/containers/overview-page/LessonsTab';
import DocumentsTab from '@/containers/overview-page/DocumentsTab';

export default function Overview() {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab />
            case 'lessons':
                return <LessonsTab />
            case 'documents':
                return <DocumentsTab />
            case 'q&a':
                return <div>Đây là nội dung của tab Hỏi & Đáp.</div>;
            case 'management':
                return <div>Đây là nội dung của tab Quản lý học tập.</div>;
            default:
                return <div>Chọn tab để xem nội dung.</div>;
        }
    };

    return (
        <main className='bg-[#f5f5f5] text-black'>
            <div className='bg-[#162636] text-white'>
                <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:py-4'>
                    <div className='grid grid-cols-12 gap-8'>
                        <div className='md:col-span-6 col-span-12 block relative w-full' style={{ paddingBottom: "56.25%" }}>
                            <img
                                className='w-full h-full absolute inset-0'
                                src={"https://i.imgur.com/kFLuGCR.jpeg"}
                                alt="" />
                        </div>
                        <div className='md:col-span-6 col-span-12'>
                            <div className='flex flex-col gap-10'>
                                <h3>Khóa Học SEO Nền Tảng Dành Cho Người Mới</h3>
                                <Link href={`/learning/slug`}>Vào học ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 py-4'>
                <div className='flex flex-col gap-5'>
                    <ul className='flex gap-1 md:text-[15px] text-sm font-medium'>
                        <li className={`hover:bg-white ${activeTab == "overview" ? "border-b-[6px] border-solid border-[#f36b4d] bg-white" : ""} md:py-[10px] md:px-[15px] p-[5px] cursor-pointer`} onClick={() => setActiveTab('overview')}>Tổng quan</li>
                        <li className={`hover:bg-white ${activeTab == "lessons" ? "border-b-[6px] border-solid border-[#f36b4d] bg-white" : ""} md:py-[10px] md:px-[15px] p-[5px] cursor-pointer`} onClick={() => setActiveTab('lessons')}>Bài học</li>
                        <li className={`hover:bg-white ${activeTab == "documents" ? "border-b-[6px] border-solid border-[#f36b4d] bg-white" : ""} md:py-[10px] md:px-[15px] p-[5px] cursor-pointer`} onClick={() => setActiveTab('documents')}>Tài liệu</li>
                        <li className={`hover:bg-white ${activeTab == "q&a" ? "border-b-[6px] border-solid border-[#f36b4d] bg-white" : ""} md:py-[10px] md:px-[15px] p-[5px] cursor-pointer`} onClick={() => setActiveTab('q&a')}>Hỏi & Đáp</li>
                        <li className={`hover:bg-white ${activeTab == "management" ? "border-b-[6px] border-solid border-[#f36b4d] bg-white" : ""} md:py-[10px] md:px-[15px] p-[5px] cursor-pointer`} onClick={() => setActiveTab('management')}>Quản lý học tập</li>
                    </ul>

                    {renderContent()}
                </div>
            </div>
        </main >
    )
}
