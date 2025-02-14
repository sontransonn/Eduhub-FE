"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import { getQuizsInCourse } from '@/api/quiz.api';

export default function DocumentTab({ courseId }: { courseId: string }) {
    const [quizzes, setQuizzes] = useState<Array<{ _id: string; quizName: string; durationTime: string; maxScore: string; highestScore: number }>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getQuizsInCourse(courseId);
                setQuizzes(data.quizzes || []);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error("Failed:", error.message);
                } else {
                    console.error("Failed with an unknown error");
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [courseId]);

    return (
        <div className="flex flex-col py-5">
            {isLoading ? (
                <p className="text-gray-500">Đang tải...</p>
            ) : quizzes.length > 0 ? (
                <ul className="space-y-4">
                    {quizzes.map((quiz) => (
                        <li key={quiz._id} className="border border-[#3333] bg-white p-4 rounded-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{quiz.quizName}</h3>
                                <Link
                                    href={`/quiz/${courseId}/${quiz._id}/join`}
                                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-sm"
                                >
                                    Bắt đầu
                                </Link>
                            </div>
                            <div className="text-gray-600 text-sm">
                                <p>⏳ Thời gian làm bài: {quiz.durationTime} phút</p>
                                <p>📊 Điểm tối đa: {quiz.maxScore}</p>
                                <p>🏆 Điểm cao nhất: {quiz.highestScore || 'Chưa có điểm'}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">Không có bài quiz nào để hiển thị.</p>
            )}
        </div>
    );
}
