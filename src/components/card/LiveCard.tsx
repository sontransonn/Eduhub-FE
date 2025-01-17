import Link from 'next/link'
import React from 'react'

import { FiCalendar, FiClock } from 'react-icons/fi'

export default function LiveCard() {
    return (
        <div className='w-full flex flex-col gap-1.5'>
            <Link href={"/"} className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                <img
                    className='rounded w-full h-full absolute inset-0'
                    src={"https://nguyenvantuan.info/wp-content/uploads/2023/07/image-27.png"}
                    alt="" />
            </Link>
            <h3 className="font-medium line-clamp-2 break-words">Khóa học Bí quyết ăn đúng sống trường thọ</h3>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-sm font-ligh'>
                    <FiCalendar size={18} />
                    21/11/2024
                </span>
                <span>Zoom</span>
            </div>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-sm font-light'>
                    <FiClock size={18} />
                    19:00 - 22:00
                </span>
                <span className='font-semibold'>Miễn phí</span>
            </div>
        </div>
    )
}
