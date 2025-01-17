"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

import { RootState } from '@/store';

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

import { getQuizDetails } from '@/api/quiz.api';
import { editQuiz } from '@/api/instructor.api';

import logoBig from "@/public/logo/logoBig.png"

export default function EditQuiz() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    const router = useRouter()

    const [formData, setFormData] = useState({
        _id: "",
        quizName: "",
        courseId: courseId,
        durationTime: 60,
        maxScore: 100,
        questions: [
            {
                _id: "",
                questionText: "",
                maxScore: 10,
                answers: [
                    {
                        _id: "",
                        text: "Tùy chọn 1",
                        isCorrect: false
                    }
                ]
            }
        ]
    })

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getQuizDetails(courseId, quizId);
                setFormData(data)
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
    }, [courseId, quizId])

    const handleAddQuestion = () => {
        setFormData((prev) => ({
            ...prev,
            questions: [
                ...prev.questions,
                {
                    _id: "",
                    questionText: "",
                    maxScore: 10,
                    answers: [
                        {
                            _id: "",
                            text: "Tùy chọn 1",
                            isCorrect: false,
                        },
                    ],
                },
            ],
        }));
    };

    const handleUpdateQuestion = (qIndex: number, value: string) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[qIndex].questionText = value;
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
    };

    const handleUpdateAnswer = (qIndex: number, aIndex: number, value: string) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[qIndex].answers[aIndex].text = value;
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
    };

    const handleRemoveAnswer = (qIndex: number, aIndex: number) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[qIndex].answers = updatedQuestions[qIndex].answers.filter(
            (_, index) => index !== aIndex
        );
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
    };

    const handleAddAnswer = (qIndex: number) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[qIndex].answers.push({
            _id: "",
            text: `Tùy chọn ${updatedQuestions[qIndex].answers.length + 1}`,
            isCorrect: false,
        });
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
    };

    const toggleCorrectAnswer = (qIndex: number, aIndex: number) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[qIndex].answers.forEach((answer, index) => {
            answer.isCorrect = index === aIndex ? !answer.isCorrect : false;
        });
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }));
    };

    const transformFormData = (data: typeof formData) => {
        return {
            ...data,
            courseId: courseId,
            quizId: data._id, // Chuyển _id thành quizId
            questions: data.questions.map((question) => ({
                ...question,
                questionId: question._id, // Chuyển _id thành questionId
                answers: question.answers.map((answer) => ({
                    ...answer,
                    answerId: answer._id, // Chuyển _id thành answerId
                })),
            })),
        };
    };

    const handleSubmit = async () => {
        try {
            const transformedData = transformFormData(formData);
            await editQuiz(quizId, transformedData)
            toast.success("Cập nhật quiz thành công!")
            router.push(`/manage/${courseId}/document`)
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
                                <button className=' bg-purple-800 text-white rounded-md px-6 text-sm p-2 hover:bg-purple-900' onClick={handleSubmit}>Cập nhật</button>
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
                                value={formData.quizName}
                                onChange={(e) => setFormData({ ...formData, quizName: e.target.value })}
                                className="w-full font-light text-2xl focus:border-b-2 focus:border-purple-800 outline-none"
                            />
                            <div className='flex gap-4'>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="durationTime" className="text-sm font-medium">Thời gian làm bài (phút):</label>
                                    <input
                                        type="number"
                                        id="durationTime"
                                        min={1}
                                        value={formData.durationTime}
                                        onChange={(e) => setFormData({ ...formData, durationTime: Number(e.target.value) })}
                                        className="outline-none border rounded-md px-3 py-2 focus:border-purple-800"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="maxScore" className="text-sm font-medium">Điểm tối đa:</label>
                                    <input
                                        type="number"
                                        id="maxScore"
                                        min={1}
                                        value={formData.maxScore}
                                        onChange={(e) => setFormData({ ...formData, maxScore: Number(e.target.value) })}
                                        className="outline-none border rounded-md px-3 py-2 focus:border-purple-800"
                                    />
                                </div>
                            </div>
                        </div>
                        {formData.questions.map((q, qIndex) => (
                            <div key={qIndex} className='bg-white flex flex-col p-5 rounded-md border border-solid border-[#3333]'>
                                <div className='flex items-center gap-4'>
                                    <input
                                        type="text" placeholder='Câu hỏi'
                                        value={q.questionText} onChange={(e) => handleUpdateQuestion(qIndex, e.target.value)}
                                        className='outline-none border-b-2 border-black border-solid focus:border-purple-800 p-3 text-[13px] flex-1 bg-gray-100 hover:bg-gray-200'
                                    />
                                    <MdOutlineInsertPhoto size={24} color='#606366' />
                                    <button className='text-[13px] items-center gap-2 border border-solid border-[#3333] text-[#606366] self-stretch px-3 rounded-sm hidden md:flex'>
                                        <MdOutlineRadioButtonChecked size={20} />
                                        <span className='flex-shrink-0 mr-7'>Trắc nghiệm</span>
                                        <MdOutlineArrowDropDown size={20} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 py-4">
                                    <label htmlFor={`maxScore-${qIndex}`} className="text-sm font-medium">Điểm tối đa cho câu hỏi:</label>
                                    <input
                                        type="number"
                                        id={`maxScore-${qIndex}`}
                                        min={1}
                                        value={q.maxScore}
                                        onChange={(e) => {
                                            const updatedQuestions = [...formData.questions];
                                            updatedQuestions[qIndex].maxScore = Number(e.target.value);
                                            setFormData({ ...formData, questions: updatedQuestions });
                                        }}
                                        className="outline-none border rounded-md px-3 py-2 focus:border-purple-800"
                                    />
                                </div>
                                <div className='flex flex-col gap-4 text-xs py-5 border-b border-solid border-[#3333]'>
                                    {q.answers.map((answer, aIndex) => (
                                        <div key={aIndex} className='flex items-center gap-2'>
                                            <input type="radio" name={`answer-${qIndex}`} checked={answer.isCorrect} className='w-5 h-5' onChange={() => toggleCorrectAnswer(qIndex, aIndex)} />
                                            <input
                                                type="text" value={answer.text}
                                                onChange={(e) => handleUpdateAnswer(qIndex, aIndex, e.target.value)}
                                                className='outline-none hover:border-b-2 focus:border-b-2 border-solid border-black focus:border-purple-800 flex-1'
                                            />
                                            <IoCloseSharp size={20} className='cursor-pointer text-red-500' onClick={() => handleRemoveAnswer(qIndex, aIndex)} />
                                        </div>
                                    ))}
                                    <div className='flex items-center gap-2 text-[13px]'>
                                        <span className='text-gray-600 font-medium cursor-pointer' onClick={() => handleAddAnswer(qIndex)}>Thêm tùy chọn</span>
                                        <span>hoặc</span>
                                        <span className='text-blue-600 font-medium cursor-pointer'>thêm &quot;Câu trả lời khác&quot;</span>
                                    </div>
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
