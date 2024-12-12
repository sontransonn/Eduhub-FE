import React from 'react'
import dynamic from 'next/dynamic';

const TeacherForm = dynamic(() => import('@/containers/teacher-page/TeacherForm'), { ssr: false });

export default function page() {
    return (
        <TeacherForm />
    )
}
