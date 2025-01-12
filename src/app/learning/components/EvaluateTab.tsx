"use client"
import React, { useState } from 'react'

import { TbJewishStarFilled } from "react-icons/tb";
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi'

export default function EvaluateTab() {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = () => {
        if (review.trim() === "") {
            alert("Vui lòng nhập nội dung đánh giá!");
            return;
        }
        if (rating === 0) {
            alert("Vui lòng chọn số sao!");
            return;
        }
        console.log("Đánh giá được lưu:", { rating, review });
        // Reset state sau khi gửi
        setRating(0);
        setReview("");
    };

    return (
        <div className='py-5 pb-0 flex flex-col gap-6'>
            <h3 className='font-bold text-2xl text-black'>Phản hồi của học viên</h3>


            <div className="flex items-center gap-2">
                <span className="text-black">Số sao:</span>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TbJewishStarFilled
                        key={index}
                        size={24}
                        className="cursor-pointer"
                        color={index < rating ? "#b4690e" : "#d1d7dc"}
                        onClick={() => setRating(index + 1)} // Cập nhật số sao được chọn
                    />
                ))}
            </div>
            <textarea
                className="w-full p-3 border border-solid border-[#d1d7dc] rounded-md text-sm"
                rows={5}
                placeholder="Nhập đánh giá của bạn..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            ></textarea>

            {/* Nút gửi đánh giá */}
            <button
                className="bg-[#b4690e] text-white py-2 px-4 rounded-md hover:opacity-80"
                onClick={handleSubmit}
            >
                Gửi đánh giá
            </button>
            <h3 className='font-bold text-2xl text-black'>Đánh giá</h3>
            <div className='flex gap-4'>
                <div className='relative w-[400px]'>
                    <input type="text" placeholder='Tìm kiếm đánh giá' className='w-full py-2.5 px-4 text-sm outline-none border border-solid border-black' />
                    <div className='absolute right-0 top-0 bg-black bottom-0 px-4 flex items-center justify-center cursor-pointer'>
                        <FiSearch color='white' size={18} />
                    </div>
                </div>
                <div className='relative w-[200px] cursor-pointer'>
                    <div className='w-full py-2.5 px-4 text-sm flex justify-between items-center outline-none border border-solid border-black'>
                        Tất cả xếp hạng
                        <IoIosArrowDown size={16} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className='pb-5 border-b border-solid border-[#d1d7dc]'>
                        <div className='flex gap-6'>
                            <img src="https://unica.vn/icon/profile.png" alt="" className='w-9 h-9 rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h4>Nguyễn Thị Khánh Huyền</h4>
                                <div className='flex items-start'>
                                    <TbJewishStarFilled size={20} color='#b4690e' />
                                    <TbJewishStarFilled size={20} color='#b4690e' />
                                    <TbJewishStarFilled size={20} color='#b4690e' />
                                    <TbJewishStarFilled size={20} color='#b4690e' />
                                    <TbJewishStarFilled size={20} color='#b4690e' />
                                </div>
                                <p className='text-black font-normal text-sm'>Khóa học đào tạo SEO miễn phí Bạn hoàn thành 13 trong 17 bài giảng</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
