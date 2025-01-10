"use client"
import React, { useEffect, useState } from 'react'

import { TbJewishStarFilled } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

import Hero from '@/app/course/components/Hero';
import WhatWillYouLearn from '@/app/course/components/WhatWillYouLearn';
import Introduction from '@/app/course/components/Introduction';
import CourseContent from '@/app/course/components/CourseContent';
import Tags from '@/app/course/components/Tags';
import Teacher from '@/app/course/components/Teacher';
import Reviews from '@/app/course/components/Reviews';
import PurchaseCard from '@/app/course/components/PurchaseCard';

import { getCourseBySlug } from '@/api/course.api';

import { CourseProps } from '@/types/course.type';

export default function CourseDetails({ params }: { params: { courseSlug: string } }) {
    const { courseSlug } = params;

    const [currentCourse, setCurrentCourse] = useState<CourseProps>({
        _id: '',
        courseName: '',
        description: '',
        introduce: '',
        slug: '',
        videos: [{ _id: '', lessonName: "" }],
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
        subCategories: [],
        approvedBy: { _id: '', fullName: '' }
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseBySlug(courseSlug);
            setCurrentCourse(data)
        }
        fetchData()
    }, [courseSlug])

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
                    <div className='md:p-6 md:border border-[#929292] rounded md:order-none order-1'>
                        <div className='mb-4 text-2xl font-medium'>Giới thiệu khóa học</div>
                        <div className='font-medium mb-2'>Bạn có biết:</div>
                        <Introduction currentCourse={currentCourse} />
                    </div>

                    {/* Nội dung khóa học */}
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-medium'>Nội dung khóa học</div>
                        <div className='text-sm font-light'>{currentCourse.videos?.length} bài giảng - 06 giờ 29 phút</div>
                        <CourseContent currentCourse={currentCourse} />
                    </div>

                    {/* Tags */}
                    <div className='flex gap-4'>
                        <div className='text-sm font-medium'>Tags:</div>
                        <Tags currentCourse={currentCourse} />
                    </div>

                    {/* Giảng viên */}
                    <div className='md:order-none order-2 flex flex-col gap-4'>
                        <div className='text-2xl font-medium'>Giảng viên</div>
                        <Teacher currentCourse={currentCourse} />
                    </div>

                    {/* Reviews */}
                    <div className='md:order-none order-2 flex flex-col gap-4'>
                        <div className='flex gap-1.5 font-medium md:text-2xl text-xl items-center'>
                            <div className='flex gap-1.5 items-center'>
                                <TbJewishStarFilled size={24} color='#f8731f' />
                                {currentCourse.rating} xếp hạng khóa học
                            </div>
                            <BsDot className='md:block hidden' />
                            <span className='md:block hidden'>{currentCourse.ratingNum} đánh giá</span>
                        </div>
                        <Reviews />
                    </div>
                </div>

                {/*  */}
                <div className='lg:col-span-1 col-span-3 order-first lg:order-last xl:mr-20 lg:mr-10 lg:-mt-[240px] rounded'>
                    <div className='relative w-full md:block hidden' style={{ paddingBottom: "56.25%" }}>
                        <img
                            className='rounded w-full h-full absolute inset-0'
                            src={currentCourse.poster}
                            alt=""
                        />
                    </div>
                    <PurchaseCard currentCourse={currentCourse} />
                </div>
            </div>
        </main>
    )
}
