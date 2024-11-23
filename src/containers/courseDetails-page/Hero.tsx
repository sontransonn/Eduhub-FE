import React from 'react'
import Link from 'next/link';

import { AiFillHome } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

import {
    Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Hero = () => {
    return (
        <div className='md:bg-[#003555] bg-[#F1F5F8]'>
            <div className='px-4 py-4 lg:py-12 lg:px-20 md:px-10 grid grid-cols-3 gap-3'>
                <div className='lg:col-span-2 col-span-3'>
                    <div className='md:text-white text-back flex flex-col gap-5'>
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

                        <div className='flex flex-col gap-5'>
                            <h1 className='lg:text-[40px] text-2xl leading-normal font-semibold md:text-[#ECECEC]'>
                                Hướng dẫn làm các món ăn vặt hot nhất thị trường
                            </h1>
                            <div className='md:text-[#ECECEC] md:font-normal font-light'>Trổ tài khéo tay hay làm với hơn 40 món ăn vặt đang được yêu thích nhất trên thị trường</div>
                            <div className='flex lg:gap-10 gap-6'>
                                <div className='flex items-center gap-1'>
                                    <div className='text-[#F77321] text-sm font-medium'>4.5</div>
                                    <div className='text-[#F77321] flex gap-0.5'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className='md:text-sm md:text-white'>(24 đánh giá)</div>
                                </div>
                                <span className='text-sm'>2300 Học viên</span>
                            </div>
                            <div className='md:text-sm'>Giảng viên: <Link href={"#"}>Nguyễn Thu Hương</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero