import React from 'react'
import Link from 'next/link';

import { AiFillHome } from 'react-icons/ai';
import { TbJewishStarFilled } from "react-icons/tb";

import {
    Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { CourseProps } from '@/types/course.type';

export default function Hero({ currentCourse }: { currentCourse: CourseProps }) {
    return (
        <div className='md:text-white text-back flex flex-col gap-4'>
            <Breadcrumb>
                <BreadcrumbList className='text-base font-medium md:text-[#a5dcfc] text-orange-700'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className='flex items-center gap-2 hover:text-blue-600'>
                            <AiFillHome />
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem >
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components" className='hover:text-blue-600'>{currentCourse.category}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' className='hover:text-blue-600'>{currentCourse.slug}</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <button className='px-0 relative w-full md:hidden' data-link="https://www.youtube.com/embed/JKFeTVseaRg?rel=0">
                <img
                    className='opacity-75 w-full rounded-sm'
                    src={currentCourse.poster}
                    alt=""
                />
            </button>

            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-[40px] text-2xl leading-normal font-semibold md:text-[#ECECEC]'>{currentCourse.courseName}</h1>
                <div className='md:text-[#ECECEC] md:font-normal font-light'>{currentCourse.description}</div>
                <div className='flex items-center lg:gap-10 gap-6'>
                    <div className='flex items-center gap-1'>
                        <div className='text-[#F77321] font-medium'>{currentCourse.rating}</div>
                        <div className='text-[#F77321] flex gap-0.5'>
                            <TbJewishStarFilled size={18} />
                            <TbJewishStarFilled size={18} />
                            <TbJewishStarFilled size={18} />
                            <TbJewishStarFilled size={18} />
                            <TbJewishStarFilled size={18} />
                        </div>
                        <div className='md:text-sm md:text-white'>({currentCourse.ratingNum} đánh giá)</div>
                    </div>
                    <span className='text-base'>{currentCourse.view} Học viên</span>
                </div>
                <div className='md:text-sm'>
                    Giảng viên: <Link href={`/teacher/${currentCourse?.approvedBy?._id}`} className='md:text-[#A5DEFF] text-[#F77321] underline'>{currentCourse?.approvedBy?.fullName}</Link>
                </div>
            </div>
        </div>
    )
}
