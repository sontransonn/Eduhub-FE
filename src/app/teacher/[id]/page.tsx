import React from 'react'
import dynamic from 'next/dynamic';

const TeacherDetails = dynamic(() => import('@/containers/teacher-page/TeacherDetails'), { ssr: false });

export default function page() {
    return (
        <TeacherDetails />
    )
}

