"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Joyride from "react-joyride";

import { IoIosArrowBack } from "react-icons/io";
import { HiArrowSmRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import small from "@/public/logo/small.png"

const percentage = 15;

const steps = [
    {
        target: "body",
        content: "Chào cậu! Mình là Miu - hướng dẫn viên tại F8, mình sẽ đưa cậu đi thăm quan và giới thiệu cho cậu hiểu rõ hơn về F8 nhé. Đi thôi!",
        placement: 'center',
    },
    {
        target: ".video",
        content: "Đây là khu vực trung tâm màn hình, nơi bạn xem video.",
        placement: 'right',
    },
    {
        target: ".content",
        content: "Tiếp theo là khu vực quan trọng không kém, đây là danh sách các bài học tại khóa này. Cậu sẽ rất thường xuyên tương tác tại đây để chuyển bài học và làm bài tập đấy >_<",
        placement: 'left',
    },
    {
        target: ".comment",
        content: "Và đây là khu vực dành cho việc hỏi đáp, trao đổi trong mỗi bài học. Nếu có bài học nào hay thì cậu bình luận một lời động viên vào đây cũng được nhé. Miu sẽ rất vui và cảm thấy biết ơn đấy <3",
        placement: 'top',
    },
];

export default function LearningPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(true)
    const [run, setRun] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleStartTour = () => {
        setRun(false); // Đặt run về false
        setTimeout(() => {
            setRun(true); // Sau một thời gian ngắn, set lại run thành true để bắt đầu tour lại
        }, 100); // Đặt delay ngắn để đảm bảo tour bắt đầu lại
    };

    return (
        <>
            <header className='bg-[#292f3b] text-white'>
                <div className='flex items-center text-sm'>
                    <div className='h-[50px] w-[60px] flex cursor-pointer'>
                        <IoIosArrowBack size={20} className='m-auto' />
                    </div>
                    <Link href={"/"} className='hidden md:block'>
                        <Image src={small} alt="" width={30} height={30} className='rounded-lg' />
                    </Link>
                    <span className='text-sm md:ml-5 font-bold'>
                        HTML CSS từ Zero đến Hero
                    </span>
                    <ul className='flex flex-1 items-center justify-end gap-6 text-[#d6d6d8] mr-5'>
                        <li className='flex items-center gap-1.5'>
                            <div style={{ width: 34, height: 34 }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={6}
                                    styles={buildStyles({
                                        textSize: '30px',
                                        textColor: '#ffff',
                                        trailColor: `#4d4f50`,
                                        pathColor: '#f05123'
                                    })}
                                />
                            </div>
                            <span className='hidden lg:block text-xs'><span className='font-semibold'>47/118</span> bài học</span>
                        </li>
                        <li className='flex items-center gap-1.5 cursor-pointer'>
                            <FaFile size={14} />
                            <span className='hidden lg:block'>Ghi chú</span>
                        </li>
                        <li className='items-center gap-1.5 cursor-pointer hidden lg:flex' onClick={handleStartTour}>
                            <FaQuestionCircle size={14} />
                            <span className=''>Hướng dẫn</span>
                        </li>
                    </ul>
                </div>
            </header>

            <Joyride
                steps={steps}
                run={run}
                continuous
                showSkipButton
                showProgress
                disableScrolling={true}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />

            <main className='flex bg-[#f1f5f8] h-[calc(100vh-100px)]'>
                <div className={`${showMenu ? "lg:w-3/4 w-full" : "w-full"} relative h-full flex flex-col`}>
                    <div className='h-full overflow-y-scroll video-scroll'>
                        <div className='bg-black overflow-hidden'>
                            <div className='max-w-6xl md:px-20 mx-auto'>
                                <div className="video relative" style={{ aspectRatio: "16/9" }}>
                                    <ReactPlayer
                                        url='https://www.youtube.com/watch?v=zwsPND378OQ&embeds_referring_euri=https%3A%2F%2Ffullstack.edu.vn%2F&embeds_referring_origin=https%3A%2F%2Ffullstack.edu.vn&source_ve_path=MjM4NTE'
                                        controls
                                        width="100%"
                                        height="100%"
                                        style={{ position: "absolute", top: 0, left: 0 }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col max-w-6xl md:px-20 md:py-12 mx-auto px-4 py-6 gap-12'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex md:flex-row flex-col justify-between md:items-center items-start gap-4 flex-shrink-0'>
                                    <h3 className='text-2xl font-semibold md:w-2/3 w-full break-words'>Xây Dựng Website với ReactJS</h3>
                                    <span className='text-[13px] md:hidden'>Cập nhật tháng 5 năm 2022</span>
                                    <button className='bg-[#ebebeb] rounded-sm flex items-center gap-2 py-3 px-4 text-sm flex-shrink-0 shadow-custom'>
                                        <FaPlus className='font-semibold' />
                                        <span className='text-sm'>Thêm ghi chú tại <span className='font-semibold'>00:00</span></span>
                                    </button>
                                </div>
                                <span className='text-[13px] hidden md:inline-block'>Cập nhật tháng 5 năm 2022</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h4 className=''>Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem Eduhub sắp có gì mới nhé!</h4>
                                <ul className='flex flex-col gap-2 list-disc list-inside'>
                                    <li>
                                        <span>Fanpage:{" "}</span>
                                        <a href="" className='text-orange-600 underline'>https://www.facebook.com/f8vnofficial</a>
                                    </li>
                                    <li>
                                        <span>Group:{" "}</span>
                                        <a href="" className='text-orange-600 underline'>https://www.facebook.com/f8vnofficial</a>
                                    </li>
                                    <li>
                                        <span>Youtube:{" "}</span>
                                        <a href="" className='text-orange-600 underline'>https://www.facebook.com/f8vnofficial</a>
                                    </li>
                                    <li>
                                        <span>Eduhub:{" "}</span>
                                        <a href="" className='text-orange-600 underline'>https://www.facebook.com/f8vnofficial</a>
                                    </li>
                                </ul>
                            </div>

                            <span className='flex justify-center items-center gap-1 text-sm text-[#8c8c8c]'>
                                Made with <FaHeart className='inline-block' color='#d83965' /> · Powered by Eduhub
                            </span>
                        </div>
                    </div>

                    <Drawer direction='right'>
                        <DrawerTrigger>
                            <button className='comment absolute bottom-5 right-5 shadow-customB rounded-full overflow-hidden'>
                                <div className='flex gap-1.5 items-center text-[#f05123] py-2 px-3 bg-white rounded-full overflow-hidden'>
                                    <IoChatbubblesSharp color='#f05123' size={18} />
                                    <span className='font-semibold hidden md:block text-sm'>Hỏi đáp</span>
                                </div>
                            </button>
                        </DrawerTrigger>
                        <DrawerContent id="drawer-content" className="md:h-screen h-[75%] bg-white overflow-hidden md:top-0 md:right-0 md:left-auto mt-0 md:w-1/2 w-[90%] left-[5%] top-[5%] md:rounded-none rounded-2xl border-none">
                            <div className='w-full bg-red-800'>
                                helo
                            </div>
                        </DrawerContent>
                    </Drawer>

                </div>

                {showMenu && screenWidth > 1024 ? (
                    <div className='content lg:w-1/4 lg:flex hidden flex-col h-full text-black'>
                        <h3 className='font-medium py-3 px-4 bg-white'>Nội dung khóa học</h3>
                        <div className="h-full border-none overflow-y-scroll video-scroll">
                            <Accordion type="multiple" className="w-full">
                                {Array.from({ length: 15 }).map((_, index) => (
                                    <AccordionItem value={"index" + index} key={index}>
                                        <AccordionTrigger className='accordion-trigger w-full py-2 px-4 bg-[#f7f8fa] hover:no-underline hover:bg-gray-200'>
                                            <div className='w-full'>
                                                <div className='w-full flex items-center justify-between'>
                                                    <h3 className='font-medium text-base'>1. Bắt đầu</h3>
                                                    <MdKeyboardArrowDown size={24} />
                                                </div>
                                                <span className='text-xs mt-3 text-[#29303b] font-extralight'>1/8 | 29:39</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='bg-white py-2 px-4'>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                ) : (
                    <Drawer direction='left' open={showMenu}>
                        <DrawerContent id="drawer-content" className="h-screen bg-white top-0 left-0 mt-0 md:w-1/2 w-full rounded-none border-none">
                            <div className='flex flex-col h-full'>
                                <div className='flex items-center justify-between py-3 px-4'>
                                    <h3 className='font-medium bg-white'>Nội dung khóa học</h3>
                                    <IoClose className='cursor-pointer' size={24} onClick={() => setShowMenu(prev => !prev)} />
                                </div>
                                <div className="flex-1 border-none overflow-y-scroll">
                                    <Accordion type="multiple" className="w-full">
                                        {Array.from({ length: 15 }).map((_, index) => (
                                            <AccordionItem value={"index" + index} key={index}>
                                                <AccordionTrigger className='accordion-trigger w-full py-2 px-4 bg-[#f7f8fa] hover:no-underline'>
                                                    <div className='w-full'>
                                                        <div className='w-full flex items-center justify-between'>
                                                            <h3 className='font-medium text-base'>1. Bắt đầu</h3>
                                                            <MdKeyboardArrowDown size={24} />
                                                        </div>
                                                        <span className='text-xs mt-3 text-[#29303b] font-extralight'>1/8 | 29:39</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className='bg-white py-2 px-4'>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                )}
            </main>

            <footer className='h-[50px] relative flex lg:justify-center justify-end items-center bg-[#f0f0f0] z-20 shadow-customT text-sm'>
                <div className='flex gap-4 text-sm'>
                    <button className='flex bg-white gap-2 items-center border border-solid border-black rounded-full py-1 px-4'>
                        <IoIosArrowBack size={18} />
                        <span className='font-medium'>BÀI TRƯỚC</span>
                    </button>
                    <button className='flex bg-blue-500 hover:bg-blue-600 gap-2 items-center rounded-full py-1 px-4'>
                        <span className='font-medium text-white'>BÀI TIẾP THEO</span>
                        <IoIosArrowForward size={18} color='#fff' />
                    </button>
                </div>

                <div className='absolute left-4 lg:right-4 lg:left-auto cursor-pointer select-none'>
                    <div className='flex items-center gap-2' onClick={() => setShowMenu(prev => !prev)}>
                        <div className='p-2 rounded-full bg-white'>
                            {showMenu ? <HiArrowSmRight size={20} /> : <HiMenu size={20} />}
                        </div>
                        <span className='text-sm lg:order-first font-semibold hidden md:block'>6. Hooks</span>
                    </div>
                </div>
            </footer>
        </>
    )
}


