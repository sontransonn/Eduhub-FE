"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { FaFile } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosSwitch } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import OverviewTab from '@/app/learning/components/OverviewTab';
import DocumentTab from '@/app/learning/components/DocumentTab';
import EvaluateTab from '@/app/learning/components/EvaluateTab';
import DiscussTab from '@/app/learning/components/DiscussTab';
import CertificateTab from '@/app/learning/components/CertificateTab';

import { getLessonByID, getInfoCourse } from '@/api/lesson.api';

interface Course {
    _id: string
    courseName: string;
    introduce: string
    description: string;
    videos: [{ _id: string, lessonName: string }]
    poster: string
    approvedBy: { _id: string, avatar: string }
}

const percentage = 66;

export default function LearningPage() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const courseSlug = pathname?.split('/')[2];
    const lessonId = searchParams.get('id');

    const [activeTab, setActiveTab] = useState('overview');
    const [infoCourse, setInfoCourse] = useState<Course | null>(null);
    const [currentLesson, setCurrentLesson] = useState({
        lessonName: '',
        lessonContent: ''
    })

    useEffect(() => {
        const fetchCourseInfo = async () => {
            try {
                if (!courseSlug) {
                    console.error('Course slug is missing!');
                    return;
                }
                const dataCourse = await getInfoCourse(courseSlug);
                setInfoCourse(dataCourse);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    console.error('Failed to fetch course info:', error.message);
                } else {
                    toast.error('An unknown error occurred while fetching course info');
                    console.error('Failed to fetch course info with an unknown error');
                }
            }
        }
        fetchCourseInfo();
    }, [courseSlug, pathname, searchParams]);

    useEffect(() => {
        if (!lessonId || !courseSlug) {
            console.error('Lesson ID or Course Slug is missing!');
            return;
        }
        const fetchLesson = async () => {
            try {
                const dataLesson = await getLessonByID(courseSlug, lessonId);
                setCurrentLesson({
                    lessonName: dataLesson?.lessonName || '',
                    lessonContent: dataLesson?.lessonContent || '',
                });
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    console.error('Failed to fetch lesson:', error.message);
                } else {
                    toast.error('An unknown error occurred while fetching lesson');
                    console.error('Failed to fetch lesson with an unknown error');
                }
            }
        };
        fetchLesson();
    }, [lessonId, courseSlug, pathname, searchParams])

    const renderContent = useCallback(() => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab avatar={infoCourse?.approvedBy.avatar || ""} introduce={infoCourse?.introduce || ""} />;
            case 'discuss':
                return <DiscussTab courseId={infoCourse?._id || ""} />;
            case 'document':
                return <DocumentTab courseId={infoCourse?._id || ''} />;
            case 'evaluate':
                return <EvaluateTab />;
            case 'downloadCertification':
                return <CertificateTab />;
            default:
                return null;
        }
    }, [activeTab, infoCourse]);

    const convertToEmbedUrl = (url: string) => {
        const videoId = new URL(url).searchParams.get('v');
        const list = new URL(url).searchParams.get('list');
        const index = new URL(url).searchParams.get('index');
        return `https://www.youtube.com/embed/${videoId}?list=${list}&index=${index}`;
    };

    return (
        <>
            <header className='sticky z-30 top-0 bg-[#1782FB] shadow-2xl text-white'>
                <div className='py-4 px-6'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <Link href={"/"} className='block rounded-full bg-[#F48729] h-[38px] w-[38px]'>
                                <div className='text-2xl text-white font-bold flex justify-center items-center w-[38px] h-full'>
                                    E6
                                </div>
                            </Link>
                            <div className='ms-4 text-lg font-medium line-clamp-1'>{infoCourse?.courseName}</div>
                        </div>
                        <div className='md:flex hidden gap-6 items-center'>
                            <div className='flex gap-1.5 items-center justify-center cursor-pointer'>
                                <div style={{ width: 38, height: 38 }}>
                                    <CircularProgressbar
                                        minValue={0} value={percentage} text={`${percentage}%`} strokeWidth={12}
                                        styles={buildStyles({
                                            rotation: 0.25,
                                            strokeLinecap: 'butt',
                                            textSize: '28px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                            textColor: '#ffff',
                                            trailColor: '#F48729',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>
                                <span>2/{infoCourse?.videos.length} bài học</span>
                            </div>
                            <div className='flex gap-1.5 items-center justify-center cursor-pointer'>
                                <FaFile />
                                Ghi chú
                            </div>
                            <div className='flex gap-1.5 items-center justify-center cursor-pointer'>
                                <FaCircleQuestion />
                                Hướng dẫn
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className='relative lg:grid lg:grid-cols-4'>
                <div className='relative col-span-3'>
                    <div className='bg-[#002333] overflow-hidden'>
                        <div className='max-w-5xl mx-auto md:px-10 px-0'>
                            <div className="video relative" style={{ aspectRatio: "16/9" }}>
                                <iframe
                                    src={currentLesson.lessonContent && convertToEmbedUrl(currentLesson?.lessonContent)}
                                    width='100%'
                                    height='100%'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    style={{ position: 'absolute', top: 0, left: 0 }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F1F5F8] overflow-hidden'>
                        <div className='max-w-5xl mx-auto md:px-10 pt-5'>
                            <div className='mb-6 lg:flex justify-between'>
                                <div className='flex gap-1.5 text-right'>
                                    <button className='px-2 py-1 font-light rounded bg-blue-600 hover:bg-blue-700 text-white'>Server 1</button>
                                    <button className='bg-gray-200 hover:bg-gray-300 px-2 py-1 font-light rounded'>Server 2</button>
                                </div>
                                <div className='flex lg:gap-2 gap-1 justify-end lg:text-base text-sm'>
                                    <button className='bg-gray-200 px-2 py-1 font-light rounded flex items-center gap-1.5 hover:bg-gray-300'>
                                        Báo lỗi
                                    </button>
                                    <button className='bg-gray-200 px-2 py-1 font-light rounded flex items-center gap-1.5 hover:bg-gray-300'>
                                        Autoplay
                                    </button>
                                    <Link href={"/"} className='bg-gray-200 px-2 py-1 font-light rounded flex items-center gap-1.5 hover:bg-gray-300'>
                                        <IoIosArrowBack />
                                        Bài trước
                                    </Link>
                                    <Link href={"/"} className='bg-blue-600 hover:bg-blue-700 px-2 py-1 font-light rounded flex items-center text-white gap-1.5'>
                                        Bài sau
                                        <IoIosArrowForward />
                                    </Link>
                                </div>
                            </div>
                            <div className='text-xl font-semibold'>{currentLesson?.lessonName}</div>
                            <ul className='flex gap-4 mt-4 border-b border-gray-300 text-gray-400 text-sm lg:text-base'>
                                <li className={`${activeTab == "overview" && "border-b-[2.5px] border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('overview')}>Tổng quan</li>
                                <li className={`${activeTab == "discuss" && "border-b-[2.5px] border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('discuss')}>Thảo luận</li>
                                <li className={`${activeTab == "document" && "border-b-[2.5px] border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('document')}>Tài liệu</li>
                                <li className={`${activeTab == "evaluate" && "border-b-[2.5px] border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('evaluate')}>Đánh giá</li>
                                <li className={`${activeTab == "downloadCertification" && "border-b-[2.5px] border-black text-black"} cursor-pointer hover:text-black font-semibold py-2`} onClick={() => setActiveTab('downloadCertification')}>Tải chứng nhận</li>
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
                        <div className="border-none bg-white">
                            {infoCourse?.videos.map((lesson, index) => (
                                <Link href={`/learning/${courseSlug}/?id=${lesson._id}`} className={`px-4 py-2 text-sm flex gap-2 cursor-pointer ${lessonId === lesson._id ? "bg-gray-400" : ""}`} key={index}>
                                    <img src={infoCourse?.poster} alt="" className='w-28' />
                                    <div className='flex flex-col justify-between'>
                                        <p className='break-words font-medium'>
                                            {lesson.lessonName.length > 20 ? lesson.lessonName.slice(0, 40) + "..." : lesson.lessonName}
                                        </p>
                                        <span className='break-words font-medium text-xs'>12:06</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


