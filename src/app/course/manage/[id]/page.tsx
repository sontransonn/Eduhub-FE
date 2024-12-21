"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import Infomation from '@/containers/course-page/manage/Infomation';
import Price from '@/containers/course-page/manage/Price';

import { getCourseByID } from '@/api/instructor.api';
import { updateCourse } from '@/api/instructor.api';

const tabTitles = {
    target: "Mục tiêu khóa học",
    infomation: "Thông tin cơ bản",
    lessons: "Danh sách bài học",
    document: "Tài liệu và quà tặng",
    price: "Giá khóa học",
} as const;

type TabKey = keyof typeof tabTitles;

export default function ManageCourse() {
    const router = useRouter()
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [activeTab, setActiveTab] = useState<TabKey>('target');
    const [posterFile, setPosterFile] = useState<File | null>(null);
    const [courseUpdates, setCourseUpdates] = useState({
        courseName: '',
        description: '',
        introduce: '',
        price: '',
        video: '',
        category: '',
        slug: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseByID(id)
            setCourseUpdates({
                courseName: data.courseName,
                description: data.description,
                introduce: data.introduce,
                price: data.price,
                video: data.video,
                category: data.category,
                slug: data.slug
            })
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setPosterFile(e.target.files[0]);
        } else {
            console.warn('No file selected');
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'target':
                return <></>
            case 'infomation':
                return <Infomation courseUpdates={courseUpdates} handleInputChange={handleInputChange} handleFileChange={handleFileChange} />
            case 'lessons':
                return <></>
            case 'document':
                return <></>
            case 'price':
                return <Price />
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
            const courseId = Array.isArray(id) ? id[0] : id;
            const data = await updateCourse(formData, courseId);
            toast.success(data.message)
            router.push("/")
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
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:py-8'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 flex flex-col gap-8'>
                        <ul className='text-lg font-medium flex flex-col'>
                            <li className='flex justify-between py-3 cursor-pointer hover:bg-gray-300 rounded-sm' onClick={() => setActiveTab('target')}>
                                <span className='flex-shrink-0'>Mục tiêu khóa học</span>
                                {activeTab == "target" && <div className='h-full bg-blue-500 w-[4px]'></div>}
                            </li>
                            <li className='flex justify-between py-3 cursor-pointer hover:bg-gray-300 rounded-sm' onClick={() => setActiveTab('infomation')}>
                                <span className='flex-shrink-0'>Thông tin cơ bản</span>
                                {activeTab == "infomation" && <div className='h-full bg-blue-500 w-[4px]'></div>}
                            </li>
                            <li className='flex justify-between py-3 cursor-pointer hover:bg-gray-300 rounded-sm' onClick={() => setActiveTab('lessons')}>
                                <span className='flex-shrink-0'>Danh sách bài học</span>
                                {activeTab == "lessons" && <div className='h-full bg-blue-500 w-[4px]'></div>}
                            </li>
                            <li className='flex justify-between py-3 cursor-pointer hover:bg-gray-300 rounded-sm' onClick={() => setActiveTab('document')}>
                                <span className='flex-shrink-0'>Tài liệu và quà tặng</span>
                                {activeTab == "document" && <div className='h-full bg-blue-500 w-[4px]'></div>}
                            </li>
                            <li className='flex justify-between py-3 cursor-pointer hover:bg-gray-300 rounded-sm' onClick={() => setActiveTab('price')}>
                                <span className='flex-shrink-0'>Giá khóa học</span>
                                {activeTab == "price" && <div className='h-full bg-blue-500 w-[4px]'></div>}
                            </li>
                        </ul>
                        <button className='bg-blue-500 hover:bg-blue-600 rounded-sm py-2 text-white font-semibold'>Gửi duyệt</button>
                    </div>
                    <div className='col-span-9 flex flex-col justify-between border border-solid border-[#3333]'>
                        <div>
                            <h1 className='py-4 px-5 border-b border-solid border-[#3333] text-lg font-semibold'>
                                {tabTitles[activeTab]}
                            </h1>
                            {renderContent()}
                        </div>
                        <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-600 py-2 text-white font-semibold'>Cập nhật khóa học</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
