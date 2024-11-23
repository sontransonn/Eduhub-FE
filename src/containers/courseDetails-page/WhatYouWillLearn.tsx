import React from 'react'

import { FaCheck } from 'react-icons/fa'

const WhatYouWillLearn = () => {
    return (
        <div className='grid md:grid-cols-2 gap-x-20 gap-y-5'>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Sở hữu các công thức, cách làm các món ăn vặt hot nhất thị trường </p>
            </div>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Tự làm được các đồ ăn vặt, đảm bảo vệ sinh an toàn thực phẩm</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Có thêm kiếm thức về kinh doanh quán ăn, định lượng đồ ăn, setup menu hợp lý và hấp dẫn nhất.</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Tự biến tấu từ món cơ bản thành món ăn riêng biệt cho quán ăn của mình. </p>
            </div>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Lựa chọn món ăn hợp lý với chế độ dinh dưỡng của trẻ trên 2 tuổi</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <FaCheck size={18} className='flex-shrink-0' />
                <p>Biết các lựa chọn nguyên liệu sạch, đảm bảo an toàn cho sức khoẻ</p>
            </div>
        </div>
    )
}

export default WhatYouWillLearn