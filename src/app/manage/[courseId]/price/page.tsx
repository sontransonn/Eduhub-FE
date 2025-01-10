"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { FaPlusCircle } from 'react-icons/fa';

import { getCourseByID, updateCourse } from '@/api/instructor.api';

export default function Price() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;

    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [courseUpdates, setCourseUpdates] = useState({
        price: 0,
        discount: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCourseByID(courseId)
                setCourseUpdates(prev => ({
                    ...prev,
                    price: data.price,
                    discount: data.discount
                }))
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCourseUpdates((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('courseUpdates', JSON.stringify(courseUpdates));
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
    }

    return (
        <>
            <h1 className='p-4 border-b border-solid border-[#3333] text-lg font-semibold'>Giá khóa học</h1>
            <div className='flex gap-4 p-4 flex-wrap'>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1.5'>
                        <span className='font-medium'>Giá gốc *</span>
                    </div>
                    <input
                        type="text" name='price'
                        defaultValue={0} onChange={handleInputChange}
                        value={courseUpdates.price}
                        className='outline-none border border-solid border-[#3333] px-3 py-2 focus:outline-none focus:ring'
                    />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1.5'>
                        <span className='font-medium'>Giảm giá *</span>
                    </div>
                    <input
                        type="text" name='discount'
                        defaultValue={0} onChange={handleInputChange}
                        value={courseUpdates.discount}
                        className='outline-none border border-solid border-[#3333] px-3 py-2 focus:outline-none focus:ring'
                    />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1.5'>
                        <span className='font-medium'>Giá bán *</span>
                    </div>
                    <input
                        type="text"
                        defaultValue={0}
                        className='outline-none border border-solid border-[#3333] px-3 py-2 focus:outline-none focus:ring'
                    />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1.5'>
                        <span className='font-medium'>Giá bán thấp nhất *</span>
                    </div>
                    <input
                        type="text"
                        defaultValue={0}
                        className='outline-none border border-solid border-[#3333] px-3 py-2 focus:outline-none focus:ring'
                    />
                </div>
                <button className="flex self-end w-40 items-center justify-between bg-purple-800 text-white px-3 border border-solid border-[#3333] py-2 rounded-sm hover:bg-purple-900" onClick={handleSubmit}>
                    <FaPlusCircle />
                    Lưu thông tin
                </button>
            </div>
        </>
    )
}
