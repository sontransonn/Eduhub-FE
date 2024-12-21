"use client"
import React from 'react'

import CourseCard from '@/components/card/CourseCard'

export default function page() {
    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 lg:py-14 py-8 flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                    <h3 className='text-semibold font-medium text-2xl'>100 KHÓA HỌC MỚI RA MẮT</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {Array.from({ length: 100 }).map((_, index) => (
                        <div key={index} className="w-full col">
                            <CourseCard poster='' instructorName='' ratingNum={8} courseName={""} rating={""} price={9} discount={5} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

