import React from 'react'

import {
    Breadcrumb, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function CreateCourse({ setActiveTab }: { setActiveTab: any }) {
    return (
        <div className='flex flex-col gap-8'>
            <Breadcrumb>
                <BreadcrumbList className='text-base font-medium text-black'>
                    <BreadcrumbItem>
                        <BreadcrumbLink className='cursor-pointer'>
                            Bài giảng
                        </BreadcrumbLink>
                    </BreadcrumbItem >
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className='cursor-pointer'>
                        <BreadcrumbLink>
                            Thêm khóa học mới
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h4 className='text-2xl font-medium'>Thêm khóa học mới</h4>

            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Tải nhanh khóa học qua link google sheet<span>[Xem mẫu]</span></h5>
                <div className='relative'>
                    <input
                        type="text" className='w-full px-4 py-3 outline-none shadow-custom'
                        placeholder='Nhập link, vd: https://www.bing.com/search?q=sheets&cvid=538a9e0f6d1142ed8a1c17f77337375e&form=WSBSTK'
                    />
                    <button className='absolute right-0 top-0 font-medium bg-blue-500 hover:bg-blue-600 bottom-0 px-4 text-white'>Lưu lại</button>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Tên khóa học</h5>
                <p className='text-sm'>Đừng lo nếu bạn không thể nghĩ ra một tên ngay bây giờ. Bạn có thể thay đổi sau</p>
                <input
                    type="text" className='w-full px-4 py-3 outline-none shadow-custom'
                    placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='text-lg font-medium'>Thể loại</h5>
                <p className='text-sm'>Đừng lo lắng nêu bạn chưa chọn được thể loại phù hợp. Bạn có thể thay đổi sau</p>
                <select className='custom-select-arrow w-full relative px-4 py-3 border-none shadow-custom outline-none' name="" id="">
                    <option value="">Chọn thể loại</option>
                    <option value="1">Truy cập gần nhất</option>
                    <option value="2">Lâu chưa truy cập</option>
                </select>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 font-medium rounded-sm self-end text-white py-3 px-4' onClick={() => setActiveTab("course")}>Tạo khóa học</button>
        </div>
    )
}
