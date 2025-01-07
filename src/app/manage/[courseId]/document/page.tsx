"use client"
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { TfiMenuAlt } from "react-icons/tfi";
import { ImBooks } from "react-icons/im";
import { PiGraduationCap } from "react-icons/pi";
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

import { getQuizs } from '@/api/instructor.api';

export default function Document() {
    const router = useRouter()
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [listQuiz, setListQuiz] = useState<any[]>([])

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getQuizs(id)
                setListQuiz(data)
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

    return (
        <>
            <h1 className='text-lg font-semibold border-b border-solid border-[#3333] p-4'>Tài liệu và quà tặng</h1>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {listQuiz.length > 0 && (
                    <div className='flex scrollable flex-col gap-4 max-h-[450px] overflow-scroll'>
                        {listQuiz.map((quiz, index) => {
                            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

                            return (
                                <div className='flex' key={index}>
                                    <div className='md:basis-3/4 flex gap-2.5 items-center'>
                                        <img src="https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.webp?w=200&h=200" alt="" className='w-[104px] rounded-sm' style={{ backgroundColor: randomColor }} />
                                        <div className='flex flex-col self-stretch justify-between'>
                                            <div className='flex text-[10px] gap-2'>
                                                <button className='px-2 border text-gray-500 border-solid border-[#3333] font-semibold rounded-full'>ASSESSMENT</button>
                                                <button className='px-2 bg-red-200 text-red-600 font-semibold rounded-full'>DRAFT</button>
                                            </div>
                                            <h3 className='font-semibold'>{quiz.quizName}</h3>
                                            <div className='flex items-center text-xs gap-1.5'>
                                                <TfiMenuAlt size={12} />
                                                <span>{quiz?.questions?.length} Question</span>
                                                <PiGraduationCap size={12} />
                                                <ImBooks size={12} />
                                            </div>
                                            <div className='flex items-center gap-1.5'>
                                                <img src={userInfo?.avatar} alt="" className='w-6 h-6 rounded-full' />
                                                <span className='text-[10px]'>{userInfo?.fullName}</span>
                                                <span className='text-[10px]'>13/12/2004</span>
                                            </div>
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
                            )
                        })}
                    </div>
                )}
                <Link href={`/quiz/${id}`} className="flex self-start w-40 items-center justify-between bg-purple-800 text-white px-4 py-2 rounded-sm hover:bg-purple-900">
                    <FaPlusCircle />
                    Thêm tài liệu
                </Link>
            </div>
        </>
    )
}
