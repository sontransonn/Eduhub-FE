"use client"
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { GrClose } from "react-icons/gr";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import OverviewTab from '@/containers/learning-page/OverviewTab';
import DocumentTab from '@/containers/learning-page/DocumentTab';
import EvaluateTab from '@/containers/learning-page/EvaluateTab';
import DiscussTab from '@/containers/learning-page/DiscussTab';
import CertificateTab from '@/containers/learning-page/CertificateTab';

import { getLessonByID } from '@/api/lesson.api';

export default function LearningPage() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const slug = pathname?.split('/')[2];
    const id = searchParams.get('id');

    const [activeTab, setActiveTab] = useState('overview');
    const [data, setData] = useState({
        courseId: { courseName: "" },
        lessonContent: "",
        lessonName: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    console.error('ID is missing');
                    return;
                }
                const data = await getLessonByID(slug, id);
                setData(data)
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
        fetchData()
    }, [])

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab />
            case 'discuss':
                return <DiscussTab />
            case 'document':
                return <DocumentTab />
            case 'evaluate':
                return <EvaluateTab />
            case 'downloadCertification':
                return <CertificateTab />
        }
    };

    return (
        <>
            <header className='sticky z-30 top-0 bg-[#1782FB] shadow-2xl text-white'>
                <div className='py-4 px-6'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <Link href={"/"} className='block rounded-full bg-[#F48729] h-[38px] w-[38px]'>
                                <div className='text-2xl text-white font-bold flex justify-center items-center w-[38px] h-full'>
                                    E
                                </div>
                            </Link>
                            <div className='ms-4 text-lg font-medium line-clamp-1'>{data?.courseId?.courseName}</div>
                        </div>
                        <div className='md:flex hidden gap-4 items-center'>

                            <button className='flex items-center justify-center'>
                                Tiến độ của bạn
                                <MdKeyboardArrowDown className='w-5 h-5' />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className='relative lg:grid lg:grid-cols-4'>
                <div className='relative col-span-3'>
                    <div className='bg-[#002333] overflow-hidden'>
                        <div className='max-w-5xl mx-auto md:px-10 px-0'>
                            <div className="video relative" style={{ aspectRatio: "16/9" }}>
                                <ReactPlayer
                                    url={data?.lessonContent}
                                    controls
                                    width="100%"
                                    height="100%"
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F1F5F8] overflow-hidden'>
                        <div className='max-w-5xl mx-auto md:px-10 pt-5'>
                            <div className='mb-6 lg:flex justify-between'>
                                <div className='flex gap-1.5 text-right'>
                                    <button className='px-2 py-1 font-light rounded bg-slate-800 text-white'>Server 1</button>
                                    <button className='bg-gray-200 px-2 py-1 font-light rounded'>Server 2</button>
                                </div>
                                <div className='flex lg:gap-2 gap-1 justify-end lg:text-base text-sm'>
                                    <button className='bg-gray-200 flex gap-1 items-center px-2 py-1 font-light rounded hover:bg-gray-400'>
                                        <PiWarningCircleBold size={18} />
                                        Báo lỗi
                                    </button>
                                    <button className='bg-gray-200 px-2 py-1 font-light rounded flex items-center'>
                                        Autoplay
                                    </button>
                                    <Link href={"/"} className='bg-gray-200 px-2 py-1 font-light rounded flex items-center gap-1.5 hover:bg-gray-400'>
                                        <IoIosArrowBack />
                                        Bài trước
                                    </Link>
                                    <Link href={"/"} className='bg-sky-600 px-2 py-1 font-light rounded flex items-center text-white gap-1.5 hover:bg-sky-800'>
                                        Bài sau
                                        <IoIosArrowForward />
                                    </Link>
                                </div>
                            </div>
                            <div className='text-xl font-semibold'>{data?.lessonName}</div>
                            <ul className='flex gap-4 mt-4 border-b border-gray-300 text-gray-400 text-sm lg:text-base'>
                                <li className={`${activeTab == "overview" && "border-b-2 border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('overview')}>Tổng quan</li>
                                <li className={`${activeTab == "discuss" && "border-b-2 border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('discuss')}>Thảo luận</li>
                                <li className={`${activeTab == "document" && "border-b-2 border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('document')}>Tài liệu</li>
                                <li className={`${activeTab == "evaluate" && "border-b-2 border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('evaluate')}>Đánh giá</li>
                                <li className={`${activeTab == "downloadCertification" && "border-b-2 border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('downloadCertification')}>Tải chứng nhận</li>
                            </ul>
                            {renderContent()}
                        </div>
                    </div>
                </div>

                <div className='lg:block hidden relative col-span-1'>
                    <div className='sticky top-16 overflow-y-auto h-[calc(100vh-70px)]'>
                        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
                            <h3 className='text-xl font-semibold text-gray-900'>Nội dung khóa học</h3>
                            <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'>
                                <GrClose size={18} />
                            </button>
                        </div>
                        <ul className="h-full border-none bg-white">
                            <li className='px-4 text-sm py-2 flex gap-2 items-center bg-gray-400'>
                                <FaPlayCircle size={16} />
                                <FaCheckCircle size={16} />
                                <p className='flex-1 break-words'>{data.lessonName}</p>
                                <span>12:06</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}


