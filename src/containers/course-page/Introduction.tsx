"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { CourseProps } from '@/types/course.type';

const Introduction = ({ currentCourse }: { currentCourse: CourseProps }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`leading-10 text-justify mark overflow-hidden ${isExpanded ? "h-auto" : "h-[150px]"}`}>
                {currentCourse.introduce}
            </div>
            <button onClick={toggleExpand} className="mt-4 font-normal" >
                {isExpanded ? (
                    <div className='flex items-center gap-1'>
                        Ẩn bớt
                        <MdKeyboardArrowUp size={24} />
                    </div>
                ) : (
                    <div className='flex items-center gap-1'>
                        Hiện thêm
                        <MdKeyboardArrowDown size={24} />
                    </div>
                )}
            </button>
        </>
    )
}

export default Introduction