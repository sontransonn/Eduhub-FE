"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'

import { getLessons } from '@/api/instructor.api';
import { createLessonByLink } from '@/api/lesson.api';
import toast from 'react-hot-toast';

export default function Lessons() {
    const router = useRouter()
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lessonData, setLessonData] = useState({ lessonName: '', lessonContent: '' });
    const [activeTab, setActiveTab] = useState<'link' | 'upload'>('link');
    const [listLesson, setListLesson] = useState<any[]>([])

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("body-no-scroll");
        } else {
            document.body.classList.remove("body-no-scroll");
        }

        return () => {
            document.body.classList.remove("body-no-scroll");
        };
    }, [isModalOpen]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getLessons(id)
                setListLesson(data)
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setLessonData({ lessonName: '', lessonContent: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLessonData({ ...lessonData, [name]: value });
    };

    const handleSave = async () => {
        if (!lessonData.lessonName.trim()) {
            alert('Vui lòng nhập tiêu đề!');
            return;
        }

        try {
            const data = await createLessonByLink(id, lessonData)
            toast.success(data.message)
            if (data?.video) {
                setListLesson((prev) => ([...prev, data.video]));
            } else {
                console.error("Video not found in data");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('Failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('Failed with an unknown error');
            }
        }
        closeModal();
    };

    return (
        <>
            <h1 className='text-lg font-semibold border-b border-solid border-[#3333] p-4'>Danh sách bài học</h1>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {listLesson.length > 0 && (
                    <div className='flex scrollable flex-col gap-4 max-h-[450px] overflow-scroll'>
                        {listLesson.map((lesson: { lessonName: string, lessonContent: string }, index) => (
                            <div className='flex' key={index}>
                                <div className='md:basis-3/4 flex gap-2.5 items-center'>
                                    <img src="https://www.devteam.space/wp-content/uploads/2022/05/What-is-Ruby.jpg" alt="" className='w-40 rounded-sm' />
                                    <div className='flex flex-col self-stretch justify-between'>
                                        <span className='font-medium'>{index + 1}. {lesson.lessonName}</span>
                                        <span className='text-xs text-gray-400'> phần mềm bằng Redmine.</span>
                                    </div>
                                </div>
                                <div className='md:basis-1/4 md:flex hidden gap-8 items-center justify-end'>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                        <FaEdit />
                                        Sửa
                                    </button>
                                    <button className="flex items-center gap-2 text-red-600 hover:text-red-800">
                                        <FaTrashAlt />
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button className="flex self-start w-40 items-center justify-between bg-purple-800 text-white px-4 py-2 rounded-sm hover:bg-purple-900" onClick={openModal}>
                    <FaPlusCircle />
                    Thêm bài học
                </button>
            </div>
            {isModalOpen && (
                <>
                    <div className="overlay"></div>
                    <div className="fixed inset-0 px-4 flex items-center justify-center z-[5000]">
                        <div className="bg-white rounded-sm shadow-lg w-full max-w-xl">
                            <div className="flex justify-between items-center p-4 border-b border-solid border-[#3333]">
                                <h2 className="text-xl font-semibold">Cập nhật bài học</h2>
                                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                    &times;
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 px-4 py-6 text-sm">
                                <div className='flex flex-col gap-1.5'>
                                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Tiêu đề *</label>
                                    <div className='relative'>
                                        <input
                                            type="text" name="lessonName"
                                            value={lessonData.lessonName}
                                            onChange={handleChange}
                                            maxLength={70} placeholder="Nhập tiêu đề"
                                            className="w-full border border-solid border-[#3333] outline-none p-2 pr-16 focus:outline-none focus:ring"
                                        />
                                        <span className="absolute top-1/2 transform -translate-y-1/2 mr-4 right-0 text-sm text-gray-500">{lessonData.lessonName.length}/70</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1.5'>
                                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Mô tả ngắn</label>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            maxLength={70} placeholder="Nhập mô tả"
                                            className="w-full border border-solid border-[#3333] outline-none p-2 pr-16 focus:outline-none focus:ring"
                                        />
                                        <span className="absolute top-1/2 transform -translate-y-1/2 mr-4 right-0 text-sm text-gray-500">{lessonData.lessonContent.length}/200</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <input type="checkbox" className='w-4 h-4' name="" id="" />
                                    <span className='text-sm font-medium'>Học thử miễn phí</span>
                                </div>
                                <div className='px-4 pb-7 pt-[18px] border border-solid border-[#3333]'>
                                    <div className='flex text-gray-700 gap-2.5 items-center border-b border-solid border-[#3333]'>
                                        <button className={`py-2.5 font-semibold ${activeTab === "link" ? "border-b-[2.5px] border-solid text-blue-600 border-blue-600" : ""} w-max`} onClick={() => setActiveTab("link")}>Nhập link Youtube/vimeo</button>
                                        <span className='text-gray-400'>hoặc</span>
                                        <button className={`py-2.5 font-semibold ${activeTab === "upload" ? "border-b-[2.5px] border-solid text-blue-600 border-blue-600" : ""} w-max`} onClick={() => setActiveTab("upload")}>Tải video lên</button>
                                    </div>
                                    <div className='pt-7'>
                                        <input
                                            type="text" name="lessonContent"
                                            value={lessonData.lessonContent}
                                            onChange={handleChange}
                                            placeholder='vd: https://www.youtube.com/watch?v=tALf6Vl0QuI'
                                            className='w-full border border-solid border-[#3333] outline-none p-2 focus:outline-none focus:ring bg-gray-50'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2.5 p-4 border-t border-solid border-[#3333] text-sm">
                                <button onClick={closeModal} className="bg-gray-300 font-medium text-black px-5 py-2 rounded-md hover:bg-gray-400">Hủy</button>
                                <button onClick={handleSave} className="bg-blue-600 font-medium hover:bg-blue-700 text-white px-5 py-2 rounded-md">Lưu bài học</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
