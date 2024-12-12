import dynamic from 'next/dynamic';
import React from 'react'

const TeacherList = dynamic(() => import('@/containers/teacher-page/TeacherList'), { ssr: false });

export default function Teacher() {
    return (
        <TeacherList />
    )
}
