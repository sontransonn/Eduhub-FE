import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='bg-[#003555] text-white'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 pt-12 flex flex-col gap-[60px] leading-normal'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[40px] font-medium'>Học viên : Trần Đức Sơn</span>
                    </div>
                    <div className='flex'>
                        <ul className='flex gap-5 font-medium'>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <span className='hover:text-slate-400'>Khóa học</span>
                                <div className='h-[4px] bg-white w-full'></div>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/group"} className='hover:text-slate-400'>Hội viên</Link>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <span className='hover:text-slate-400'>Yêu thích</span>
                            </li>
                            <li className='flex flex-col cursor-pointer'>
                                <span className='hover:text-slate-400'>Ví của bạn</span>
                            </li>
                            <li className='flex flex-col cursor-pointer'>
                                <span className='hover:text-slate-400'>Lịch sử đặt hàng</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8 text-sm font-medium'>
                    <form action="" className='grid lg:grid-cols-12 grid-cols-4 gap-4'>
                        <select className='appearance-none relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none'
                            name="" id="">
                            <option value="">-- Sắp xếp theo --</option>
                            <option value="">Truy cập gần nhất</option>
                            <option value="">Lâu chưa truy cập</option>
                        </select>
                        <select className='appearance-none relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none'
                            name="" id="">
                            <option value="">-- Danh mục --</option>
                            <option value="">Truy cập gần nhất</option>
                            <option value="">Lâu chưa truy cập</option>
                        </select>
                        <select className='appearance-none relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none'
                            name="" id="">
                            <option value="">-- Trạng thái --</option>
                            <option value="">Đang học</option>
                            <option value="">Chưa học</option>
                        </select>
                        <select className='appearance-none relative col-span-2 bg-transparent px-4 py-[10px] border rounded border-black outline-none'
                            name="" id="">
                            <option value="">-- Giảng viên --</option>
                            <option value="">Truy cập gần nhất</option>
                            <option value="">Lâu chưa truy cập</option>
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page