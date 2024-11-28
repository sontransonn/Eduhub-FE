"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";

import { IoIosArrowBack } from "react-icons/io";
import { HiArrowSmRight } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { ScrollArea } from "@/components/ui/scroll-area"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const LearningPage = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <main className='bg-[#f1f5f8] relative'>
            <div className='fixed flex lg:justify-center justify-end items-center bg-[#f0f0f0] w-full py-3 px-4 bottom-0 z-20'>
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

            <div className='w-full flex'>
                <div className='lg:w-3/4'>
                    <ScrollArea className="w-full h-[calc(100vh-48px)] border-none">
                        <div className='flex justify-center w-full bg-black'>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                                controls
                                width="75%"
                                height="540px"
                            />
                        </div>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h3>Hello world</h3>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>

                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>


                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>


                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>


                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                    </ScrollArea>
                </div>

                <div className='lg:w-1/4 text-black'>
                    <ScrollArea className="w-full h-[calc(100vh-48px)] bg-red-500 border-none">
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>

                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>


                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        v
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                    </ScrollArea>
                </div>
            </div>
        </main>
    )
}

export default LearningPage