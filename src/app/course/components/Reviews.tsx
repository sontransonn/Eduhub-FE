"use client"
import React, { useEffect, useState } from 'react'

import { TbJewishStarFilled } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";

import { getRate } from '@/api/user.api';

import { CourseProps } from '@/types/course.type';

export default function Reviews({ currentCourse }: { currentCourse: CourseProps }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        const fetchAllRatings = async () => {
            try {
                const data = await getRate(currentCourse._id);
                setListRating(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        };
        fetchAllRatings();
    }, [])

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    useEffect(() => {
        if (isDialogOpen) {
            document.body.classList.add("body-no-scroll");
        } else {
            document.body.classList.remove("body-no-scroll");
        }

        return () => {
            document.body.classList.remove("body-no-scroll");
        };
    }, [isDialogOpen]);

    return (
        <>
            <div className='grid grid-cols-2'>
                {listRating.map((rating, index) => (
                    <div className='md:col-span-1 col-span-2 py-6 border-t border-gray-300 odd:pr-4 even:pl-4' key={index}>
                        <div className='flex gap-2 mb-4.5'>
                            <img className='w-[35px] h-[35px] rounded-full' src={rating.user.avatar} alt="" />
                            <div>
                                <div className='font-medium'>{rating.user.fullName}</div>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex text-[#F77321]'>
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <TbJewishStarFilled key={starIndex} color={starIndex < rating.rating ? '#F77321' : '#d1d7dc'} />
                                        ))}
                                    </div>
                                    3 năm trước
                                </div>
                            </div>
                        </div>
                        <p>{rating.content}</p>
                    </div>
                ))}
            </div>

            {/* Xem thêm đánh giá */}
            <div className='text-center'>
                <button className='border border-gray-400 hover:bg-gray-200 rounded-lg py-3 px-5' onClick={openDialog}>Xem thêm đánh giá</button>
            </div>

            {isDialogOpen && (
                <>
                    <div className="overlay"></div>
                    <div className='fixed top-0 left-0 right-0 bottom-0 z-[1999] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex'>
                        <div className='relative w-full max-w-7xl max-h-full'>
                            <div className='flex flex-col gap-6 relative bg-white rounded-lg shadow'>
                                <div className='flex items-center justify-between p-4 md:p-5 md:pb-0 pb-0 rounded-t'>
                                    <h3 className='text-xl font-medium text-gray-900'>
                                        <div className='flex items-center gap-2 font-medium text-2xl'>
                                            <div className='flex gap-1.5 items-center'>
                                                <TbJewishStarFilled size={24} color='#f8731f' />
                                                {currentCourse.rating} xếp hạng khóa học
                                            </div>
                                            <BsDot className='md:block hidden' />
                                            <span className='md:block hidden'>{currentCourse.ratingNum} đánh giá</span>
                                        </div>
                                    </h3>
                                    <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center' onClick={closeDialog}>
                                        <RiCloseLargeFill size={18} />
                                    </button>
                                </div>
                                <div className='p-4 md:p-5 md:pt-0 pt-0 flex md:flex-row flex-col lg:gap-20 gap-6'>
                                    <div>
                                        <div className='flex gap-3 w-56 items-center'>
                                            <div className='w-20 bg-gray-200 h-2.5'>
                                                <div className='bg-[#6A6F73] h-2.5' style={{ width: "70%" }}></div>
                                            </div>
                                            <div className='flex items-center text-sm'>
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                            </div>
                                            <div className='text-sm text-blue-500'>70%</div>
                                        </div>
                                        <div className='flex gap-3 w-56 items-center'>
                                            <div className='w-20 bg-gray-200 h-2.5'>
                                                <div className='bg-[#6A6F73] h-2.5' style={{ width: "11%" }}></div>
                                            </div>
                                            <div className='flex items-center text-sm'>
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} />
                                            </div>
                                            <div className='text-sm text-blue-500'>11%</div>
                                        </div>
                                        <div className='flex gap-3 w-56 items-center'>
                                            <div className='w-20 bg-gray-200 h-2.5'>
                                                <div className='bg-[#6A6F73] h-2.5' style={{ width: "5%" }}></div>
                                            </div>
                                            <div className='flex items-center text-sm'>
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                            </div>
                                            <div className='text-sm text-blue-500'>5%</div>
                                        </div>
                                        <div className='flex gap-3 w-56 items-center'>
                                            <div className='w-20 bg-gray-200 h-2.5'>
                                                <div className='bg-[#6A6F73] h-2.5' style={{ width: "3%" }}></div>
                                            </div>
                                            <div className='flex items-center text-sm'>
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                            </div>
                                            <div className='text-sm text-blue-500'>3%</div>
                                        </div>
                                        <div className='flex gap-3 w-56 items-center'>
                                            <div className='w-20 bg-gray-200 h-2.5'>
                                                <div className='bg-[#6A6F73] h-2.5' style={{ width: "9%" }}></div>
                                            </div>
                                            <div className='flex items-center text-sm'>
                                                <TbJewishStarFilled size={18} color='#F77321' />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                                <TbJewishStarFilled size={18} />
                                            </div>
                                            <div className='text-sm text-blue-500'>9%</div>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='load_feedback'>
                                            {listRating.map((rating, index) => (
                                                <div className='pb-6 border-t pt-6 border-gray-400' key={index}>
                                                    <div className='flex gap-2 mb-4.5'>
                                                        <img src={rating.user.avatar} alt="" className='w-[35px] h-[35px] rounded-full' />
                                                        <div>
                                                            <div className='font-medium'>{rating.user.fullName}</div>
                                                            <div className='flex gap-2'>
                                                                <div className='flex items-center text-sm text-[#F77321]'>
                                                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                                                        <TbJewishStarFilled key={starIndex} color={starIndex < rating.rating ? '#F77321' : '#d1d7dc'} />
                                                                    ))}
                                                                </div>
                                                                3 năm trước
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>{rating.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <button className='border border-gray-400 hover:bg-gray-200 rounded-lg py-3 px-5 load-more-feedback w-full'>Hiện thêm đánh giá</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}