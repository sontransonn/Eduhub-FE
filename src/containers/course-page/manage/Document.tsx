"use client"
import React, { useState } from 'react'
import { FaEdit, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

export default function Document() {
    const [quizzes, setQuizzes] = useState([
        { id: 1, title: "Quiz 1", description: "Mô tả cho quiz 1", questionCount: 10, createdAt: "2023-12-20" },
        { id: 2, title: "Quiz 2", description: "Mô tả cho quiz 2", questionCount: 5, createdAt: "2023-12-25" },
    ]);

    const handleDeleteQuiz = (id: number) => {
        const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
        setQuizzes(updatedQuizzes);
    };

    const handleAddQuiz = () => {
        const newQuiz = {
            id: quizzes.length + 1,
            title: `Quiz ${quizzes.length + 1}`,
            description: "Mô tả cho quiz mới",
            questionCount: 0,
            createdAt: new Date().toISOString().slice(0, 10),
        };
        setQuizzes([...quizzes, newQuiz]);
    };

    return (
        <main className="bg-[#F1F5F8] text-black py-4">
            <div className="max-w-6xl mx-auto px-4">
                {/* <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-purple-800">Danh sách Quiz</h1>
                    <button
                        onClick={handleAddQuiz}
                        className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900"
                    >
                        <FaPlusCircle />
                        Tạo Quiz mới
                    </button>
                </div> */}
                <div className="grid gap-4">
                    {quizzes.map((quiz) => (
                        <div
                            key={quiz.id}
                            className="bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{quiz.title}</h2>
                                <p className="text-gray-600 text-sm">{quiz.description}</p>
                                <p className="text-gray-500 text-xs">Số câu hỏi: {quiz.questionCount}</p>
                                <p className="text-gray-500 text-xs">Ngày tạo: {quiz.createdAt}</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                                    <FaEdit />
                                    Sửa
                                </button>
                                <button
                                    className="flex items-center gap-2 text-red-600 hover:text-red-800"
                                    onClick={() => handleDeleteQuiz(quiz.id)}
                                >
                                    <FaTrashAlt />
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={handleAddQuiz}
                        className="flex items-center gap-2 bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 w-max"
                    >
                        <FaPlusCircle />
                        Tạo Quiz mới
                    </button>
                </div>

            </div>
        </main>
    )
}
