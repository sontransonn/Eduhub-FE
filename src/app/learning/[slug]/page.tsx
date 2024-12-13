"use client"
import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";

import { IoIosArrowBack } from "react-icons/io";
import { HiArrowSmRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from "react-icons/io5";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import LearningHeader from "@/components/LearningHeader";
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function LearningPage() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <LearningHeader />
            <main className='flex bg-[#f1f5f8] h-[calc(100vh-112px)]'>
                <div className={`${showMenu ? "lg:w-3/4 w-full" : "w-full"} relative h-full flex flex-col`}>
                    {/* ScrollArea */}
                    <div className='h-full justify-center overflow-y-scroll'>
                        <div className=' bg-black overflow-hidden'>
                            <div className='max-w-6xl md:px-20 mx-auto'>
                                <div className="relative" style={{ paddingTop: "56.25%" }}>
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

                        <div className='flex flex-col max-w-6xl md:px-20 px-4 mx-auto md:py-12 py-6 gap-12'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex md:flex-row flex-col justify-between md:items-center items-start gap-4 flex-shrink-0'>
                                    <h3 className='text-2xl font-semibold md:w-2/3 w-full break-words'>Xây Dựng Website với ReactJS</h3>
                                    <span className='text-[13px] md:hidden'>Cập nhật tháng 5 năm 2022</span>
                                    <button className='bg-[#ebebeb] rounded-sm flex items-center gap-2 py-3 px-4 text-sm flex-shrink-0'>
                                        <FaPlus className='font-semibold' />
                                        <span>Thêm ghi chú tại <span className='font-semibold'>00:00</span></span>
                                    </button>
                                </div>
                                <span className='text-[13px] hidden md:inline-block'>Cập nhật tháng 5 năm 2022</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h4 className=''>Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem F8 sắp có gì mới nhé!</h4>
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

                    <div className='absolute bottom-10 right-5'>Hỏi đáp</div>
                </div>

                {showMenu && screenWidth > 1024 ? (
                    <div className='lg:w-1/4 lg:flex hidden flex-col h-full text-black'>
                        <h3 className='font-medium py-3 px-4 bg-white'>Nội dung khóa học</h3>

                        {/* ScrollArea */}
                        <div className="h-full border-none overflow-y-scroll">
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
                        <DrawerContent id="drawer-content" className="h-screen bg-white overflow-y-auto top-0 left-0 mt-0 md:w-1/2 w-full rounded-none">
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

            {/*  */}
            <div className='h-14 relative flex lg:justify-center justify-end items-center bg-[#f0f0f0] py-3 px-4 z-20 shadow-customT'>
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
            </div>
        </>
    )
}


