import React from 'react'
import Link from 'next/link'

import { RiErrorWarningLine } from "react-icons/ri";
import { RiFilter3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdStar } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import CourseCard from '@/components/card/CourseCard'

const CourseSlug = () => {
    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-8 flex flex-col gap-10'>
                {/* Khóa học Marketing */}
                <div className='flex flex-col gap-5'>
                    <h3 className='text-semibold font-medium text-3xl'>Khóa học Marketing</h3>
                    <div className='text-sm font-semibold text-center text-black border-b border-gray-400'>
                        <ul className='flex flex-wrap text-base gap-[24px] pb-1'>
                            <li className=''>
                                <button>
                                    Phổ biến
                                </button>
                            </li>
                            <li className=''>
                                <button>
                                    Mới
                                </button>
                            </li>
                        </ul>
                    </div>

                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className="flex aspect-square items-center justify-center p-0">
                                            <CourseCard />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Chủ đề phổ biến */}
                <div className='flex flex-col gap-5'>
                    <h4 className='font-medium text-2xl'>Chủ đề phổ biến</h4>
                    <div className='font-semibold'>
                        <button className="border border-black px-4 py-2 rounded hover:text-white hover:bg-[#003555]">
                            Thiết kế
                        </button>
                    </div>
                </div>

                {/* Tất cả khóa học Tin Học Văn Phòng */}
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <h4 className='font-medium text-2xl'>Tất cả khóa học Tin Học Văn Phòng</h4>
                    <div className='flex items-center gap-3'>
                        <div className='flex bg-white gap-2 items-center py-4 px-5 border border-solid border-black rounded-sm'>
                            <RiFilter3Fill size={24} />
                            Bộ lọc
                        </div>
                        <div className='flex self-stretch bg-white gap-7 items-center str px-5 border border-solid border-black rounded-sm cursor-pointer'>
                            <div className='flex flex-col text-xs'>
                                <span className='font-semibold'>Sắp xếp theo</span>
                                <span>Học nhiều nhất</span>
                            </div>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 border w-full border-black items-center pl-4 pr-2 py-4 rounded font-semibold lg:text-lg text-base flex-wrap justify-center lg:justify-start'>
                    <RiErrorWarningLine size={28} />
                    <span>Bạn không biết chắc? Tất cả các khóa học đều được đảm bảo hoàn tiền trong 07 ngày</span>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                    <div className='col-span-1 first-col-layout transition-all'>
                        <Accordion defaultValue='item-1' type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className='border-none'>
                                <AccordionTrigger className='text-base font-bold border-t border-solid border-black hover:no-underline'>Đánh giá</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <input name='radio' type="radio" className='w-5 h-5' />
                                            <div className='flex'>
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                            </div>
                                            5.0
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input name='radio' type="radio" className='w-5 h-5' />
                                            <div className='flex'>
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} />
                                            </div>
                                            Từ 4.0 trở lên
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input name='radio' type="radio" className='w-5 h-5' />
                                            <div className='flex'>
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                            </div>
                                            Từ 3.0 trở lên
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input name='radio' type="radio" className='w-5 h-5' />
                                            <div className='flex'>
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                            </div>
                                            Từ 2.0 trở lên
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input name='radio' type="radio" className='w-5 h-5' />
                                            <div className='flex'>
                                                <MdStar size={18} color='#F77321' />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                                <MdStar size={18} />
                                            </div>
                                            Từ 1.0 trở lên
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion defaultValue='item-2' type="single" collapsible className="w-full">
                            <AccordionItem value="item-2" className='border-none'>
                                <AccordionTrigger className='text-base font-bold border-t border-solid border-black hover:no-underline'>Thời lượng video</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-5 h-5' />
                                            0 đến 1 giờ
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-5 h-5' />
                                            1 đến 3 giờ
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-5 h-5' />
                                            3 đến 6 giờ
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-5 h-5' />
                                            6 đến 17 giờ
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <input type="checkbox" className='w-5 h-5' />
                                            Trên 17 giờ
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className='lg:col-span-3 second-col-layout transition-all'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div className="w-full col">
                                <a href="" className='flex mb-6 lg:flex-row flex-col gap-2 border border-grey rounded-xl lg:rounded-none lg:border-none'>
                                    <div className='lg:w-[310px]'>
                                        <img src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg" alt="" className='w-full rounded-tl-xl rounded-tr-xl lg:rounded-none' />
                                    </div>
                                    <div className='flex-1 lg:pl-4 flex px-3 py-1 lg:p-0'>
                                        <div className='flex flex-1 flex-col gap-4'>
                                            <span className='font-bold text-base leading-5'>Học tiếng Nhật thật dễ</span>
                                            <div className='flex flex-col gap-2 text-sm font-light'>
                                                <span className='leading-4'>Thanh Trúc</span>
                                                <span className='leading-4 flex gap-2'>
                                                    <span className='font-bold'>3.7</span>
                                                    <span className='text-[#F77321] flex gap-1'>
                                                        <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                        <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                        <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                        <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className='w-20 flex flex-col'>
                                            <span className='font-bold text-base'>
                                                549.000
                                                <sup>đ</sup>
                                            </span>
                                            <span className='line-through text-sm text-[#929292]'>
                                                700.000
                                                <sup>đ</sup>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default CourseSlug
