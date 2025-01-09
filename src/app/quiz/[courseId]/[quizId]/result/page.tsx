"use client"
import React from 'react'
import { useParams } from 'next/navigation';

export default function ResultQuiz() {
    const params = useParams();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId || "";
    const quizId = Array.isArray(params.quizId) ? params.quizId[0] : params.quizId || "";

    return (
        <div>page</div>
    )
}
