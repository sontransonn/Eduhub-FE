import React from 'react'

import { FaStar } from "react-icons/fa6";

type CourseCardProps = {
    courseName: string,
    rating: string
};

const CourseCard = ({ courseName, rating }: CourseCardProps) => {
    return (
        <div className='w-full flex flex-col gap-1.5'>
            <img
                className='max-w-full h-44 rounded-sm'
                src="https://i.imgur.com/kFLuGCR.jpeg"
                alt="" />
            <h3 className='font-medium line-clamp-2'>{courseName}</h3>
            <div className='text-sm font-light'>Hoàng Viết Thắng</div>
            <div className='flex items-center text-sm gap-1.5'>
                <span className='font-bold'>{rating}</span>
                <div className='text-[#F77321] flex'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='text-[#5C5C5C]'>(108)</div>
            </div>
            <div className='flex gap-1.5 items-center'>
                <div className='text-xl font-medium'>
                    299.000
                    <sup>đ</sup>
                </div>
                <div className='text-sm line-through text-[#929292]'>
                    800.000
                    <sup>đ</sup>
                </div>
            </div>
        </div>
    )
}

export default CourseCard