"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { FaSyncAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { MdCheckCircle, MdPending, MdCancel } from "react-icons/md";

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
                <div className="flex flex-col gap-6" key={index}>
                    <div className="w-full flex flex-col md:flex-row bg-white rounded-sm overflow-hidden border border-[#3333]">
                        <div className="md:w-[320px] flex-shrink-0">
                            <img
                                src={course?.poster || "https://res.cloudinary.com/dlunbu0qm/image/upload/v1736611555/Eduhub2.png"}
                                alt={`${course.courseName}`}
                                className="w-full h-[200px] md:h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col p-6 gap-4 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <span className="text-xl font-semibold text-gray-800 truncate">{course.courseName}</span>
                                <span
                                    className={`inline-flex items-center text-sm px-4 py-1 rounded-full font-medium ${course.approvalStatus === "Approved"
                                        ? "bg-green-100 text-green-600"
                                        : course.approvalStatus === "Pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {course.approvalStatus === "Approved" && <MdCheckCircle className="mr-2" />}
                                    {course.approvalStatus === "Pending" && <MdPending className="mr-2" />}
                                    {course.approvalStatus === "Rejected" && <MdCancel className="mr-2" />}
                                    {course.approvalStatus}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-700 text-sm font-medium">Hoàn thành khóa học</p>
                                    <span className="text-gray-500 text-sm font-semibold">{`${20}%`}</span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: "20%" }}></div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                    <AiOutlineEye /> Xem khóa học
                                </button>
                                <Link href={`/manage/${course._id}/target`} className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                                    <AiOutlineEdit /> Sửa / Quản lý
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
