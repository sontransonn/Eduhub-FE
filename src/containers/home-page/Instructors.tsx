import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { MdNavigateNext } from 'react-icons/md'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import InstructorCard from '@/components/card/InstructorCard'
import SkeletonCard from "@/components/card/SkeletonCard";

type InstructorsProps = {
    topAuthors: []
};

export default function Instructors({ topAuthors }: InstructorsProps) {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 pt-12'>
            <div className='w-full flex items-center justify-between'>
                <h4 className='uppercase font-semibold text-2xl'>Giảng viên tiêu biểu</h4>
                <Link className="flex items-center text-sm" href={`/teacher`}>
                    Xem thêm
                    <MdNavigateNext size={20} />
                </Link>
            </div>

            <Carousel className="flex w-full mt-6" id='carousel-custom'>
                <CarouselContent className="-ml-4 justify-between">
                    {topAuthors?.length > 0 ? (
                        topAuthors.map((author: any, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/2 lg:basis-1/4 select-none cursor-pointer">
                                <Card className='rounded-lg border h-full p-5'>
                                    <CardContent className="p-0 h-full">
                                        <Link href={`/teacher/${author.instructorId}`}>
                                            <InstructorCard name={author.name} title={author.title} />
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

