"use client"
import React, { useEffect, useState } from 'react'

import { TbJewishStarFilled } from "react-icons/tb";
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi'

import { getRate, createRate } from '@/api/user.api';
import toast from 'react-hot-toast';

export default function EvaluateTab({ courseId, courseSlug }: { courseId: string, courseSlug: string }) {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [listRating, setListRating] = useState([
        {
            content: "",
            rating: 0,
            user: {
                avatar: "",
                fullName: ""
            }
        }
    ])

    useEffect(() => {
        fetchAllRatings();
    }, [])

    const fetchAllRatings = async () => {
        try {
            const data = await getRate(courseId);
            setListRating(data)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    };

    const handleSubmit = async () => {
        if (!review.trim()) return;

        if (rating === 0) {
            toast.error("Vui lòng chọn số sao!")
            return;
        }

        try {
            await createRate(courseSlug, rating, review)
            setReview("")
            setRating(0)
            fetchAllRatings()
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    };

    return (
        <div className='py-5 pb-0 flex flex-col gap-8'>
            {/* Thống kê đánh giá */}
            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl text-black'>Thống kê đánh giá</h3>
                <div className='flex md:flex-row flex-col  items-center gap-8'>
                    <div className='text-center flex flex-col gap-2'>
                        <div className='flex justify-center items-center font-bold text-[64px] text-[#b4690e] h-16 min-w-[95px]'>4.8</div>
                        <div className='flex justify-center'>
                            <TbJewishStarFilled size={20} color='#b4690e' />
                            <TbJewishStarFilled size={20} color='#b4690e' />
                            <TbJewishStarFilled size={20} color='#b4690e' />
                            <TbJewishStarFilled size={20} color='#b4690e' />
                            <TbJewishStarFilled size={20} color='#b4690e' />
                        </div>
                        <span>Điểm đánh giá trung bình</span>
                    </div>
                    <div className='flex flex-col gap-4 w-2/5 flex-1'>
                        <div className='flex gap-2 items-center'>
                            <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                                <span className='h-full bg-[#6a6f73]' style={{ width: "75%" }}></span>
                            </span>
                            <div className='flex justify-center'>
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                            </div>
                            <span>75%</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                                <span className='h-full bg-[#6a6f73]' style={{ width: "25%" }}></span>
                            </span>
                            <div className='flex justify-center'>
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} />
                            </div>
                            <span>25%</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                                <span className='h-full bg-[#6a6f73]' style={{ width: "50%" }}></span>
                            </span>
                            <div className='flex justify-center'>
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                            </div>
                            <span>0%</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                                <span className='h-full bg-[#6a6f73]' style={{ width: "100%" }}></span>
                            </span>
                            <div className='flex justify-center'>
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                            </div>
                            <span>0%</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                                <span className='h-full bg-[#6a6f73]' style={{ width: "15%" }}></span>
                            </span>
                            <div className='flex justify-center'>
                                <TbJewishStarFilled size={20} color='#b4690e' />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                                <TbJewishStarFilled size={20} />
                            </div>
                            <span>0%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Đánh giá khóa học */}
            <div className='flex flex-col gap-2.5'>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl text-black">Đánh giá khóa học:</span>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <TbJewishStarFilled
                            key={index}
                            size={24}
                            className="cursor-pointer"
                            color={index < rating ? "#b4690e" : "#d1d7dc"}
                            onClick={() => setRating(index + 1)}
                        />
                    ))}
                </div>
                <textarea
                    className="border border-gray-300 p-2.5 outline-none rounded-sm"
                    rows={4} placeholder="Nhập đánh giá của bạn..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <button className="bg-[#b4690e] text-white font-medium rounded-sm text-sm px-4 py-2 self-end hover:opacity-80" onClick={handleSubmit}>
                    Gửi đánh giá
                </button>
            </div>

            {/* Phản hồi của học viên */}
            <div className='flex flex-col gap-5'>
                <h3 className='font-bold text-2xl text-black'>Phản hồi của học viên</h3>
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
                    {listRating.map((rating, index) => (
                        <div key={index} className='pb-5 border-b border-solid border-[#d1d7dc]'>
                            <div className='flex gap-4'>
                                <img src={rating.user.avatar} alt="" className='w-10 h-10 rounded-full' />
                                <div className='flex flex-col gap-2'>
                                    <h4>{rating.user.fullName}</h4>
                                    <div className='flex items-start'>
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <TbJewishStarFilled key={starIndex} size={20} color={starIndex < rating.rating ? '#b4690e' : '#d1d7dc'} />
                                        ))}
                                    </div>
                                    <p className='text-black font-normal text-sm'>{rating.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
