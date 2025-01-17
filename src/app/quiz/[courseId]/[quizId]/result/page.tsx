"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

import { getResultQuiz, getQuizDetails } from '@/api/quiz.api';

import { RootState } from '@/store';
import Link from 'next/link';

export default function ResultQuiz() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    const [maxScore, setMaxscore] = useState(0)
    const [resultQuiz, setResultQuiz] = useState({
        quizName: "",
        pointAchieved: 0,
        isPassed: false,
        answers: [
            {
                questionText: "",
                userAnswer: "",
                isCorrect: false,
                correctAnswerText: "",
                allAnswers: [
                    {
                        text: "",
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
                const quiz = await getQuizDetails(courseId, quizId);
                const data = await getResultQuiz(quizId);
                setMaxscore(quiz.maxScore)
                setResultQuiz(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [courseId, quizId])

    return (
        <main className='bg-[#efebf9] text-black min-h-screen'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8 py-4'>
                <div className="flex flex-col gap-3 mx-auto max-w-3xl">
                    <div className='flex flex-col bg-white rounded-md border border-solid border-[#3333] border-t-[10px] border-t-purple-800'>
                        <div className='flex justify-between gap-4 border-b border-solid border-[#3333] p-5'>
                            <h3 className='text-2xl font-medium'>{resultQuiz.quizName}</h3>
                            <div className='flex items-center gap-1.5 font-medium'>
                                <h5>Total points</h5>
                                <div className='bg-purple-700 text-white px-1.5 py-1 rounded-sm'>{resultQuiz.pointAchieved}/{maxScore}</div>
                            </div>
                        </div>
                        <p className='p-5'>The respondent&apos;s email (<span className='font-semibold text-gray-600'>{userInfo?.email}</span>) was recorded on submission of this form.</p>
                    </div>

                    {resultQuiz?.answers?.map((answer, index) => (
                        <div key={index} className='bg-white flex flex-col gap-4 p-5 rounded-md border border-solid border-[#3333]'>
                            <div className='flex justify-between items-center'>
                                <span className={`${answer.isCorrect ? "text-green-500" : "text-red-500"} font-medium`}>{answer.questionText}</span>
                                <span className='text-sm font-medium'>
                                    {answer.isCorrect ? "10/10" : "0/10"}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                {answer?.allAnswers?.map((item, index) => (
                                    <div key={index} className={`flex items-center p-2 rounded-md gap-2.5 ${answer.isCorrect && item.text === answer.userAnswer ? "bg-green-200" : ""}  ${!answer.isCorrect && item.text === answer.userAnswer ? "bg-red-200" : ""}`}>
                                        <input type="radio" id="" className='w-5 h-5' checked={item.text === answer.userAnswer} />
                                        <span className='text-sm'>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            {!answer.isCorrect && (
                                <div className='flex flex-col gap-2'>
                                    <span className='text-sm'>Correct answer</span>
                                    <div className='p-2 flex items-center gap-2.5'>
                                        <input type="radio" id="" className='w-5 h-5' checked />
                                        <span className='text-sm'>{answer.correctAnswerText}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className='flex justify-between items-center'>
                        <Link href={"/"} className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900'>Quay về trang chủ</Link>
                        <Link href={`/quiz/${courseId}/${quizId}/join`} className='bg-purple-800 text-white rounded-md px-6 text-sm py-2 hover:bg-purple-900'>Làm lại bài quiz</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
