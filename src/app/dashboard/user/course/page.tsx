"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

import categories from '@/constants/categories'

import { FiSearch } from "react-icons/fi";

import SkeletonCard from '@/components/card/SkeletonCard';

import { getCoursePurchased } from '@/api/user.api';

import { CourseProps } from '@/types/course.type';

export default function UserDashboard() {
    const router = useRouter();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    const [coursePurchased, setCoursePurchased] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const data = await getCoursePurchased();
                setCoursePurchased(data.coursePurchased);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(true);
                    toast.error("Không thể tải dữ liệu khóa học. Vui lòng thử lại.");
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    const handleGoToCourse = (course: CourseProps) => {
        if (!course?.videos || course?.videos?.length == 0) {
            toast.error("Khóa học này chưa có video!");
            return;
        }
        const videoId = course.videos[0]?._id;
        router.push(`/learning/${course.slug}?id=${videoId}`);
    };

    return (
        <>
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
                {loading || error ? (
                    Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
                ) : coursePurchased.length > 0 ? (
                    coursePurchased.map((course: CourseProps, index) => (
                        <div className='flex flex-col gap-4 text-black' key={index}>
                            <button className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }} onClick={() => handleGoToCourse(course)}>
                                <img
                                    className='rounded w-full h-full absolute inset-0'
                                    src={course?.poster}
                                    alt={course?.courseName || 'Khóa học'}
                                />
                            </button>
                            <div className='flex flex-col gap-2'>
                                <div className='text-base flex flex-col gap-2'>
                                    <div className='min-h-9 overflow-hidden'>
                                        <span className='font-medium line-clamp-2'>{course?.courseName}</span>
                                    </div>
                                    <div className='text-sm font-light overflow-hidden flex justify-between'>
                                        <div className='line-clamp-1'>
                                            {course?.approvedBy?.fullName}
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
                                    <button className='bg-orange-500 hover:bg-orange-600 py-1 px-2 text-white rounded-sm' onClick={() => handleGoToCourse(course)}>Vào học ngay</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Chưa mua khóa học trên EduHub!</p>
                )}
            </div>
        </>
    )
}
