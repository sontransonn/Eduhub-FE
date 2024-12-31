"use client"
import Link from 'next/link';
import React from 'react'

export default function DocumentTab() {
    const quizzes = [
        {
            id: 1,
            title: "Quiz 1: Giới thiệu khóa học",
            description: "Kiểm tra kiến thức cơ bản về khóa học.",
            status: "Chưa làm", // Hoặc "Đã hoàn thành"
        },
        {
            id: 2,
            title: "Quiz 2: Kiến thức nâng cao",
            description: "Bài quiz kiểm tra kiến thức nâng cao.",
            status: "Đã hoàn thành",
        },
    ];

    return (
        <div className='py-5'>
            <main className="bg-[#F1F5F8] text-black min-h-screen py-4">
                {/* Phần tài liệu và quiz */}
                <section className="bg-white p-6 rounded-md shadow-md">
                    <ul className="space-y-4">
                        {quizzes.map((quiz) => (
                            <li key={quiz.id} className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h3 className="text-lg font-medium">{quiz.title}</h3>
                                    <p className="text-sm text-gray-600">{quiz.description}</p>
                                    <span
                                        className={`inline-block mt-2 text-xs px-2 py-1 rounded ${quiz.status === "Đã hoàn thành" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        {quiz.status}
                                    </span>
                                </div>
                                <Link
                                    href={`/course/1/quiz/${quiz.id}`}
                                    className="text-white bg-purple-800 px-4 py-2 rounded-md text-sm hover:bg-purple-900"
                                >
                                    Làm Quiz
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}
