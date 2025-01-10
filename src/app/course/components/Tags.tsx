import React from 'react'
import Link from 'next/link'

import { CourseProps } from '@/types/course.type'

export default function Tags({ currentCourse }: { currentCourse: CourseProps }) {
    return (
        <div className='flex gap-2 flex-wrap'>
            {currentCourse?.subCategories?.length > 0 ? (
                currentCourse.subCategories.map((sub, index) => (
                    <Link href="" className='text-xs px-1 py-0.5 bg-[#A4A4A4] rounded text-white' key={index}>
                        {sub}
                    </Link>
                ))
            ) : (
                <span className='text-xs px-1 py-0.5 bg-[#D3D3D3] rounded text-white'>Không có tag</span>
            )}
        </div>
    )
}
