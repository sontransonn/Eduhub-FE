"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UserDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;

    return (
        <main className='bg-[#F1F5F8] text-black relative'>
            <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:py-8'>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-3 flex flex-col'>
                        <div className='text-lg font-medium flex flex-col gap-2'>
                            <Link href={`/manage/${courseId}/target`} className='flex justify-between cursor-pointer hover:bg-gray-300 py-2 border-r-4 border-solid border-red-700'>
                                <span className='flex-shrink-0'>Mục tiêu khóa học</span>
                            </Link>
                            <Link href={`/manage/${courseId}/infomation`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Thông tin cơ bản</span>
                            </Link>
                            <Link href={`/manage/${courseId}/lessons`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Danh sách bài học</span>
                            </Link>
                            <Link href={`/manage/${courseId}/document`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Tài liệu và quà tặng</span>
                            </Link>
                            <Link href={`/manage/${courseId}/price`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Giá khóa học</span>
                            </Link>
                            <button className='bg-blue-500 hover:bg-blue-600 py-2 text-white font-semibold'>Gửi duyệt</button>
                        </div>
                    </div>
                    <div className='col-span-9 flex flex-col border border-solid border-[#3333]'>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
