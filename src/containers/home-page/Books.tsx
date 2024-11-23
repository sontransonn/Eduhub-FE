import React from 'react'
import Link from 'next/link'

import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent, CarouselItem,
} from "@/components/ui/carousel"
import BookCard from '@/components/card/BookCard';

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
                            <BookCard />
                        </Link>
                    ))}
                </div>

                {/* Hiển thị Slide khi màn hình < 768px */}
                <div className='md:hidden mt-6'>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1 justify-between">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='p-0'>
                                            <Link href={"/"}>
                                                <BookCard />
                                            </Link>
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