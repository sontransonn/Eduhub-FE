"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import {
    Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { InstructorCreateCourse } from '@/api/instructor.api';

export default function CreateCourse() {
    const router = useRouter();

    const [courseName, setCourseName] = useState<string>('')

    const handleCreateCourse = async () => {
        try {
            const data = await InstructorCreateCourse(courseName)
            toast.success(data.message)
            router.push("/dashboard/teacher/course")
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

    return (
        <div className='flex flex-col gap-8'>
            <Breadcrumb>
                <BreadcrumbList className='text-base font-medium text-black'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/dashboard/teacher/course' className='cursor-pointer'>
                            Bài giảng
                        </BreadcrumbLink>
                    </BreadcrumbItem >
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className='cursor-pointer'>
                        <BreadcrumbLink href='/dashboard/teacher/course/create'>
                            Thêm khóa học mới
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h4 className='text-2xl font-medium'>Thêm khóa học mới</h4>

            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Tải nhanh khóa học qua link google sheet</h5>
                <div className='relative'>
                    <input
                        type="text" className='w-full px-2.5 py-3 outline-none shadow-custom'
                        placeholder='Nhập link, vd: https://www.bing.com/search?q=sheets&cvid=538a9e0f6d1142ed8a1c17f77337375e&form=WSBSTK'
                    />
                    <button className='absolute right-0 top-0 font-medium bg-blue-600 hover:bg-blue-700 bottom-0 px-4 text-white'>Lưu lại</button>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Tên khóa học</h5>
                <p className='text-sm'>Đừng lo nếu bạn không thể nghĩ ra một tên ngay bây giờ. Bạn có thể thay đổi sau</p>
                <input type="text" className='w-full px-2.5 py-3 outline-none shadow-custom' placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao' onChange={(e) => setCourseName(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Thể loại</h5>
                <p className='text-sm'>Đừng lo lắng nêu bạn chưa chọn được thể loại phù hợp. Bạn có thể thay đổi sau</p>
                <select className='custom-select-arrow w-full relative px-2.5 py-3 border-none shadow-custom outline-none' name="" id="">
                    <option value="">Chọn thể loại</option>
                    <option value="1">Truy cập gần nhất</option>
                    <option value="2">Lâu chưa truy cập</option>
                </select>
            </div>
            <button className='bg-blue-600 hover:bg-blue-700 font-medium rounded-sm self-end text-white py-3 px-4' onClick={() => handleCreateCourse()}>Tạo khóa học</button>
        </div>
    )
}



