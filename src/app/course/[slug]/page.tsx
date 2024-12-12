"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

import { setCurrentCourse } from '@/redux/slices/courseSlice';
import { resetCurrentCourse } from '@/redux/slices/courseSlice';

import { FaStar } from 'react-icons/fa'
import { HiUserGroup } from "react-icons/hi2";

import Hero from '@/containers/course-page/Hero';
import Introduction from '@/containers/course-page/Introduction';
import CourseContent from '@/containers/course-page/CourseContent';
import Tags from '@/containers/course-page/Tags';
import Teacher from '@/containers/course-page/Teacher';
import Reviews from '@/containers/course-page/Reviews';
import PurchaseCard from '@/containers/course-page/PurchaseCard';

import { getCourseBySlug } from '@/api/course.api';

export default function page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const dispatch = useDispatch()

    const [headerHeight, setHeaderHeight] = useState(0);
    const [visible, setVisible] = useState(false);

    const { currentCourse } = useSelector((state: any) => state.course)

    useEffect(() => {
        const header = document.querySelector("header");
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }

        const handleScroll = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseBySlug(slug);
            dispatch(setCurrentCourse(data))
        }
        fetchData()

        return () => {
            dispatch(resetCurrentCourse());
        };
    }, [])

    return (
        <main className='bg-[#f1f5f8] relative'>
            <div className={`fixed hidden md:block bg-[#003555] top-0 left-0 w-full text-white px-6 py-4 shadow-md z-20 ${visible ? `translate-y-[80px]` : "-translate-y-full"}`}>
                <div className='font-bold'>{currentCourse.courseName}</div>
                <div className='flex gap-10'>
                    <div className='flex items-center gap-1'>
                        <span>{currentCourse.rating}</span>
                        <div className='text-[#F77321] flex gap-0.5'>
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                        </div>
                        <span className='text-sm'>(148 đánh giá)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <HiUserGroup size={20} />
                        <span>{currentCourse.view} Học viên</span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className='md:bg-[#003555] bg-[#F1F5F8]'>
                <div className='w-full max-w-8xl mx-auto grid grid-cols-3 gap-3'>
                    <div className='lg:col-span-2 col-span-3 xl:pl-20 lg:pl-10 md:px-10 py-6 px-4 flex flex-col'>
                        <Hero />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 max-w-8xl mx-auto md:gap-3 relative'>
                <div className='lg:col-span-2 col-span-3 xl:pl-20 lg:pl-10 md:px-10 py-8 px-4 flex flex-col gap-8'>
                    {/* Giới thiệu khóa học */}
                    <div className='md:p-6 md:mt-0 py-4 md:border border-[#929292] rounded md:order-none order-1'>
                        <div className='text-2xl font-medium'>Giới thiệu khóa học</div>
                        <div className='font-medium'>Bạn có biết:</div>
                        <Introduction />
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
                        <Teacher />
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
                <div className='lg:col-span-1 col-span-3 order-first lg:order-last relative xl:mr-20 lg:mr-10 lg:-mt-64 rounded'>
                    <button className='relative w-full md:block hidden' data-link="https://www.youtube.com/embed/JKFeTVseaRg?rel=0">
                        <img
                            className='opacity-75 w-full rounded-sm'
                            src="https://static.unica.vn/upload/images/2024/02/ghep-anh-chuyen-nghiep-voi-Photoshop.jpg_1709088307.jpg"
                            alt=""
                        />
                    </button>
                    <PurchaseCard price={currentCourse.price} discount={currentCourse.discount} />
                </div>
            </div>
        </main>
    )
}
