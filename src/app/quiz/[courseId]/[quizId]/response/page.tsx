"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ResponseQuiz() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    return (
        <div className="w-screen h-screen bg-[#efebf9] flex flex-col justify-between">
            <div className="relative w-full bg-purple-800 h-40">
                <div className="absolute w-1/2 top-[50%] left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col gap-6 p-8 bg-white border-t-[10px] border-solid border-purple-500 shadow">
                        <h2 className='text-3xl font-medium'>Introduction to Ruby Programming</h2>
                        <p className="text-md">Your response has been recorded.</p>
                        <Link href={`/quiz/${courseId}/${quizId}/result`} className='text-xs self-start bg-purple-800 text-white font-medium px-3 py-2 rounded-sm hover:bg-purple-900'>VIEW SCORE</Link>
                        <Link href={"/"} className='text-sm font-medium text-blue-600'>Quay về trang chủ</Link>
                    </div>
                </div>
            </div>

            <footer className="text-center text-sm text-gray-600 py-4">
                This content is neither created nor endorsed by Google. Report Abuse - Terms of Service
            </footer>
        </div>

    )
}
