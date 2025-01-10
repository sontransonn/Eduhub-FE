import React, { useState } from 'react'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { CourseProps } from '@/types/course.type';

export default function Introduction({ currentCourse }: { currentCourse: CourseProps }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const introduceText = currentCourse.introduce || "Chưa có thông tin giới thiệu"; // Nếu không có dữ liệu, hiển thị thông báo mặc định

    const hasIntroduction = currentCourse.introduce && currentCourse.introduce !== ""; // Kiểm tra xem có thông tin giới thiệu hay không

    return (
        <div>
            <div className={`leading-10 relative text-justify mark overflow-hidden ${isExpanded ? "min-h-[150px] h-auto" : "max-h-[150px]"} transition-all duration-300`}>
                <p>
                    {introduceText}
                </p>
                {hasIntroduction && !isExpanded && (  // Chỉ hiển thị gradient khi có giới thiệu và chưa mở rộng
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f1f5f8] to-transparent pointer-events-none"></div>
                )}
            </div>

            {hasIntroduction && introduceText !== "Chưa có thông tin giới thiệu" && (  // Chỉ hiển thị nút nếu có thông tin giới thiệu
                <button onClick={toggleExpand} className="mt-2 font-normal" >
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
            )}
        </div>
    )
}
