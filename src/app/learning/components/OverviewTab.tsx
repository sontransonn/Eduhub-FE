import React from 'react'
import Link from 'next/link'

import { FaRankingStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function OverviewTab({ infoTeacher, introduce }: { infoTeacher: { title: string, user: { fullName: string, avatar: string } }, introduce: string }) {
    return (
        <>
            <div className='text-sm font-light grid grid-cols-6 py-5 border-b border-gray-300'>
                <div className='col-span-1'>Giới thiệu khóa học</div>
                <div className='col-span-5 ms-3 lg:ms-0'>
                    <div className='font-semibold'>Bạn có biết:</div>
                    <div className='text-justify overflow-hidden collapsed h-auto mt-4'>
                        <p>{introduce}</p>
                    </div>
                </div>
            </div>
            <div className='text-sm font-light grid grid-cols-6 py-5'>
                <div className='col-span-1'>Giảng viên</div>
                <div className='col-span-5 ms-3 lg:ms-0'>
                    <Link href={"/"} className='block md:text-[#006CCB] text-[#F77321] mb-4 text-xl'>{infoTeacher?.user?.fullName}</Link>
                    <div className='italic font-light mb-4'>{infoTeacher.title}</div>
                    <div className='flex gap-6 mb-4'>
                        <div className='rounded-full border-2 border-solid border-white'>
                            <img src={infoTeacher?.user?.avatar} alt="" className='object-cover w-[117px] h-[117px] rounded-full' />
                        </div>
                        <div className='text-sm flex flex-col justify-between'>
                            <div className='flex items-center gap-2'>
                                <FaRankingStar size={16} />
                                4.8 xếp hạng
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
                </div>
            </div>
        </>
    )
}
