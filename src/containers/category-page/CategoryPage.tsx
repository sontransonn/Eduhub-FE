"use client"
import React, { useState } from 'react'

import { RiErrorWarningLine } from "react-icons/ri";
import { RiFilter3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import CourseCard from '@/components/card/CourseCard'

export default function CategoryPage() {
    const [activeTab, setActiveTab] = useState("popular");
    const [isFilter, setIsFilter] = useState(true)
    const [showMenuSortBy, setShowMenuSortBy] = useState(false)

    const handleSortBy = (type: string) => {
        setShowMenuSortBy(false)
    }

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-medium text-2xl'>Khóa học Tin Học Văn Phòng</h3>
                        <div className='text-sm font-medium text-center text-black border-b border-gray-400'>
                            <ul className='flex flex-wrap text-base gap-7'>
                                <li className=''>
                                    <button className={`${activeTab === "popular" ? "text-black border-b-2 border-solid border-black" : "text-gray-500 hover:text-gray-600"} pb-1`} onClick={() => setActiveTab("popular")}>
                                        Phổ biến
                                    </button>
                                </li>
                                <li className=''>
                                    <button className={`${activeTab === "new" ? "text-black border-b-2 border-solid border-black" : "text-gray-500 hover:text-gray-600"} pb-1`} onClick={() => setActiveTab("new")}>
                                        Mới
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-4">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 basis-2/3 lg:basis-1/4">
                                        <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                            <CardContent className="flex items-center justify-center p-0">
                                                <CourseCard courseName={""} rating={""} price={9} discount={5} />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-medium text-2xl'>Tất cả khóa học Tin Học Văn Phòng</h4>
                        <div className='flex items-center gap-3'>
                            <div className='flex bg-white gap-2 items-center py-4 px-5 border border-solid border-black rounded-sm' onClick={() => setIsFilter(prev => !prev)}>
                                <RiFilter3Fill size={24} />
                                Bộ lọc
                            </div>
                            <div className='relative flex self-stretch bg-white gap-7 items-center str px-5 border border-solid border-black rounded-sm cursor-pointer' onClick={() => setShowMenuSortBy(prev => !prev)}>
                                <div className='flex flex-col text-xs'>
                                    <span className='font-semibold'>Sắp xếp theo</span>
                                    <span>Học nhiều nhất</span>
                                </div>
                                <IoIosArrowDown />
                                {showMenuSortBy && (
                                    <ul className='z-10 rounded-sm absolute top-[120%] right-0 py-2 bg-white w-full text-sm shadow'>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("learn-most")}>Học nhiều nhất</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("rating")}>Đánh giá cao</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("new")}>Mới nhất</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("price-low")}>Giá thấp đến cao</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("price-high")}>Giá cao đến thấp</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 border w-full border-black items-center pl-4 pr-2 py-4 rounded font-semibold lg:text-lg text-base flex-wrap justify-center lg:justify-start'>
                        <RiErrorWarningLine size={28} />
                        <span>Bạn không biết chắc? Tất cả các khóa học đều được đảm bảo hoàn tiền trong 07 ngày</span>
                    </div>

                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                        {isFilter && (
                            <div className='col-span-1'>
                                <Accordion defaultValue={["item-1", "item-2"]} type="multiple" className="w-full">
                                    {/* Đánh giá */}
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='accordion-trigger text-base font-bold border-t border-solid border-black hover:no-underline'>
                                            <div className={"w-full flex justify-between items-center"}>
                                                <span>Đánh giá</span>
                                                <IoIosArrowDown />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-2.5'>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                    </div>
                                                    Từ 4.5 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} />
                                                    </div>
                                                    Từ 4.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                    </div>
                                                    Từ 3.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                    </div>
                                                    Từ 2.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <FaStar size={18} color='#F77321' />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                        <FaStar size={18} />
                                                    </div>
                                                    Từ 1.0 trở lên
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Thời lượng video */}
                                    <AccordionItem value="item-2" className='border-none'>
                                        <AccordionTrigger
                                            className='accordion-trigger text-base font-bold border-t border-solid border-black hover:no-underline'>
                                            <div className={"w-full flex justify-between items-center"}>
                                                <span>Thời lượng video</span>
                                                <IoIosArrowDown />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-2.5'>
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
                        )}

                        <div className={`lg:col-span-3 ${!isFilter && "lg:col-span-4"} flex flex-col gap-4`}>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="w-full col">
                                    <a href="" className='flex lg:flex-row lg:gap-4 flex-col border border-grey rounded-xl lg:rounded-none lg:border-none'>
                                        <div className='lg:w-[310px]'>
                                            <img
                                                src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg"
                                                alt="" className='w-full rounded-tl-xl rounded-tr-xl lg:rounded-none'
                                            />
                                        </div>
                                        <div className='flex-1 flex p-4 lg:p-0'>
                                            <div className='flex flex-1 flex-col gap-4'>
                                                <span className='font-bold text-base'>Học tiếng Nhật thật dễ</span>
                                                <div className='flex flex-col gap-1.5 text-sm font-light'>
                                                    <span className=''>Trần Quang Vũ</span>
                                                    <span className='flex gap-1.5 items-center'>
                                                        <span className='font-bold'>3.7</span>
                                                        <span className='text-[#F77321] flex'>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </span>
                                                        <span className=''>(107)</span>
                                                    </span>
                                                    <span>Thời lượng: 9.8 giờ, Giáo trình: 46 bài giảng </span>
                                                </div>
                                            </div>

                                            <div className='w-20 flex flex-col text-end'>
                                                <span className='font-bold text-base'>549.000<sup>đ</sup></span>
                                                <span className='line-through text-sm text-[#929292]'>700.000<sup>đ</sup></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">5</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
