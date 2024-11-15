import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const Instructors = () => {
    return (
        <div id='instructors'>
            <div className='w-full px-4 mx-auto max-w-8xl lg:px-20 md:px-10 pt-12'>
                <h4 className='uppercase text-2xl font-semibold'>Giảng viên tiêu biểu</h4>
                <Carousel className="w-full mt-6">
                    <CarouselContent className="-ml-1 justify-between">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                                <Card className='rounded-sm'>
                                    <CardContent className="flex flex-col gap-5 items-center justify-center p-5">
                                        <img
                                            src="https://static.unica.vn/uploads/phan-van-truong/June2420201127am_phan-van-truong_thumb.jpg"
                                            alt=""
                                            className='rounded-full w-[150px] h-[150px]'
                                        />
                                        <div className='text-lg text-[#273167] md:text-2xl font-semibold h-[30px] text-center'>
                                            <span>Hồ Minh Chính</span>
                                        </div>
                                        <div className='text-sm text-center line-clamp-2'>
                                            Chuyên gia tâm lý, TGĐ Công ty Tư Vấn Tâm Lý và Đào Tạo VERA
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default Instructors
