import React from 'react'

import { MdOutlineStarPurple500 } from "react-icons/md";

export default function EvaluateTab() {
    return (
        <div className='py-5 flex flex-col gap-6'>
            <h3 className='font-bold text-2xl text-black'>Phản hồi của học viên</h3>
            <div className='flex md:flex-row flex-col  items-center gap-8'>
                <div className='text-center'>
                    <div className='flex justify-center items-center font-bold text-[64px] text-[#b4690e] h-16 min-w-[95px]'>4.8</div>
                    <div className='flex justify-center'>
                        <MdOutlineStarPurple500 size={20} color='#b4690e' />
                        <MdOutlineStarPurple500 size={20} color='#b4690e' />
                        <MdOutlineStarPurple500 size={20} color='#b4690e' />
                        <MdOutlineStarPurple500 size={20} color='#b4690e' />
                        <MdOutlineStarPurple500 size={20} color='#b4690e' />
                    </div>
                    <div className='mt-2'>Điểm đánh giá trung bình</div>
                </div>
                <div className='flex flex-col gap-4 w-2/5 flex-1 container-rate-star'>
                    <div className='flex gap-2 items-center'>
                        <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                            <span className='h-full bg-[#6a6f73]' style={{ width: "75%" }}></span>
                        </span>
                        <div className='flex justify-center'>
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                        </div>
                        <span>75%</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                            <span className='h-full bg-[#6a6f73]' style={{ width: "25%" }}></span>
                        </span>
                        <div className='flex justify-center'>
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} />
                        </div>
                        <span>25%</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                            <span className='h-full bg-[#6a6f73]' style={{ width: "0%" }}></span>
                        </span>
                        <div className='flex justify-center'>
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                        </div>
                        <span>0%</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                            <span className='h-full bg-[#6a6f73]' style={{ width: "0%" }}></span>
                        </span>
                        <div className='flex justify-center'>
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                        </div>
                        <span>0%</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex flex-auto min-w-[120px] max-w-[300px] h-2 bg-[#d1d7dc]'>
                            <span className='h-full bg-[#6a6f73]' style={{ width: "0%" }}></span>
                        </span>
                        <div className='flex justify-center'>
                            <MdOutlineStarPurple500 size={20} color='#b4690e' />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                            <MdOutlineStarPurple500 size={20} />
                        </div>
                        <span>0%</span>
                    </div>
                </div>
            </div>
            <h3 className='font-bold text-2xl text-black'>Đánh giá</h3>
        </div>
    )
}
