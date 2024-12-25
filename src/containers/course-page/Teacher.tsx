import React from 'react'

import { FaRankingStar, FaRegCirclePlay, FaRegStar } from "react-icons/fa6";
import { FiUsers } from 'react-icons/fi';

import { CourseProps } from '@/types/course.type'

export default function Teacher({ currentCourse }: { currentCourse: CourseProps }) {
    return (
        <div className='flex flex-col gap-2'>
            <a href="" className='block md:text-[#006CCB] text-[#F77321]'>{currentCourse.approvedBy.fullName}</a>
            <div className='italic font-light'>Blogger ẩm thực</div>
            <div className='flex gap-6'>
                <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/June720181115am_nguyen-thu-huong-huong-choe-choe-cooking_thumb.jpg" className='w-[117px] h-[117px] rounded-full' alt="" />
                <div className='text-sm flex flex-col justify-between'>
                    <div className='flex items-center gap-2'>
                        <FaRankingStar size={16} />
                        4.5 xếp hạng
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegStar size={16} />
                        2.0 đánh giá
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiUsers size={16} />
                        819 học viên
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegCirclePlay size={16} />
                        3 khóa học
                    </div>
                </div>
            </div>
            <div className='leading-5 md:leading-10 text-justify text-sm'>
                <p>Hương Choé có hơn 4 năm kinh nghiệm làm việc với lĩnh vực ẩm thực.</p>
                <p>Là food blogger được giải thưởng Influence-asia bình chọn trong top 15 người có ảnh hưởng trên cộng đồng mạng trong lĩnh vực food.</p>
            </div>
        </div>
    )
}
