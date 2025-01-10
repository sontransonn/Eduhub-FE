"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { RootState } from '@/store'

import { applyInstructor } from '@/api/user.api'

export default function TeacherForm() {
    const [formData, setFormData] = useState({
        title: "",
        linkFb: "",
        topic: "",
        experience: "",
        cv: null as File | null,
    });

    const { userInfo } = useSelector((state: RootState) => state.user)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({ ...prev, cv: file }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formPayload = new FormData();
        formPayload.append("title", formData.title);
        formPayload.append("linkFb", formData.linkFb);
        formPayload.append("topic", formData.topic);
        formPayload.append("experience", formData.experience);
        if (formData.cv) {
            formPayload.append("cv", formData.cv);
        }

        try {
            const data = await applyInstructor(formPayload);
            toast.success(data.message)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('failed with an unknown error');
            }
        }
    }

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                {userInfo?.role === "INSTRUCTOR" ? (
                    <div className="flex flex-col items-center justify-center gap-6 text-center bg-white p-8 rounded-sm shadow-md">
                        <img
                            src="https://www.educationcorner.com/wp-content/uploads/how-become-teacher-new.png"
                            alt="Bạn đã trở thành giảng viên"
                            className="w-32 h-32"
                        />
                        <h3 className="font-bold text-3xl text-green-600">Chúc mừng bạn!</h3>
                        <p className="text-lg text-gray-600">
                            Bạn đã chính thức trở thành giảng viên trên Eduhub. Hãy chia sẻ những kiến thức của bạn với cộng đồng ngay hôm nay!
                        </p>
                        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700" >
                            Quay lại trang chính
                        </Link>
                    </div>
                ) : (
                    <>
                        <h3 className='font-medium text-3xl text-center mb-6'>ĐĂNG KÝ GIẢNG VIÊN</h3>
                        <form className='flex flex-col gap-4 max-w-2xl mx-auto' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label>Họ tên</label>
                                    <input
                                        type="text" required
                                        className='p-2.5 border border-solid border-[#3333] outline-none text-sm'
                                        value={userInfo?.fullName} placeholder='Họ tên'
                                    />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label>Chức danh</label>
                                    <input
                                        type="text" name="title" required
                                        className='p-2.5 border border-solid border-[#3333] outline-none text-sm'
                                        placeholder='Chức danh'
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label>Số điện thoại</label>
                                    <input
                                        type="text" required
                                        className='p-2.5 border border-solid border-[#3333] outline-none text-sm'
                                        placeholder='Số điện thoại'
                                    />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label>Địa chỉ email</label>
                                    <input
                                        type="email" required
                                        className='p-2.5 border border-solid border-[#3333] outline-none text-sm'
                                        value={userInfo?.email}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Facebook</label>
                                <input
                                    type="text" name="linkFb" required
                                    className='p-2.5 border border-solid border-[#3333] outline-none text-sm'
                                    placeholder='Facebook của bạn'
                                    value={formData.linkFb}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Chủ đề</label>
                                <textarea
                                    name="topic" id=""
                                    className='p-2.5 border border-solid border-[#3333] outline-none'
                                    rows={2} placeholder='Chủ đề bạn muốn giảng dạy trên Eduhub'
                                    value={formData.topic}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Kinh nghiệm</label>
                                <textarea
                                    name="experience" id=""
                                    className='p-2.5 border border-solid border-[#3333] outline-none'
                                    rows={4} placeholder='Kinh nghiệm giảng dạy của bạn'
                                    value={formData.experience}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Tải CV lên</label>
                                <input
                                    type="file" required
                                    id="cv_upload" name="cv_upload"
                                    accept=".pdf, .doc, .docx" onChange={handleFileChange}
                                    className='p-2.5 border border-solid border-[#3333] outline-none bg-white text-sm file:bg-blue-500 file:text-white file:border-none file:px-4 file:py-2 file:rounded-sm hover:file:bg-blue-600 cursor-pointer'
                                />
                            </div>
                            <button type='submit' className='text-base p-2.5 self-center bg-blue-500 hover:bg-blue-600 rounded-sm text-white max-w-max'>Đăng ký ngay</button>
                        </form>
                    </>
                )}
            </div>
        </main>
    )
}
