import React from 'react'
import Link from 'next/link'

import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import LiveCard from '@/components/card/LiveCard';

export default function LiveSchedule() {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 pt-12'>
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
                        <LiveCard />
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
                                    <CardContent className='p-0'>
                                        <Link href={"/"}>
                                            <LiveCard />
                                        </Link>
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
