import React from 'react'

import { MdArrowBackIos } from "react-icons/md";

export default function page() {
    return (
        <>
            <header className='bg-[#003555] text-white'>
                <div className='h-14 p-4 flex justify-between items-center'>
                    <div className='flex gap-6 text-white items-center'>
                        <div className='flex items-center'>
                            <MdArrowBackIos size={18} />
                            <span className='text-sm hidden md:block'>Quay lại danh sách khóa học</span>
                        </div>
                        <span className='font-medium'>Thiết lập gian hàng và sản phẩm chuẩn Shopee</span>
                        <button className='py-1 px-6 text-sm bg-gray-500 hidden md:block'>Mới</button>
                        <span className='text-sm hidden md:block'>Đang cập nhật</span>
                    </div>
                    <button className='py-1 px-6 text-sm text-black bg-white'>Lưu</button>
                </div>
            </header>

            <main className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:pt-8'>
                    helo
                </div>
            </main>
        </>
    )
}
