"use client"
import React from 'react'
import { } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export default function ResultQuiz() {
    // const params = useParams();
    // const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    // const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    const { userInfo } = useSelector((state: RootState) => state.user)

    return (
        <main className='bg-[#efebf9] text-black min-h-screen'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8 py-4'>
                <div className="flex flex-col gap-3 mx-auto max-w-3xl">
                    <div className='flex flex-col bg-white rounded-md border border-solid border-[#3333] border-t-[10px] border-t-purple-800'>
                        <div className='flex justify-between gap-4 border-b border-solid border-[#3333] p-5'>
                            <h3 className='text-2xl font-medium'>HELLLONSHHB</h3>
                            <div className='flex items-center gap-1.5 font-medium'>
                                <h5>Total points</h5>
                                <div className='bg-purple-700 text-white px-1.5 py-1 rounded-sm'>1/2</div>
                            </div>
                        </div>
                        <p className='p-5'>The respondent&apos;s email (<span className='font-semibold text-gray-600'>{userInfo?.email}</span>) was recorded on submission of this form.</p>
                    </div>

                    {Array.from({ length: 8 }).map((question, index) => (
                        <div key={index} className='bg-white flex flex-col gap-4 p-5 rounded-md border border-solid border-[#3333]'>
                            <div className='flex justify-between items-center'>
                                <span className='font-medium'>aaaaaaaaaaaaaaa</span>
                                <span className='text-sm font-medium'>10 điểm</span>
                            </div>
                            <div className='flex flex-col gap-4'>
                                {/* {question?.answers?.map((answer, index) => (
                                                <div key={index} className='flex items-center gap-2.5'>
                                                    <input
                                                        type="radio" name={question._id} id=""
                                                        className='w-5 h-5' onChange={() => handleAnswerChange(question._id, answer._id)}
                                                        checked={dataSubmit.userAnswers.find((item) => item.questionId === question._id)?.selectedAnswerId === answer._id}
                                                    />
                                                    <span className='text-sm'>{answer.text}</span>
                                                </div>
                                            ))} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
