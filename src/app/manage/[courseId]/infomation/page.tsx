"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';

import categories from '@/constants/categories';

import { FaPlusCircle } from 'react-icons/fa';

import { getCourseByID } from '@/api/instructor.api';
import { updateCourse } from '@/api/instructor.api';

export default function Infomation() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;

    const [updateTrigger, setUpdateTrigger] = useState(false);
    const [posterFile, setPosterFile] = useState<File | null>(null);
    const [courseUpdates, setCourseUpdates] = useState({
        courseName: "",
        description: "",
        introduce: "",
        category: "",
        subCategory: "",
        poster: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseByID(courseId)
            setCourseUpdates(prev => ({
                ...prev,
                courseName: data.courseName,
                description: data.description,
                introduce: data.introduce,
                category: data.category,
                subCategory: data.subCategory,
                poster: data.poster
            }))
        }
        fetchData()
    }, [courseId, updateTrigger])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCourseUpdates((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCourseUpdates((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setPosterFile(e.target.files[0]);
        } else {
            console.warn('No file selected');
        }
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('courseUpdates', JSON.stringify(courseUpdates));
            if (posterFile) {
                formData.append('poster', posterFile);
            }
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
            <h1 className='p-4 border-b border-solid border-[#3333] text-lg font-semibold'>Thông tin cơ bản</h1>
            <div className='flex flex-col gap-4 p-4'>
                <p>
                    Trang tổng quan của bạn rất quan trọng đối với thành công của bạn trên Eduhub. Nếu được thực hiện đúng trang này cũng có thể giúp bạn hiển thị
                    trong các công cụ tìm kiếm như Google. Khi bạn hoàn thành phần này, hãy nghĩ đến việc tạo trang Tổng quan khóa học hấp dẫn để mọi người muốn đăng ký học
                    tìm hiểu thêm về <span className='underline'>cách tạo trang tổng quan khóa học của bạn</span> và <span className='underline'>các tiêu chuẩn tiêu đề quan trọng</span>
                </p>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Tiêu đề khóa học <span className='text-red-600'>*</span></h5>
                    <input
                        type="text" name={"courseName"}
                        value={courseUpdates.courseName}
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring'
                        placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao'
                    />
                    <p className='text-sm'>Tiêu đề của bạn không những phải thu hút sự chú ý, chứa nhiều thông tin mà còn được tối ưu hóa để dễ tìm kiếm</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Tên khóa học (tiếng Anh, để cấp chứng chỉ)</h5>
                    <input
                        type="text"
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring'
                        placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Mô tả ngắn</h5>
                    <textarea
                        rows={5} name="description"
                        value={courseUpdates.description}
                        onChange={handleInputChange}
                        placeholder='Mô tả ngắn gọn về nội dung khóa học và những gì người học sẽ nhận được.'
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Thể loại</h5>
                    <div className='flex gap-5'>
                        <select
                            name="category"
                            value={courseUpdates.category}
                            onChange={handleSelectChange}
                            className='w-full max-w-60 px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring custom-select-arrow'
                        >
                            <option value="">Chọn danh mục</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.slug}>{category.title}</option>
                            ))}
                        </select>
                        {courseUpdates.category && (
                            <select
                                name="subCategory"
                                value={courseUpdates.subCategory}
                                onChange={handleSelectChange}
                                className='w-full max-w-60 px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring custom-select-arrow'
                            >
                                <option value="">Chọn danh mục con</option>
                                {categories
                                    .find(category => category.slug === courseUpdates.category)?.subCategories
                                    .map((subCategory, index) => (
                                        <option key={index} value={subCategory.slug}>{subCategory.title}</option>
                                    ))
                                }
                            </select>
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Giới thiệu khóa học</h5>
                    <textarea
                        rows={5} name='introduce'
                        value={courseUpdates.introduce}
                        onChange={handleInputChange}
                        placeholder='Giới thiệu chi tiết về khóa học, đối tượng học viên, mục tiêu và nội dung chính của khóa học.'
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333] focus:outline-none focus:ring '
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Ảnh khóa học</h5>
                    <div className='grid grid-cols-2 gap-4'>
                        {courseUpdates?.poster ? (
                            <img src={courseUpdates.poster} alt=''></img>
                        ) : (
                            <div className='flex justify-center items-center h-[250px] bg-[#cccccc] col-span-1'>
                                <span className='text-xl font-medium text-[#a5a5a5]'>800 x 450</span>
                            </div>
                        )}
                        <div className='col-span-1 flex flex-col gap-4'>
                            <p>
                                Tải hình ảnh khóa học lên tại đây. Để được chấp nhận, hình ảnh phải đáp ứng tiêu chuẩn chất lượng hình ảnh khóa học.
                                Hướng dẫn quan trọng: 800x450 pixel; .jpg; .jpeg; .gif; .png và không có chữ trên hình ảnh.
                            </p>
                            <input
                                type="file" required accept="image/*"
                                onChange={handleFileChange}
                                className='border border-solid border-[#3333] outline-none bg-white text-sm file:bg-blue-500 file:text-white file:border-none file:px-4 file:py-2 hover:file:bg-blue-600 cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
                <button className="flex self-start w-40 items-center justify-between bg-purple-800 text-white px-4 py-2 rounded-sm hover:bg-purple-900" onClick={handleSubmit}>
                    <FaPlusCircle />
                    Lưu thông tin
                </button>
            </div>
        </>
    )
}
