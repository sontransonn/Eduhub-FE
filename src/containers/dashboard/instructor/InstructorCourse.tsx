import React from 'react'
import Link from 'next/link';

import { FaSyncAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function InstructorCourse({ setActiveTab }: { setActiveTab: any }) {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
                <h4 className='text-2xl font-medium'>BÀI GIẢNG CỦA TÔI</h4>
                <div className='flex items-center gap-4'>
                    <button className='bg-white py-2 px-3 flex items-center gap-2 font-medium rounded-sm border border-solid border-[#3333]'>
                        <FaSyncAlt />
                        Đồng bộ Edubit
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-600 flex items-center font-medium gap-2 text-white py-2 px-3 rounded-sm' onClick={() => setActiveTab('course/create')}>
                        <FaPlus />
                        Tạo khóa học
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='w-full flex md:flex-row flex-col bg-white border border-solid border-[#3333]'>
                    <div className='lg:w-[380px]'>
                        <img
                            src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg"
                            alt="" className='w-full'
                        />
                    </div>
                    <div className='flex w-full justify-between items-center p-4 gap-4'>
                        <p className='flex-shrink-0'>Hoàn thành khóa học</p>
                        <div className='flex-1 bg-[#929292] h-2'>
                            <div className='bg-blue-600 h-2' style={{ width: "20%" }}></div>
                        </div>
                        <div className='flex items-center gap-2 text-blue-600 font-medium'>
                            <button>Link</button>
                            <Link href={`/course/manage`} className='flex-shrink-0'>Sửa / Quản lý</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
