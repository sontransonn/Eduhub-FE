"use client"
import React from 'react'

import { MdArrowBackIos } from "react-icons/md";
import { FaFile } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;

const LearningHeader = () => {
    return (
        <div className='bg-[#292f3b] text-white'>
            <div className='h-14 px-4 py-2 flex justify-between items-center'>
                <div className='flex items-center gap-1.5'>
                    <MdArrowBackIos size={20} />
                    <span className='text-sm font-semibold'>
                        Xây Dựng Website với ReactJS
                    </span>
                </div>
                <ul className='flex gap-6 text-[13px] text-[#d6d6d8]'>
                    <li className='flex items-center gap-1.5'>
                        <div style={{ width: 25, height: 25 }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    textSize: '30px',
                                    textColor: '#ffff',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                        </div>
                        <span className='hidden lg:block'>47/118 bài học</span>
                    </li>
                    <li className='flex items-center gap-1.5 cursor-pointer'>
                        <FaFile size={16} />
                        <span className='hidden lg:block'>Ghi chú</span>
                    </li>
                    <li className='items-center gap-1.5 cursor-pointer hidden lg:flex'>
                        <FaQuestionCircle size={16} />
                        <span className=''>Hướng dẫn</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LearningHeader