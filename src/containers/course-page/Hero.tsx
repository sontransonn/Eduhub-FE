import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { AiFillHome } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

import {
    Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Hero() {
    const { currentCourse } = useSelector((state: any) => state.course)

    return (
        <div className='md:text-white text-back flex flex-col gap-4'>
            <Breadcrumb>
                <BreadcrumbList className='text-base font-medium md:text-[#a5dcfc] text-orange-700'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className='flex items-center gap-2 hover:text-blue-600'>
                            <AiFillHome />
                            Eduhub
                        </BreadcrumbLink>
                    </BreadcrumbItem >
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components" className='hover:text-blue-600'>Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' className='hover:text-blue-600'>Breadcrumb</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <button className='px-0 relative w-full md:hidden' data-link="https://www.youtube.com/embed/JKFeTVseaRg?rel=0">
                <img
                    className='opacity-75 rounded-sm'
                    src="https://static.unica.vn/upload/images/2024/02/ghep-anh-chuyen-nghiep-voi-Photoshop.jpg_1709088307.jpg"
                    alt=""
                />
            </button>

            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-[40px] text-2xl leading-normal font-semibold md:text-[#ECECEC]'>{currentCourse.courseName}</h1>
                <div className='md:text-[#ECECEC] md:font-normal font-light'>{currentCourse.description}</div>
                <div className='flex lg:gap-10 gap-6'>
                    <div className='flex items-center gap-1'>
                        <div className='text-[#F77321] text-sm font-medium'>{currentCourse.rating}</div>
                        <div className='text-[#F77321] flex gap-0.5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className='md:text-sm md:text-white'>(24 đánh giá)</div>
                    </div>
                    <span className='text-sm'>{currentCourse.view} Học viên</span>
                </div>
                <div className='md:text-sm'>Giảng viên: <Link href={"#"}>Nguyễn Thu Hương</Link></div>
            </div>
        </div>
    )
}
