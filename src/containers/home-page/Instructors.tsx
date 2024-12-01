import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import InstructorCard from '@/components/card/InstructorCard'
import SkeletonCard from "@/components/card/SkeletonCard";

const Instructors = () => {
    const { topAuthors } = useSelector((state: any) => state.course)

    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 pt-12'>
            <h4 className='uppercase text-2xl font-semibold'>Giảng viên tiêu biểu</h4>
            <Carousel className="flex w-full mt-6" id='carousel-custom'>
                <CarouselContent className="-ml-4 justify-between">
                    {topAuthors.length > 0 ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                                <Card className='rounded-lg border-none'>
                                    <CardContent className="p-0">
                                        <Link href={"/teacher/slug-teacher"}>
                                            <InstructorCard />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))
                    ) : (
                        Array.from({ length: 6 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                                <Card className='rounded-sm bg-[#F1F5F8] border-none shadow-none'>
                                    <CardContent className="p-0">
                                        <SkeletonCard />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Instructors
