"use client"
import React, { useState } from 'react'
import Link from 'next/link';

import { FaStar } from 'react-icons/fa'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import Hero from '@/containers/courseDetails-page/Hero';
import WhatYouWillLearn from '@/containers/courseDetails-page/WhatYouWillLearn';
import Introduction from '@/containers/courseDetails-page/Introduction';
import CourseContent from '@/containers/courseDetails-page/CourseContent';
import Tags from '@/containers/courseDetails-page/Tags';
import RelatedCourses from '@/containers/courseDetails-page/RelatedCourses';
import Teacher from '@/containers/courseDetails-page/Teacher';
import Reviews from '@/containers/courseDetails-page/Reviews';

const CourseDetails = () => {
    return (
        <main className='bg-[#f1f5f8]'>
            <Hero />
            <div className='grid grid-cols-3 md:gap-3 relative'>
                <div className='lg:col-span-2 col-span-3 lg:pl-20 md:px-10 py-8 px-4 flex flex-col'>
                    {/* Bạn sẽ học được */}
                    <div className='md:p-6 p-4 mb-8 border border-[#929292] rounded'>
                        <div className='mb-4 text-2xl font-medium'>Bạn sẽ học được</div>
                        <WhatYouWillLearn />
                    </div>

                    {/* Giới thiệu khóa học */}
                    <div className='md:p-6 md:mt-0 mt-8 p-4 md:border border-[#929292] mb-8 rounded md:order-none order-1'>
                        <div className='mb-4 text-2xl font-medium'>Giới thiệu khóa học</div>
                        <div className='font-medium mb-3'>Bạn có biết:</div>
                        <Introduction />
                    </div>

                    {/* Nội dung khóa học */}
                    <div className='mb-6 text-2xl font-medium'>Nội dung khóa học</div>
                    <div className='text-sm font-light mb-4'>5 phần - 42 bài giảng - 06 giờ 29 phút</div>
                    <CourseContent />

                    {/* Tags */}
                    <div className='flex mt-6 gap-3 mb-2'>
                        <div className='text-sm font-medium'>Tags:</div>
                        <Tags />
                    </div>

                    {/* Khóa học liên quan */}
                    <div className='mt-6 md:order-none order-2'>
                        <div className='mb-6 text-2xl font-medium'>Khóa học liên quan</div>
                        <RelatedCourses />
                    </div>

                    {/* Học viên thường mua cùng */}
                    <div className='mt-6 md:p-6 p-4 mb-8 border border-[#929292] rounded md:order-none order-2'>
                        <div className='mb-4 text-2xl font-medium'>Học viên thường mua cùng</div>
                    </div>

                    {/* Giảng viên */}
                    <div className='mt-6 md:order-none order-2'>
                        <div className='mb-6 text-2xl font-medium'>Giảng viên</div>
                        <Teacher />
                    </div>

                    {/* Reviews */}
                    <div className='mt-6 md:order-none order-2'>
                        <div className='flex items-center gap-2 font-medium md:text-2xl text-xl pb-6'>
                            <div className='flex gap-1.5 items-center'>
                                <FaStar />
                                4.5 xếp hạng khóa học 10 đánh giá
                            </div>
                        </div>
                        <Reviews />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CourseDetails