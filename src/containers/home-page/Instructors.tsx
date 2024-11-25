import React from 'react'
import Link from 'next/link'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import InstructorCard from '@/components/card/InstructorCard'

const Instructors = () => {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 pt-12'>
            <h4 className='uppercase text-2xl font-semibold'>Giảng viên tiêu biểu</h4>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-1 justify-between">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                            <Card className='rounded-sm'>
                                <CardContent className="p-0">
                                    <Link href={"/"}>
                                        <InstructorCard />
                                    </Link>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Instructors
