"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

import { AiFillDelete } from "react-icons/ai";
import { FaPlusCircle } from 'react-icons/fa';
import { FaRegSquarePlus } from "react-icons/fa6";

import { getCourseByID, updateCourse } from '@/api/instructor.api';

export default function Target() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;

    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [goals, setGoals] = useState([
        "Ví dụ: Xác định mục tiêu và quản lý công việc",
        "Ví dụ: Dự tính ngân sách và tiến độ",
        "Ví dụ: Quản lý chất lượng dự án",
        "Ví dụ: Nâng cao hiệu quả công việc với phương pháp quản lý đội nhóm",
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCourseByID(courseId)
                if (data.target?.length > 0) {
                    setGoals(data.target)
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [courseId, updateTrigger])

    const handleAddGoal = () => {
        setGoals([...goals, ""]);
    };

    const handleDeleteGoal = (index: number) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    const handleChangeGoal = (index: number, value: string) => {
        const updatedGoals = goals.map((goal, i) => (i === index ? value : goal));
        setGoals(updatedGoals);
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('courseUpdates', JSON.stringify({ target: goals }));
            await updateCourse(formData, courseId);
            toast.success("Cập nhật khóa học thành công!")
            setUpdateTrigger(!updateTrigger);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('Failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('Failed with an unknown error');
            }
        }
    };

    return (
        <>
            <h1 className='p-4 border-b border-solid border-[#3333] text-lg font-semibold'>Mục tiêu khóa học</h1>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className='flex flex-col gap-2.5'>
                    <h4 className='font-medium text-lg'>Học viên sẽ học được gì trong khóa học của bạn?</h4>
                    <p className='text-sm'>Bạn phải nhập ít nhất 4 mục tiêu hoặc kết quả học tập mà học viên có thể mong đợi đạt được sau khi hoàn thành khóa học.</p>
                    <div className="flex flex-col gap-2.5">
                        {goals.map((goal, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <input
                                    type="text"
                                    value={goal}
                                    onChange={(e) => handleChangeGoal(index, e.target.value)}
                                    placeholder={`Nhập mục tiêu thứ ${index + 1}`}
                                    className="flex-1 px-3 py-2 border border-solid border-[#3333] focus:outline-none focus:ring"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleDeleteGoal(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <AiFillDelete size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={handleAddGoal} className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium">
                        <FaRegSquarePlus size={20} />
                        Thêm nội dung
                    </button>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <h4 className='font-medium text-lg'>Khóa học này dành cho đối tượng nào?</h4>
                    <p className='text-sm'>Viết mô tả rõ ràng về học viên mục tiêu cho khóa học, tức là những người sẽ thấy nội dung khóa học có giá trị. Điều này sẽ giúp bạn thu hút học viên phù hợp tham gia khóa học.</p>
                    <textarea
                        rows={5}
                        name='introduce'
                        placeholder='Ví dụ: Những người đang kinh doanh online,...'
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring '
                    />
                </div>
                <div className='flex flex-col gap-2.5'>
                    <h4 className='font-medium text-lg'>Chào mừng học viên tham gia lớp học</h4>
                    <p className='text-sm'>Viết lời chào mừng khi học viên bắt đầu vào học, các lưu ý khi tham gia học, kèm lời chúc học tập hiệu quả!</p>
                    <textarea
                        rows={5}
                        name='introduce'
                        placeholder='Ví dụ: Chào mừng các bạn đến với khóa...'
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring '
                    />
                </div>
                <button onClick={handleSubmit} className="flex self-start w-40 items-center justify-between bg-purple-800 text-white px-4 py-2 rounded-sm hover:bg-purple-900">
                    <FaPlusCircle />
                    Lưu thông tin
                </button>
            </div>
        </>
    );
}
