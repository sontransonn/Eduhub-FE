"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';

import { RootState } from '@/redux/store';

import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
import { LuPalette } from "react-icons/lu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import logoBig from "@/public/logo/logoBig.png"

export default function Quiz() {
    const [questions, setQuestions] = useState([
        {
            question: "",
            answers: [{ name: "Tùy chọn 1", isCorrect: false }],
        },
    ]);

    const { userInfo } = useSelector((state: RootState) => state.user)

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: "",
                answers: [{ name: "Tùy chọn 1", isCorrect: false }],
            },
        ]);
    };

    const handleAddAnswer = (qIndex: number) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answers.push({ name: `Tùy chọn ${updatedQuestions[qIndex].answers.length + 1}`, isCorrect: false });
        setQuestions(updatedQuestions);
    };

    const handleUpdateQuestion = (index: number, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setQuestions(updatedQuestions);
    };

    const handleUpdateAnswer = (qIndex: number, aIndex: number, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answers[aIndex].name = value;
        setQuestions(updatedQuestions);
    };

    const toggleCorrectAnswer = (qIndex: number, aIndex: number) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answers.forEach((answer, index) => {
            answer.isCorrect = index === aIndex ? !answer.isCorrect : false;
        });
        setQuestions(updatedQuestions);
    };

    const handleRemoveAnswer = (qIndex: number, aIndex: number) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].answers = updatedQuestions[qIndex].answers.filter((_, index) => index !== aIndex);
        setQuestions(updatedQuestions);
    };

    const handleRemoveQuestion = (qIndex: number) => {
        const updatedQuestions = questions.filter((_, index) => index !== qIndex);
        setQuestions(updatedQuestions);
    };

    return (
        <>
            <header className='fixed z-10 top-0 right-0 left-0 bg-white shadow-xl'>
                <div className='max-w-8xl mx-auto xl:px-20 md:px-10 py-4 px-4'>
                    <div className='flex items-center'>
                        <Link href={"/"}>
                            <Image src={logoBig} width={120} height={45} alt="" />
                        </Link>
                        <div className='flex flex-1 justify-end'>
                            <div className='flex gap-6 items-center'>
                                <LuPalette size={20} className='hidden md:block' />
                                <FaRegEye size={20} className='hidden md:block' />
                                <RiArrowGoBackFill size={20} className='hidden md:block' />
                                <RiArrowGoForwardFill size={20} className='hidden md:block' />
                                <FiLink2 size={20} className='hidden md:block' />
                                <FiUserPlus size={20} className='hidden md:block' />
                                <button className=' bg-purple-800 text-white rounded-md px-6 text-sm p-2 hover:bg-purple-900'>Xuất bản</button>
                                <BsThreeDotsVertical size={20} />
                                <Avatar className='w-10 h-10'>
                                    <AvatarImage src={userInfo?.avatar} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <main className='bg-[#efebf9] text-black min-h-screen pt-[72px]'>
                <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8 py-4'>
                    <div className="flex flex-col gap-3 mx-auto max-w-3xl">
                        <div className='flex flex-col bg-white rounded-md border border-solid border-[#3333] p-5 gap-4 border-t-[10px] border-t-purple-800'>
                            <input
                                type="text"
                                placeholder="Tiêu đề biểu mẫu"
                                defaultValue={"Mẫu không có tiêu đề"}
                                className="w-full font-light text-2xl focus:border-b-2 focus:border-purple-800 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Mô tả biểu mẫu"
                                className="w-full text-sm focus:border-b-2 focus:border-purple-800 outline-none"
                            />
                        </div>
                        {questions.map((q, qIndex) => (
                            <div key={qIndex} className='bg-white flex flex-col p-5 rounded-md border border-solid border-[#3333]'>
                                <div className='flex items-center gap-4'>
                                    <input
                                        type="text" placeholder='Câu hỏi'
                                        value={q.question} onChange={(e) => handleUpdateQuestion(qIndex, e.target.value)}
                                        className='outline-none border-b-2 border-black border-solid focus:border-purple-800 p-3 text-[13px] flex-1 bg-gray-100 hover:bg-gray-200'
                                    />
                                    <MdOutlineInsertPhoto size={24} color='#606366' />
                                    <button className='text-[13px] items-center gap-2 border border-solid border-[#3333] text-[#606366] self-stretch px-3 rounded-sm hidden md:flex'>
                                        <MdOutlineRadioButtonChecked size={20} />
                                        <span className='flex-shrink-0 mr-7'>Trắc nghiệm</span>
                                        <MdOutlineArrowDropDown size={20} />
                                    </button>
                                </div>
                                <div className='flex flex-col gap-4 text-xs py-5 border-b border-solid border-[#3333]'>
                                    {q.answers.map((answer, aIndex) => (
                                        <div key={aIndex} className='flex items-center gap-2'>
                                            <input type="radio" name={`answer-${qIndex}`} checked={answer.isCorrect} className='w-5 h-5' onChange={() => toggleCorrectAnswer(qIndex, aIndex)} />
                                            <input
                                                type="text" name="" id="" value={answer.name}
                                                onChange={(e) => handleUpdateAnswer(qIndex, aIndex, e.target.value)}
                                                className='outline-none hover:border-b-2 focus:border-b-2 border-solid border-black focus:border-purple-800 flex-1'
                                            />
                                            <IoCloseSharp size={20} className='cursor-pointer text-red-500' onClick={() => handleRemoveAnswer(qIndex, aIndex)} />
                                        </div>
                                    ))}
                                    <div className='flex items-center gap-2 text-[13px]'>
                                        <span className='text-gray-600 font-medium cursor-pointer' onClick={() => handleAddAnswer(qIndex)}>Thêm tùy chọn</span>
                                        <span>hoặc</span>
                                        <span className='text-blue-600 font-medium cursor-pointer'>thêm "Câu trả lời khác"</span>
                                    </div>
                                </div>
                                <div className='flex justify-end pt-5'>
                                    <FaRegTrashAlt className='cursor-pointer' onClick={() => handleRemoveQuestion(qIndex)} />
                                </div>
                            </div>
                        ))}

                        <div className='flex justify-center items-center'>
                            <button className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900' onClick={handleAddQuestion}>Thêm câu hỏi</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
