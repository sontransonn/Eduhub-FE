import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function TopInstructors() {
    return (
        <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 my-5'>
            <h4 className='uppercase text-2xl font-semibold mb-6'>Giảng viên tiêu biểu</h4>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square flex-col items-center p-6 gap-5 select-none">
                                        <img className='rounded-full w-[150px] h-[150px]' src="https://static.unica.vn/uploads/phan-van-truong/June2420201127am_phan-van-truong_thumb.jpg" alt="" />
                                        <div className='text-lg text-[#273167] md:text-2xl font-semibold h-[30px] text-center'>
                                            <Link className='text-[#273167] md:text-xl text-sm' href={"/"}>Phan Quốc Việt</Link>
                                        </div>
                                        <div className='text-sm text-center line-clamp-2'>Kiến trúc sư, giảng viên tại trung tâm đồ họa VK STUDIO</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
