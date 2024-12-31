"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { getCourseByID } from '@/api/instructor.api';
import { updateCourse } from '@/api/instructor.api';

export default function UserDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getCourseByID(id)
    //         setCourseUpdates({
    //             courseName: data.courseName,
    //             description: data.description,
    //             introduce: data.introduce,
    //             price: data.price,
    //             video: data.video,
    //             category: data.category,
    //             slug: data.slug
    //         })
    //     }
    //     fetchData()
    // }, [])


    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setCourseUpdates((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setPosterFile(e.target.files[0]);
    //     } else {
    //         console.warn('No file selected');
    //     }
    // };

    // const renderContent = () => {
    //     switch (activeTab) {
    //         case 'target':
    //             return <></>
    //         case 'infomation':
    //             return <Infomation courseUpdates={courseUpdates} handleInputChange={handleInputChange} handleFileChange={handleFileChange} />
    //         case 'lessons':
    //             return <></>
    //         case 'document':
    //             return <Document />
    //         case 'price':
    //             return <Price />
    //     }
    // };

    // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();

    //     try {
    //         const formData = new FormData();
    //         formData.append('courseUpdates', JSON.stringify(courseUpdates));
    //         if (posterFile) {
    //             formData.append('poster', posterFile);
    //         }
    //         const courseId = Array.isArray(id) ? id[0] : id;
    //         const data = await updateCourse(formData, courseId);
    //         toast.success(data.message)
    //         router.push("/")
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             toast.error(error.message);
    //             console.error('Failed:', error.message);
    //         } else {
    //             toast.error('An unknown error occurred');
    //             console.error('Failed with an unknown error');
    //         }
    //     }
    // }

    return (
        <main className='bg-[#F1F5F8] text-black relative'>
            <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:py-8'>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-3 flex flex-col'>
                        <div className='text-lg font-medium flex flex-col gap-2'>
                            <Link href={`/manage/${id}/target`} className='flex justify-between cursor-pointer hover:bg-gray-300 py-2 border-r-4 border-solid border-red-700'>
                                <span className='flex-shrink-0'>Mục tiêu khóa học</span>
                            </Link>
                            <Link href={`/manage/${id}/infomation`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Thông tin cơ bản</span>
                            </Link>
                            <Link href={`/manage/${id}/lessons`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Danh sách bài học</span>
                            </Link>
                            <Link href={`/manage/${id}/document`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
                                <span className='flex-shrink-0'>Tài liệu và quà tặng</span>
                            </Link>
                            <Link href={`/manage/${id}/price`} className='flex justify-between py-2 cursor-pointer hover:bg-gray-300'>
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
