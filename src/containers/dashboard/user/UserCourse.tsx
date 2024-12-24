"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast';

import categories from '@/constants/categories'

import { FiSearch } from "react-icons/fi";

import { getCoursePurchased } from '@/api/user.api';

import { CourseProps } from '@/types/course.type';

export default function UserCourse() {
    const [coursePurchased, setCoursePurchased] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCoursePurchased();
                setCoursePurchased(data.coursePurchased)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    console.error('Failed:', error.message);
                } else {
                    toast.error('An unknown error occurred');
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [])

    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                <form action="" className='grid lg:grid-cols-12 grid-cols-4 gap-4 text-sm'>
                    <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                        <option value="">-- Sắp xếp theo --</option>
                        <option value="1">Truy cập gần nhất</option>
                        <option value="2">Lâu chưa truy cập</option>
                    </select>
                    <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                        <option value="">-- Danh mục --</option>
                        {categories.map((category, index) => (
                            <option value={index} key={index}>{category.title}</option>
                        ))}

                    </select>
                    <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                        <option value="">-- Trạng thái --</option>
                        <option value="1">Đang học</option>
                        <option value="2">Chưa học</option>
                    </select>
                    <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
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
                    {coursePurchased.length == 0 ? (
                        <span>Chưa mua khóa học trên unica.vn</span>
                    ) : (
                        <>
                            {coursePurchased.map((course: CourseProps, index) => (
                                <div className='flex flex-col gap-4 text-black' key={index}>
                                    <Link href={`/learning/${course.slug}?id=${course?.videos[0]?._id}`} className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                                        <img
                                            className='rounded w-full h-full absolute inset-0'
                                            src={course.poster}
                                            alt="" />
                                    </Link>
                                    <div className='flex flex-col gap-2'>
                                        <div className='text-base flex flex-col gap-2'>
                                            <div className='min-h-9 overflow-hidden'>
                                                <span className='font-medium line-clamp-2'>{course.courseName}</span>
                                            </div>
                                            <div className='text-sm font-light overflow-hidden flex justify-between'>
                                                <div className='line-clamp-1'>
                                                    {course.approvedBy.fullName}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full bg-[#929292] h-1.5 mt-2'>
                                            <div className='bg-blue-600 h-1.5' style={{ width: "20%" }}></div>
                                        </div>
                                        <div className='flex justify-between items-center text-sm'>
                                            <div className='font-light'>
                                                Hoàn thành 0%
                                            </div>
                                            <Link href={`/learning/${course.slug}?id=${course?.videos[0]?._id}`} className='bg-orange-500 hover:bg-orange-600 py-1 px-2 text-white rounded-sm'>Vào học ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
