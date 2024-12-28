"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineCloudDone } from "react-icons/md";
import { LuAlarmCheck } from "react-icons/lu";

export default function page() {
    const { userInfo } = useSelector((state: RootState) => state.user)

    return (
        <>
            <header className='fixed z-10 top-0 right-0 left-0 bg-white'>
                <div className='max-w-8xl mx-auto xl:px-20 md:px-10 py-4 px-4'>
                    <div className='flex items-center gap-6'>
                        <span className='text-2xl text-purple-800 font-medium'>59 min</span>
                        <div className='flex h-2 bg-purple-800 flex-1 rounded-full'></div>
                        <LuAlarmCheck size={32} color='gray' />
                    </div>
                </div>
            </header>
            <main className='bg-[#efebf9] text-black min-h-screen pt-[64px]'>
                <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8 py-4'>
                    <div className="flex flex-col gap-3 mx-auto max-w-3xl">
                        <div className='flex flex-col bg-white rounded-md border border-solid border-[#3333] p-5 gap-4 border-t-[10px] border-t-purple-800'>
                            <div className='flex flex-col gap-4 pb-4 border-b border-solid border-[#3333]'>
                                <h3 className='text-3xl font-medium'>Kiểm tra trắc nghiệm</h3>
                                <span>Test kiến thức</span>
                            </div>
                            <div className='flex flex-col gap-2 pb-4 border-b border-solid border-[#3333]'>
                                <div className='flex justify-between items-center text-sm'>
                                    <p className='font-semibold text-gray-600'>{userInfo?.email} <span className='text-blue-700 cursor-pointer'>Chuyển đổi tài khoản</span></p>
                                    <MdOutlineCloudDone size={24} />
                                </div>
                                <div className='flex text-sm items-center gap-2'>
                                    <MdOutlineMailLock size={24} />
                                    <p className='font-semibold text-gray-600'>Không được chia sẻ</p>
                                </div>
                            </div>
                            <span className='text-red-600 text-sm'>*Biểu thị câu hỏi bắt buộc</span>
                        </div>

                        {Array.from({ length: 8 }).map(() => (
                            <div className='bg-white flex flex-col gap-4 p-5 rounded-md border border-solid border-[#3333]'>
                                <div className='flex justify-between'>
                                    <span>Ba của Tèo gọi mẹ của Tý là em dâu, vậy ba của Tý gọi ba của Tèo là gì?</span>
                                    <span>0 điểm</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="" id="" className='w-5 h-5' />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="" id="" className='w-5 h-5' />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="" id="" className='w-5 h-5' />
                                        <span>2</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="" id="" className='w-5 h-5' />
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className='flex justify-between items-center'>
                            <button className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900'>Gửi</button>
                            <button className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900'>Xóa hết câu trả lời</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
