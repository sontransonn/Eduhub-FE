"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { RootState } from '@/store';

import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineCloudDone } from "react-icons/md";
import { LuAlarmCheck } from "react-icons/lu";

import { getQuizDetails } from '@/api/user.api';
import { submitQuiz } from '@/api/user.api';

export default function JoinQuiz() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    const router = useRouter()

    const [dataSubmit, setDataSubmit] = useState({
        courseId: courseId,
        quizId: quizId,
        userAnswers: [] as { questionId: string; selectedAnswerId: string }[],
    })
    const [quiz, setQuiz] = useState({
        _id: '',
        quizName: '',
        durationTime: '',
        maxScore: 0,
        questions: [{
            _id: '',
            questionText: '',
            maxScore: 0,
            answers: [
                {
                    _id: '',
                    text: ''
                }
            ]
        }]
    })
    const [remainingTime, setRemainingTime] = useState(0);

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getQuizDetails(courseId, quizId);
                setQuiz(data)
                setRemainingTime(data.durationTime * 60);
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

    useEffect(() => {
        if (remainingTime > 0) {
            const interval = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (remainingTime === 0 && Number(quiz.durationTime) > 0) {
            handleSubmitQuiz();
        }
    }, [remainingTime]);

    const handleAnswerChange = (questionId: string, answerId: string) => {
        setDataSubmit((prev) => {
            const existingAnswerIndex = prev.userAnswers.findIndex(
                (answer) => answer.questionId === questionId
            );

            const updatedAnswers = [...prev.userAnswers];

            if (existingAnswerIndex !== -1) {
                updatedAnswers[existingAnswerIndex] = { questionId, selectedAnswerId: answerId };
            } else {
                updatedAnswers.push({ questionId, selectedAnswerId: answerId });
            }

            return { ...prev, userAnswers: updatedAnswers };
        });
    };

    const handleResetAnswers = () => {
        setDataSubmit((prevState) => ({
            ...prevState,
            userAnswers: []
        }));
    };

    const handleSubmitQuiz = async () => {
        try {
            const data = await submitQuiz(dataSubmit)
            toast.success(data.message)
            router.push(`/quiz/${courseId}/${quizId}/response`)
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
            <header className='fixed z-10 top-0 right-0 left-0 bg-white'>
                <div className='max-w-8xl mx-auto xl:px-20 md:px-10 py-4 px-4'>
                    <div className='flex items-center gap-6'>
                        <span className='text-2xl text-purple-800 font-medium' style={{ width: '4ch' }}>{Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60}</span>
                        <div className='relative flex flex-1 h-2 bg-gray-300 rounded-full overflow-hidden'>
                            <div
                                className='absolute top-0 left-0 h-full bg-purple-800 transition-all duration-100'
                                style={{ width: `${(remainingTime / (Number(quiz.durationTime) * 60)) * 100}%` }}
                            ></div>
                        </div>
                        <LuAlarmCheck size={32} color='gray' />
                    </div>
                </div>
            </header>
            <main className='bg-[#efebf9] text-black min-h-screen pt-[64px]'>
                <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8 py-4'>
                    <div className="flex flex-col gap-3 mx-auto max-w-3xl">
                        <div className='flex flex-col bg-white rounded-md border border-solid border-[#3333] p-5 gap-4 border-t-[10px] border-t-purple-800'>
                            <div className='flex flex-col gap-4 pb-4 border-b border-solid border-[#3333]'>
                                <h3 className='text-3xl font-medium'>{quiz.quizName}</h3>
                            </div>
                            <div className='flex flex-col gap-2 pb-4 border-b border-solid border-[#3333]'>
                                <div className='flex justify-between items-center text-sm'>
                                    <p className='font-semibold text-gray-600'>{userInfo?.email} <span className='text-blue-700 cursor-pointer'>Chuyển đổi tài khoản</span></p>
                                    <MdOutlineCloudDone size={24} />
                                </div>
                                <div className='flex text-sm items-center gap-2'>
                                    <MdOutlineMailLock size={24} />
                                    <p className='font-semibold text-gray-600'>Không được chia sẻ</p>
                                </div>
                            </div>
                            <span className='text-red-600 text-sm'>*Biểu thị câu hỏi bắt buộc</span>
                        </div>

                        {quiz?.questions?.map((question, index) => (
                            <div key={index} className='bg-white flex flex-col gap-4 p-5 rounded-md border border-solid border-[#3333]'>
                                <div className='flex justify-between items-center'>
                                    <span className='font-medium'>{question.questionText}</span>
                                    <span className='text-sm font-medium'>{question.maxScore} điểm</span>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    {question?.answers?.map((answer, index) => (
                                        <div key={index} className='flex items-center gap-2.5'>
                                            <input
                                                type="radio" name={question._id} id=""
                                                className='w-5 h-5' onChange={() => handleAnswerChange(question._id, answer._id)}
                                                checked={dataSubmit.userAnswers.find((item) => item.questionId === question._id)?.selectedAnswerId === answer._id}
                                            />
                                            <span className='text-sm'>{answer.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className='flex justify-between items-center'>
                            <button className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900' onClick={handleSubmitQuiz}>Gửi</button>
                            <button className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900' onClick={handleResetAnswers}>Xóa hết câu trả lời</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
