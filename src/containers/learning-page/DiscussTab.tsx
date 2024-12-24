import React from 'react'

import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function DiscussTab() {
    return (
        <div className='py-5 flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <button className='flex items-center w-max gap-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5'>
                    <FaPlus />
                    Đặt câu hỏi mới
                </button>
                <textarea name="" id="" rows={5} className='border border-gray-300 p-2.5 outline-none' placeholder='Nhập bình luận mới của bạn'></textarea>
                <button className='text-white bg-blue-700 self-end hover:bg-blue-800 font-medium rounded-lg text-sm px-10 py-2.5'>
                    Gửi
                </button>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='md:col-span-4 col-span-6'>
                    <p className='mb-3'>Bộ lọc:</p>
                    <div className='py-2.5 px-5 items-center rounded-lg shadow bg-white flex justify-between cursor-pointer'>
                        Tất cả các bài giảng
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
                <div className='md:col-span-4 col-span-6'>
                    <p className='mb-3'>Sắp xếp theo:</p>
                    <div className='py-2.5 px-5 items-center rounded-lg shadow bg-white flex justify-between cursor-pointer'>
                        Gần đây nhất
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
                <div className='col-span-6 md:col-span-4'>
                    <p className='mb-3'>Lọc câu hỏi</p>
                    <div className='py-2.5 px-5 items-center rounded-lg shadow bg-white flex justify-between cursor-pointer'>
                        Lọc câu hỏi
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
            </div>
            <div>
                <div className='text-black text-lg font-medium mb-4'>
                    Tất cả thảo luận trong khóa học này (2)
                </div>
                <div className='flex gap-4'>
                    <img src="https://unica.vn/images/profle.png" alt="" className='w-9 h-9 rounded-full' />
                    <div className='w-full'>
                        <div className='text-black text-base font-medium'>Tâm Tài</div>
                        <div className='text-black text-base font-light break-all'>
                            <p>hi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
