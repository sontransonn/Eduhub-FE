"use client"
import React from 'react'

import { FaNotesMedical } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;

const LearningHeader = () => {
    return (
        <div className='bg-[#003555] text-white'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <span className='text-sm'>Xây Dựng Website với ReactJS</span>
                </div>
                <ul className='flex gap-6 text-sm'>
                    <li className='flex items-center gap-1.5'>
                        <div style={{ width: 32, height: 32 }}>
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
                        <FaNotesMedical size={20} />
                        <span className='hidden lg:block'>Ghi chú</span>
                    </li>
                    <li className='items-center gap-1.5 cursor-pointer hidden lg:flex'>
                        <FaQuestionCircle size={20} />
                        <span className=''>Hướng dẫn</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LearningHeader