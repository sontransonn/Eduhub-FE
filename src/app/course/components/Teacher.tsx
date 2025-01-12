import React from 'react'

import { FaRankingStar, FaRegCirclePlay, FaRegStar } from "react-icons/fa6";
import { FiUsers } from 'react-icons/fi';

import { CourseProps } from '@/types/course.type'

export default function Teacher({ currentCourse }: { currentCourse: CourseProps }) {
    return (
        <div className='flex flex-col gap-2'>
            <a href="" className='block md:text-[#006CCB] text-[#F77321]'>{currentCourse.approvedBy.user.fullName}</a>
            <div className='italic font-light'>{currentCourse.approvedBy.title}</div>
            <div className='flex gap-6'>
                <img src={currentCourse.approvedBy.user.avatar} className='w-[117px] h-[117px] rounded-full' alt="" />
                <div className='text-sm flex flex-col justify-between'>
                    <div className='flex items-center gap-2'>
                        <FaRankingStar size={16} />
                        4.5 xếp hạng
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegStar size={16} />
                        {currentCourse.approvedBy.rating} đánh giá
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiUsers size={16} />
                        {currentCourse.approvedBy.students} học viên
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegCirclePlay size={16} />
                        {currentCourse.approvedBy.courseAmount} khóa học
                    </div>
                </div>
            </div>
            <div className='leading-5 md:leading-10 text-justify text-sm'>
                <p>{currentCourse.approvedBy.experience}</p>
            </div>
        </div>
    )
}
