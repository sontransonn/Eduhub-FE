import React from 'react'
import Link from 'next/link'

import { FiCalendar } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const LiveSchedule = () => {
    return (
        <div id='live'>
            <div className='max-w-8xl mx-auto px-4 lg:px-20 md:px-10 pt-12'>
                <div className='w-full flex items-center justify-between'>
                    <h4 className='uppercase font-semibold text-2xl'>Lịch học trực tiếp</h4>
                    <Link className="flex items-center text-sm" href={"/live"}>
                        Xem thêm
                        <MdNavigateNext size={20} />
                    </Link>
                </div>

                {/* Hiển thị khi màn hình > 768px */}
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Link href={"/"} className='col'>
                            <img
                                className='max-w-full rounded-sm h-auto object-cover'
                                src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/nutrime-livestream.png"
                                alt="" />
                            <h3 className="font-medium my-4 line-clamp-2 break-words">Khóa học Bí quyết ăn đúng sống trường thọ</h3>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-sm font-ligh'>
                                        <FiCalendar size={18} />
                                        21/11/2024
                                    </div>
                                    <span>Zoom</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-sm font-light'>
                                        <FiClock size={18} />
                                        19:00 - 22:00
                                    </div>
                                    <span className='font-semibold'>Miễn phí</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Hiển thị Slide khi màn hình < 768px */}
                <div className='md:hidden mt-6'>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1 gap-4 justify-between">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='px-0'>
                                            <img
                                                className='rounded-sm'
                                                src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/nutrime-livestream.png" alt="" />
                                            <h3 className="font-medium my-4 line-clamp-2 break-words">Khóa học Bí quyết ăn đúng sống trường thọ</h3>
                                            <div className='flex flex-col gap-2'>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center gap-2 text-sm font-ligh'>
                                                        <FiCalendar size={18} />
                                                        21/11/2024
                                                    </div>
                                                    <span>Zoom</span>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center gap-2 text-sm font-light'>
                                                        <FiClock size={18} />
                                                        19:00 - 22:00
                                                    </div>
                                                    <span className='font-semibold'>Miễn phí</span>
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

export default LiveSchedule