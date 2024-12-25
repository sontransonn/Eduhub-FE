"use client"
import React, { useState } from 'react'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { CourseProps } from '@/types/course.type';

export default function Introduction({ currentCourse }: { currentCourse: CourseProps }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className={`leading-10 relative text-justify mark overflow-hidden ${isExpanded ? "min-h-[150px] h-auto" : "h-[150px]"}`}>
                <p>
                    Khi bạn thực hiện làm dự án phần mềm với nhóm thì chúng ta cần phải có một hệ thống quản trị công việc. Để đáp ứng được nhu cầu này thì chúng ta có thể có một số lựa chọn các phần mềm quản trị như: Atlassian.com; Clickup.com;  Asana.com; Monday.com; Trello.com. Các hệ thống này thường sẽ cho bạn free với số lượng account nhất định, hoặc giới hạn tính năng, chứ không hỗ trợ nhiều nếu version bạn dùng không phải là trả phí. Trong tất cả các lựa chọn trên thì Redmine là một trong những lựa chọn đáng cân nhắc vì:

                    Redmine open source và có nhiều plugin miễn phí
                    Dễ dàng tích hợp với slack và các hệ thống khác như git, svn, etc.
                    Có thể tùy chỉnh hệ thống theo nhiều cách thống kế khác nhau
                    Có API hỗ trợ trong quá trình import/export task để thống kê vào google sheet/excel
                    Phân quyền, tạo query truy vấn task cho nhiều role khác nhau. Hiện mình đã setup nhiều hệ thống quản lý cho nhiều công ty phần mềm bằng Redmine, tích hợp với slack, git, svn. Quy mô từ (10 người đến 150 người).
                    Tất cả các services (dịch vụ) được dùng hoàn toàn miễn phí. Với các doanh nghiệp vừa và nhỏ liên quan lĩnh vực phần mềm luôn có nhu cần cần một hệ thống quản lý dự án bao gồm các thông tin:
                    {/* {currentCourse.introduce} */}
                </p>
                {!isExpanded && (<div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f1f5f8] to-transparent pointer-events-none"></div>)}
            </div>

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
        </div>
    )
}
