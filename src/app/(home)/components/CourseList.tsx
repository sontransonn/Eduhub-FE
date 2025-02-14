"use client"
import React from "react"
import Link from "next/link"

import { MdNavigateNext } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import CourseCard from "@/components/card/CourseCard";
import SkeletonCard from "@/components/card/SkeletonCard";

import { CourseProps } from "@/types/course.type";

type Props = {
    title: string,
    slug: string,
    courses: []
};

export default function CourseList({ title, slug, courses }: Props) {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 pt-12'>
            <div className='w-full flex items-center justify-between'>
                <h4 className='uppercase font-semibold text-2xl'>{title}</h4>
                <Link className="flex items-center text-sm" href={`/collection/${slug}`}>
                    Xem thêm
                    <MdNavigateNext size={20} />
                </Link>
            </div>

            {/* Hiển thị khi màn hình > 768px */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                {courses?.length > 0 ? (
                    courses.map((course: CourseProps, index) => (
                        <div className="w-full col" key={index}>
                            <Link href={`/course/${course?.slug}`} className="col">
                                <CourseCard
                                    courseName={course?.courseName}
                                    instructorName={course?.approvedBy?.fullName}
                                    rating={course?.rating}
                                    poster={course?.poster}
                                    price={course?.price}
                                    discount={course?.discount}
                                    ratingNum={course?.ratingNum}
                                />
                            </Link>
                        </div>
                    ))
                ) : (
                    Array.from({ length: 8 }).map((_, index) => (
                        <div className="w-full col" key={index}>
                            <SkeletonCard />
                        </div>
                    ))
                )}
            </div>

            {/* Hiển thị Slide khi màn hình < 768px */}
            <div className='md:hidden mt-6'>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1 gap-4 justify-between">
                        {courses?.length > 0 ? (
                            courses.map((course: CourseProps, index) => (
                                <CarouselItem key={index} className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer">
                                    <Card className='bg-[#F1F5F8] border-none shadow-none'>
                                        <CardContent className='p-0'>
                                            <Link href={`/course/${course?.slug}`}>
                                                <CourseCard
                                                    courseName={course?.courseName}
                                                    instructorName={course?.approvedBy?.fullName}
                                                    rating={course?.rating}
                                                    price={course?.price}
                                                    poster={course?.poster}
                                                    discount={course?.discount}
                                                    ratingNum={course?.ratingNum}
                                                />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))) : (
                            Array.from({ length: 8 }).map((_, index) => (
                                <CarouselItem className="pl-1 basis-2/3 lg:basis-1/4 select-none cursor-pointer" key={index}>
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
