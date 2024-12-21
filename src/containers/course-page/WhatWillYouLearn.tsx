import React from 'react'

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function WhatWillYouLearn() {
    return (
        <div className='grid md:grid-cols-2 gap-x-20 gap-y-5'>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Sử dụng thành thạo phần mềm học ghép ảnh chuyên nghiệp với Photoshop</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Học cách cắt ghép ảnh và lên ý tưởng cho một tấm hình</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Nắm được quy tắc hướng sáng cũng như bố cục của một bức ảnh</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Biết cách Retouch và Blend màu cho bất kỳ tấm ảnh nào</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Tự ghép bản thân mình vào trong các phim ảnh hay đứng chụp cùng thần tượng một cách chân thật</p>
            </div>
            <div className='flex gap-2 text-sm'>
                <div><IoMdCheckmarkCircleOutline size={24} /></div>
                <p>Tự tin với tài năng photoshop của bản thân, thỏa sức sáng tạo cùng photoshop</p>
            </div>
        </div>
    )
}
