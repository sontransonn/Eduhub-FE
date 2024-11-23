import React from 'react'

import { FaStar } from 'react-icons/fa'

const BookCard = () => {
    return (
        <div className='w-full flex flex-col gap-3 overflow-hidden'>
            <img
                className='max-w-full rounded-sm h-auto object-cover'
                src="https://static.unica.vn/upload/images/2023/08/Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(2).png_1692073502.jpg"
                alt="" />
            <h3 className="font-medium line-clamp-2 break-words">Sách Cẩm Nang Bán Hàng TikTok: Từ Zero Đến Hero</h3>
            <div className='flex items-center gap-0.5 text-[#F77321]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className='flex gap-2'>
                <span className='text-xl font-medium'>
                    298.000
                    <sup>đ</sup>
                </span>
                <span className='text-sm line-through text-[#929292]'>
                    300.000
                    <sup>đ</sup>
                </span>
            </div>
        </div>
    )
}

export default BookCard