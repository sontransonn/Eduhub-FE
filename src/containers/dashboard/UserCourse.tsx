"use client"
import React from 'react'
import Link from 'next/link';

import { FiSearch } from "react-icons/fi";

import categories from '@/constants/categories'

export default function UserCourse() {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                <form action="" className='grid lg:grid-cols-12 grid-cols-4 gap-4 text-sm'>
                    <select className='custom-select-arrow relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none' name="" id="">
                        <option value="">-- Sắp xếp theo --</option>
                        <option value="1">Truy cập gần nhất</option>
                        <option value="2">Lâu chưa truy cập</option>
                    </select>
                    <select className='custom-select-arrow relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none' name="" id="">
                        <option value="">-- Danh mục --</option>
                        {categories.map((category, index) => (
                            <option value={index}>{category.title}</option>
                        ))}

                    </select>
                    <select className='custom-select-arrow relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none' name="" id="">
                        <option value="">-- Trạng thái --</option>
                        <option value="1">Đang học</option>
                        <option value="2">Chưa học</option>
                    </select>
                    <select className='custom-select-arrow relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none' name="" id="">
                        <option value="">-- Giảng viên --</option>
                        <option value="">Truy cập gần nhất</option>
                        <option value="">Lâu chưa truy cập</option>
                    </select>
                    <div className='col-span-4 flex relative border border-black rounded'>
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
                    {/* <span>Chưa mua khóa học trên unica.vn</span> */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className='flex flex-col gap-4 text-black' key={index}>
                            <Link href={"/overview"} className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                                <img
                                    className='rounded w-full h-full absolute inset-0'
                                    src="https://i.imgur.com/kFLuGCR.jpeg"
                                    alt="" />
                            </Link>
                            <div className='flex flex-col gap-2'>
                                <div className='text-base leading-normal flex flex-col gap-2'>
                                    <Link href={"/"} className='min-h-[48px] overflow-hidden'>
                                        <span className='font-medium line-clamp-2'>Khóa học đào tạo SEO miễn phí</span>
                                    </Link>
                                    <div className='text-sm font-light overflow-hidden flex justify-between'>
                                        <div className='line-clamp-1'>
                                            Trần Minh Tiến
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full bg-[#929292] h-1.5 mt-2'>
                                    <div className='bg-blue-600 h-1.5' style={{ width: "20%" }}></div>
                                </div>
                                <div className='flex justify-between items-start text-sm'>
                                    <div className='font-light leading-normal mt-1'>
                                        Hoàn thành 0%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
