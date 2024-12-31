"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { FaSyncAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";

import { getInstructorCourse } from '@/api/instructor.api';

import { CourseProps } from '@/types/course.type';

export default function TeacherCourse() {
    const [instructorCourse, setInstructorCourse] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            const data = await getInstructorCourse()
            setInstructorCourse(data)
        }

        getCourses()
    }, [])

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between items-center flex-wrap gap-4'>
                <h4 className='text-2xl font-medium'>BÀI GIẢNG CỦA TÔI</h4>
                <div className='hidden lg:flex gap-2 items-center text-sm'>
                    <input type="text" className='py-2 px-3 border border-solid border-[#3333] rounded-sm outline-none' placeholder='Nhập tên khóa học' />
                    <button className='flex items-center border border-solid border-[#3333] gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-medium'>
                        <FaSearchDollar />
                        Tìm kiếm
                    </button>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                    <Link href={"/"} className='bg-white hover:bg-gray-100 py-2 px-3 flex items-center gap-2 font-medium rounded-sm border border-solid border-[#3333]'>
                        <FaSyncAlt />
                        Đồng bộ Edubit
                    </Link>
                    <Link href={"/dashboard/teacher/course/create"} className='bg-blue-600 hover:bg-blue-700 flex items-center font-medium gap-2 text-white py-2 px-3 rounded-sm border border-solid border-[#3333]'>
                        <FaPlus />
                        Tạo khóa học
                    </Link>
                </div>
            </div>

            {instructorCourse.map((course: CourseProps, index) => (
                <div className='flex flex-col gap-4' key={index}>
                    <div className='w-full flex md:flex-row flex-col bg-white border border-solid border-[#3333]'>
                        <div className='lg:w-[380px]'>
                            <img
                                src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg"
                                alt="" className='w-full'
                            />
                        </div>
                        <div className='flex w-full md:flex-row flex-col justify-between items-center p-4 gap-4'>
                            <div className='flex flex-1 md:flex-col flex-row self-stretch justify-between'>
                                <span className='text-lg font-medium break-words'>{course.courseName}</span>
                                <span className='text-sm bg-[#a94442] text-center text-white px-12 w-max flex justify-center items-center'>{course.approvalStatus}</span>
                            </div>
                            <p className='flex-shrink-0 font-medium'>Hoàn thành khóa học</p>
                            <div className='flex-1 bg-[#929292] h-2'>
                                <div className='bg-blue-600 h-2' style={{ width: "20%" }}></div>
                            </div>
                            <div className='flex items-center gap-2 text-blue-600 font-medium'>
                                <button>Link</button>
                                <Link href={`/manage/${course._id}/target`} className='flex-shrink-0'>Sửa / Quản lý</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
