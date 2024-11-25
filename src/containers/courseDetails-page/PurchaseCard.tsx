"use client"
import React, { useEffect, useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { TbClockHour9 } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";

const PurchaseCard = () => {
    return (
        <div className='md:px-10 md:py-4 lg:p-4 px-4 py-6 md:bg-white lg:sticky top-28 z-20 lg:-mt-2 flex flex-col gap-4 rounded border-b shadow-custom'>
            <div className='flex items-center justify-between'>
                <div className='text-3xl lg:flex-col lg:gap-1 xl:flex-row font-semibold flex gap-2'>
                    <span>299.000đ</span>
                    <span className='text-[#929292] line-through text-lg'>700.000đ</span>
                </div>
                <span className='font-light flex-shrink-0'>
                    Giảm 57%
                </span>
            </div>

            {/* Thêm vào giỏ hàng */}
            <div className='flex gap-2'>
                <button className='w-full py-3 bg-[#E66B22] text-white rounded-sm hover:bg-orange-600 cursor-pointer font-semibold'>
                    THÊM VÀO GIỎ HÀNG
                </button>
                <div className='flex justify-center items-center p-2.5 border border-solid border-slate-300 rounded-sm cursor-pointer hover:bg-slate-200'>
                    <FaRegHeart size={28} />
                </div>
            </div>

            {/* Mua Ngay */}
            <button className='w-full py-3 bg-[#1882fc] text-white rounded-sm hover:bg-blue-600 cursor-pointer font-semibold'>
                MUA NGAY
            </button>

            {/*  */}
            <ul className='flex flex-col gap-3 text-sm md:order-none order-last'>
                <li className='flex gap-2 items-center'>
                    <HiOutlineVideoCamera size={20} />
                    Thời lượng:
                    <span className='font-semibold'>{" "}07 giờ 15 phút</span>
                </li>
                <li className='flex gap-2 items-center'>
                    <LuClipboardList size={20} />
                    Giáo trình:
                    <span className='font-semibold'>{" "}29 bài giảng</span>
                </li>
                <li className='flex gap-2 items-center'>
                    <TbClockHour9 size={20} />
                    Sở hữu khóa học trọn đời
                </li>
                <li className='flex gap-2 items-center'>
                    <PiCertificateBold size={20} />
                    Cấp chứng chỉ hoàn thành
                </li>
            </ul>

            {/* Nhập mã giảm giá */}
            <div className='flex gap-2 pb-4 border-b border-solid border-slate-200'>
                <input
                    type="text"
                    placeholder='Nhập mã giảm giá'
                    className='border border-solid border-slate-200 w-full p-3 text-sm outline-none bg-[#f9fafc]'
                />
                <button className='flex min-w-max justify-center items-center p-2.5 border border-solid border-slate-300 rounded-sm cursor-pointer hover:bg-slate-200'>
                    Áp dụng
                </button>
            </div>

            {/* Đăng ký cho doanh nghiệp */}
            <div className='md:border-none border flex flex-col gap-4 border-gray-300 bg-white px-3 py-4 md:p-0 rounded'>
                <div className='text-lg font-medium'>
                    Đăng ký cho doanh nghiệp
                </div>
                <p className='font-light text-sm'>Giúp nhân viên của bạn truy cập không giới hạn 500 khóa học, mọi lúc, mọi nơi</p>
                <button className='py-[6px] border border-solid border-black hover:bg-slate-200 rounded-full'>
                    Đăng ký tư vấn
                </button>
            </div>
        </div>
    )
}

export default PurchaseCard