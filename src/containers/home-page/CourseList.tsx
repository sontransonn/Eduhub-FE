"use client"
import React from "react"
import Link from "next/link"

import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import CourseCard from "@/components/card/CourseCard";
import SkeletonCard from "@/components/card/SkeletonCard";

type CourseListProps = {
    title: string,
    slug: string,
    courses: []
};

const CourseList = ({ title, slug, courses }: CourseListProps) => {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 pt-12'>
            <div className='w-full flex items-center justify-between'>
                <h4 className='uppercase font-semibold text-2xl'>{title}</h4>
                <Link className="flex items-center text-sm" href={`/collection/${slug}`}>
                    Xem thêm
                    <MdNavigateNext size={20} />
                </Link>
            </div>

            {/* Hiển thị khi màn hình > 768px */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                {courses.length > 0 ? (
                    courses.map((course: any, index) => (
                        <div className="w-full col">
                            <Link href={`/course/${course?.slug}`} className="col">
                                <CourseCard
                                    courseName={course.courseName}
                                    rating={course.rating}
                                />
                            </Link>
                        </div>
                    ))
                ) : (
                    Array.from({ length: 8 }).map((_, index) => (
                        <div className="w-full col">
                            <SkeletonCard />
                        </div>
                    ))
                )}
            </div>

            {/* Hiển thị Slide khi màn hình < 768px */}
            <div className='md:hidden mt-6'>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1 gap-4 justify-between">
                        {courses.length > 0 ? (Array.from({ length: courses.length }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer">
                                <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                    <CardContent className='p-0'>
                                        <Link href={"/"}>
                                            <CourseCard />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))) : (
                            Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='p-0'>
                                            <Link href={"/"}>
                                                <SkeletonCard />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))
                        )}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default CourseList