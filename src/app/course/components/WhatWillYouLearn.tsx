import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CourseProps } from '@/types/course.type';

export default function WhatWillYouLearn({ currentCourse }: { currentCourse: CourseProps }) {
    const { target = [] } = currentCourse;

    return (
        <div className='grid md:grid-cols-2 gap-x-20 gap-y-5'>
            {target.length > 0 ? (
                target.map((item, index) => (
                    <div key={index} className='flex gap-2 text-sm'>
                        <div>
                            <IoMdCheckmarkCircleOutline size={24} color='green' />
                        </div>
                        <p className='line-clamp-2'>{item}</p>
                    </div>
                ))
            ) : (
                Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='flex gap-2 text-sm'>
                        <div>
                            <IoMdCheckmarkCircleOutline size={24} color='green' />
                        </div>
                        <p>Nội dung đang được cập nhật. Xin vui lòng quay lại sau!</p>
                    </div>
                ))
            )}
        </div>
    );
}
