import React from 'react'
import Link from 'next/link'

import { MdNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const Books = () => {
    return (
        <div id='books'>
            <div className='w-full px-4 mx-auto max-w-8xl lg:px-20 md:px-10 pt-12'>
                <div className='w-full flex items-center justify-between'>
                    <h4 className='uppercase font-semibold text-2xl'>SÁCH HAY NÊN ĐỌC</h4>
                    <Link href={"/books"} className='flex items-center text-sm'>
                        Xem thêm
                        <MdNavigateNext size={20} />
                    </Link>
                </div>

                {/* Hiển thị khi màn hình > 768px */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Link key={index} href={"/"} className='col'>
                            <img
                                className='max-w-full rounded-sm h-auto object-cover'
                                src="https://static.unica.vn/upload/images/2023/08/Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(2).png_1692073502.jpg"
                                alt="" />
                            <h3 className="font-medium my-4 line-clamp-2 break-words">Sách Cẩm Nang Bán Hàng TikTok: Từ Zero Đến Hero</h3>
                            <div className='flex items-center gap-1 mb-2'>
                                <div className='text-[#F77321] flex gap-0.5'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className='flex gap-1.5 mb-2'>
                                <div className='text-xl font-medium'>
                                    298.000
                                    <sup>đ</sup>
                                </div>
                                <div className='text-sm line-through text-[#929292]'>
                                    300.000
                                    <sup>đ</sup>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Hiển thị Slide khi màn hình < 768px */}
                <div className='md:hidden mt-6'>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1 justify-between">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                                    <Card className='rounded-sm bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='p-0'>
                                            <img
                                                className='max-w-full h-auto object-cover'
                                                src="https://static.unica.vn/upload/images/2023/08/Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(2).png_1692073502.jpg"
                                                alt="" />
                                            <h3 className="font-medium my-4 line-clamp-2 break-words">Sách Cẩm Nang Bán Hàng TikTok: Từ Zero Đến Hero</h3>
                                            <div className='flex items-center gap-1 mb-2'>
                                                <div className='text-[#F77321] flex gap-0.5'>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            </div>
                                            <div className='flex gap-1.5 mb-2'>
                                                <div className='text-xl font-medium'>
                                                    298.000
                                                    <sup>đ</sup>
                                                </div>
                                                <div className='text-sm line-through text-[#929292]'>
                                                    300.000
                                                    <sup>đ</sup>
                                                </div>
                                            </div>
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

export default Books