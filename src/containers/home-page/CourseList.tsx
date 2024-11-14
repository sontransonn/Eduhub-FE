import React from "react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

type CourseListProps = {
    id: string
    title: string;
    quantity: number
};

const CourseList = ({ id, title, quantity }: CourseListProps) => {
    return (
        <div id={id}>
            <div className='max-w-8xl mx-auto px-4 lg:px-20 md:px-10 pt-12'>
                <div className='w-full flex justify-between'>
                    <h4 className='uppercase font-semibold text-2xl'>{title}</h4>
                    <Link className="flex items-center text-sm" href={"/live"}>
                        Xem thêm
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Hiển thị khi màn hình > 768px */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                    {Array.from({ length: quantity }).map((_, index) => (
                        <Link href={"/"} className="col">
                            <img
                                className='max-w-full rounded h-auto object-cover'
                                src="https://i.imgur.com/kFLuGCR.jpeg"
                                alt="" />
                            <h3 className='font-medium my-4 line-clamp-2'>Học nhiếp ảnh từ cơ bản đến nâng cao</h3>
                            <div className='text-sm mb-2 font-light'>Hoàng Viết Thắng</div>
                            <div className='flex items-center gap-1 mb-2'>
                                <div className='text-sm font-medium'>4.5</div>
                                <div className='text-[#F77321] flex gap-0.5'>
                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                </div>
                                <div className='text-xs text-[#5C5C5C]'>(107)</div>
                            </div>
                            <div className='flex gap-1.5 items-center mb-2'>
                                <div className='text-xl font-medium'>
                                    299.000
                                    <sup>đ</sup>
                                </div>
                                <div className='text-sm line-through text-[#929292]'>
                                    800.000
                                    <sup>đ</sup>
                                </div>
                            </div>
                            <div className='px-2 py-1.5 bg-[#FFDB5B] w-fit text-xs'> Bestseller</div>
                        </Link>
                    ))}
                </div>

                {/* Hiển thị Slide khi màn hình < 768px */}
                <div className='md:hidden mt-6'>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1 gap-4 justify-between">
                            {Array.from({ length: quantity }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='px-0'>
                                            <img
                                                className='max-w-full h-auto object-cover'
                                                src="https://i.imgur.com/kFLuGCR.jpeg"
                                                alt="" />
                                            <h3 className='font-medium my-4 line-clamp-2'>Học nhiếp ảnh từ cơ bản đến nâng cao</h3>
                                            <div className='text-sm mb-2 font-light'>Hoàng Viết Thắng</div>
                                            <div className='flex items-center gap-1 mb-2'>
                                                <div className='text-sm font-medium'>4.5</div>
                                                <div className='text-[#F77321] flex gap-0.5'>
                                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                                                </div>
                                                <div className='text-xs text-[#5C5C5C]'>(107)</div>
                                            </div>
                                            <div className='flex gap-1.5 items-center mb-2'>
                                                <div className='text-xl font-medium'>
                                                    299.000
                                                    <sup>đ</sup>
                                                </div>
                                                <div className='text-sm line-through text-[#929292]'>
                                                    800.000
                                                    <sup>đ</sup>
                                                </div>
                                            </div>
                                            <div className='px-2 py-1.5 bg-[#FFDB5B] w-fit text-xs'> Bestseller</div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CourseList