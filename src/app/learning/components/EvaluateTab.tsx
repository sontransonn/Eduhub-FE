import React from 'react'

import { TbJewishStarFilled } from "react-icons/tb";
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi'

export default function EvaluateTab() {
    return (
        <div className='py-5 pb-0 flex flex-col gap-6'>
            <h3 className='font-bold text-2xl text-black'>Phản hồi của học viên</h3>
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
