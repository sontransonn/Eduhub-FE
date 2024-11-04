import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function RecommendedBooks() {
    return (
        <div id='books'>
            <div className='w-full px-4 mx-auto max-w-8xl lg:px-20 md:px-10 pt-12'>
                <div className='w-full flex justify-between mb-6'>
                    <h4 className='uppercase font-semibold text-2xl mt-2.5'>SÁCH HAY NÊN ĐỌC</h4>
                    <Link href={"/books"} className='flex items-center text-sm'>
                        Xem thêm
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
