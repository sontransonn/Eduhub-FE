import React from 'react'
import Link from 'next/link'

import { FaRankingStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function OverviewTab() {
    return (
        <>
            <div className='text-sm font-light grid grid-cols-6 py-8 border-b border-gray-300'>
                <div className='col-span-1'>Giới thiệu khóa học</div>
                <div className='col-span-5 ms-3 lg:ms-0'>
                    <div className='font-semibold'>Bạn có biết:</div>
                </div>
            </div>
            <div className='text-sm font-light grid grid-cols-6 py-8'>
                <div className='col-span-1'>Giảng viên</div>
                <div className='col-span-5 ms-3 lg:ms-0'>
                    <Link href={"/"} className='block md:text-[#006CCB] text-[#F77321] mb-4 text-xl'>Trần Minh Tiến</Link>
                    <div className='italic font-light mb-4'>Fouder Công ty TNHH TIEN ZIVEN</div>
                    <div className='flex gap-6 mb-10'>
                        <img src="https://static.unica.vn/uploads/cong-ty-tnhh-tien-ziven/August152023525pm_cong-ty-tnhh-tien-ziven_thumb.png" alt="" className='w-[117px] h-[117px] rounded-full' />
                        <div className='text-sm'>
                            <div className='flex items-center gap-2 mb-4'>
                                <FaRankingStar size={16} />
                                4.8 xếp hạng
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <FaRegStar size={16} />
                                2.0 đánh giá
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <FiUsers size={16} />
                                819 học viên
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <FaRegCirclePlay size={16} />
                                3 khóa học
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
