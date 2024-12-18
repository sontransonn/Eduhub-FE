import React from 'react'
import Link from 'next/link'

import { FiSearch } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa6'
import { FaHeart } from "react-icons/fa";

export default function UserWishlist() {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                <form action="" className='flex justify-end gap-4 text-sm'>
                    <div className='flex relative border border-black rounded w-96'>
                        <input
                            type="text"
                            className='block w-full p-2.5 ps-4 text-sm rounded outline-none'
                            placeholder='Tìm kiếm khóa học'
                        />
                        <button className='p-[10px] bg-blue-700 text-white'>
                            <FiSearch size={18} />
                        </button>
                    </div>
                </form>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-8'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className='relative w-full flex flex-col gap-1.5'>
                            <div className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                                <img
                                    className='rounded w-full h-full absolute inset-0'
                                    src="https://static.unica.vn/upload/images/2019/04/hoc-gioi-tieng-anh-toan-dien_m_1555572380.jpg"
                                    alt="" />
                            </div>
                            <h3 className='font-medium line-clamp-2'>Học giỏi Tiếng Anh toàn diện: Nghe, Nói, Đọc, Viết</h3>
                            <div className='text-sm font-light'>Bùi Đức Tiến</div>
                            <div className='flex items-center text-sm gap-1.5'>
                                <span className='font-bold'>4.6</span>
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
                                    399.000
                                    <sup>đ</sup>
                                </div>
                                <div className='text-sm line-through text-[#929292]'>
                                    600.000
                                    <sup>đ</sup>
                                </div>
                            </div>
                            <div className='absolute top-2 right-2'>
                                <FaHeart color='#006ecc' size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
