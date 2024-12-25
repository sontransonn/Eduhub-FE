import React from 'react'

import { CourseProps } from '@/types/course.type';

const CourseContent = ({ currentCourse }: { currentCourse: CourseProps }) => {
    return (
        <div className='rounded border border-solid border-[#929292] md:p-6 p-4 overflow-hidden'>
            <div className='scrollable w-full flex flex-col gap-2 h-[400px] overflow-scroll'>
                {Array.from({ length: 15 }).map(() => (
                    <div className='flex'>
                        <div className='md:basis-3/4 flex gap-2.5 items-center'>
                            <img src={currentCourse.poster} alt="" className='w-40 rounded-lg' />
                            <div className='flex flex-col self-stretch justify-between'>
                                <span>Bài 1: Redmine là gì? Một số ví dụ về quản lý dự án phần mềm bằng Redmine.</span>
                                <span className='text-xs text-gray-400'>{currentCourse.approvedBy.fullName}</span>
                            </div>
                        </div>
                        <div className='md:basis-1/4 md:flex hidden gap-8 items-center justify-end'>
                            <span className='text-sm text-[#006CCB] hover:text-blue-700 cursor-pointer'>Học thử</span>
                            <span className=''>00:05:28</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseContent