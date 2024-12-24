"use client"
import React, { useEffect, useState } from 'react'

import { FaStar } from 'react-icons/fa'

import Hero from '@/containers/course-page/Hero';
import WhatWillYouLearn from '@/containers/course-page/WhatWillYouLearn';
import Introduction from '@/containers/course-page/Introduction';
import CourseContent from '@/containers/course-page/CourseContent';
import Tags from '@/containers/course-page/Tags';
import Teacher from '@/containers/course-page/Teacher';
import Reviews from '@/containers/course-page/Reviews';
import PurchaseCard from '@/containers/course-page/PurchaseCard';

import { getCourseBySlug } from '@/api/course.api';

import { CourseProps } from '@/types/course.type';

export default function CourseDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const [currentCourse, setCurrentCourse] = useState<CourseProps>({
        _id: '',
        courseName: '',
        description: '',
        introduce: '',
        slug: '',
        video: [],
        progress: '',
        poster: '',
        sold: 0,
        rating: '',
        approvalStatus: '',
        ratingNum: 0,
        view: 0,
        price: 0,
        discount: 0,
        category: '',
        createdAt: '',
        updatedAt: '',
        subCategory: [],
        approvedBy: { _id: '', fullName: '' }
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseBySlug(slug);
            setCurrentCourse(data)
        }
        fetchData()
    }, [slug])

    return (
        <main className='bg-[#f1f5f8] relative'>
            {/* Hero */}
            <div className='md:bg-[#003555] bg-[#F1F5F8]'>
                <div className='w-full max-w-8xl mx-auto grid grid-cols-3 gap-3'>
                    <div className='lg:col-span-2 col-span-3 xl:pl-20 lg:pl-10 md:px-10 py-6 px-4 flex flex-col'>
                        <Hero currentCourse={currentCourse} />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 max-w-8xl mx-auto md:gap-3 relative'>
                <div className='lg:col-span-2 col-span-3 xl:pl-20 lg:pl-10 md:px-10 py-8 px-4 flex flex-col gap-8'>
                    {/* Bạn sẽ học được */}
                    <div className='md:p-6 p-4 border border-[#929292] rounded'>
                        <div className='mb-4 text-2xl font-medium'>Bạn sẽ học được</div>
                        <WhatWillYouLearn />
                    </div>

                    {/* Giới thiệu khóa học */}
                    <div className='md:p-6 md:mt-0 py-4 md:border border-[#929292] rounded md:order-none order-1'>
                        <div className='text-2xl font-medium'>Giới thiệu khóa học</div>
                        <Introduction currentCourse={currentCourse} />
                    </div>

                    {/* Nội dung khóa học */}
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-medium'>Nội dung khóa học</div>
                        <div className='text-sm font-light'>5 phần - 42 bài giảng - 06 giờ 29 phút</div>
                        <CourseContent />
                    </div>

                    {/* Tags */}
                    <div className='flex gap-4'>
                        <div className='text-sm font-medium'>Tags:</div>
                        <Tags />
                    </div>

                    {/* Giảng viên */}
                    <div className='md:order-none order-2 flex flex-col gap-4'>
                        <div className='text-2xl font-medium'>Giảng viên</div>
                        <Teacher currentCourse={currentCourse} />
                    </div>

                    {/* Reviews */}
                    <div className='md:order-none order-2 flex flex-col gap-4'>
                        <div className='flex gap-1.5 font-medium md:text-2xl text-xl items-center'>
                            <FaStar />
                            4.5 xếp hạng khóa học 10 đánh giá
                        </div>
                        <Reviews />
                    </div>
                </div>

                {/*  */}
                <div className='lg:col-span-1 col-span-3 order-first lg:order-last xl:mr-20 lg:mr-10 lg:-mt-[236px] rounded'>
                    <button className='relative w-full md:block hidden' data-link="https://www.youtube.com/embed/JKFeTVseaRg?rel=0">
                        <img
                            className='opacity-75 w-full rounded-sm'
                            src={currentCourse.poster}
                            alt=""
                        />
                    </button>
                    <PurchaseCard currentCourse={currentCourse} />
                </div>
            </div>
        </main>
    )
}
