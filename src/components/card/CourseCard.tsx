import React from 'react'

import { FaStar } from 'react-icons/fa'

const CourseCard = () => {
    return (
        <div className='w-full flex flex-col gap-1.5'>
            <img
                className='max-w-full rounded-sm h-auto object-cover'
                src="https://i.imgur.com/kFLuGCR.jpeg"
                alt="" />
            <h3 className='font-medium line-clamp-2'>Học nhiếp ảnh từ cơ bản đến nâng cao</h3>
            <div className='text-sm font-light'>Hoàng Viết Thắng</div>
            <div className='flex items-center gap-1'>
                <span className='text-sm font-medium'>4.5</span>
                <div className='text-[#F77321] flex gap-0.5'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='text-xs text-[#5C5C5C]'>(107)</div>
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
            <div className='px-2 py-1.5 bg-[#FFDB5B] w-fit text-xs'>Bestseller</div>
        </div>
    )
}

export default CourseCard