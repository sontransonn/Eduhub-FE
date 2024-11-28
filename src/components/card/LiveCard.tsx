import React from 'react'

import { FiCalendar, FiClock } from 'react-icons/fi'

const LiveCard = () => {
    return (
        <div className='w-full flex flex-col gap-1.5'>
            <img
                className='rounded-sm h-44'
                src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/nutrime-livestream.png" alt="" />
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

export default LiveCard