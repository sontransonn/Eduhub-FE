import React from 'react'

import { CourseProps } from '@/types/course.type';

export default function CourseContent({ currentCourse }: { currentCourse: CourseProps }) {
    return (
        <div className='rounded border border-solid border-[#929292] md:p-6 p-4 overflow-hidden'>
            <div className='scrollable w-full flex flex-col gap-2 h-[450px] overflow-scroll'>
                {currentCourse?.videos && currentCourse?.videos?.length > 0 ? (
                    currentCourse?.videos?.map((video: { lessonName: string }, index) => (
                        <div className='flex' key={index}>
                            <div className='md:basis-3/4 flex gap-2.5 items-center'>
                                <img src={currentCourse.poster} alt="" className='w-40 rounded-lg' />
                                <div className='flex flex-col self-stretch justify-between'>
                                    <span className='line-clamp-2'>{video.lessonName}</span>
                                    <span className='text-xs text-gray-400'>{currentCourse.approvedBy?.fullName}</span>
                                </div>
                            </div>
                            <div className='md:basis-1/4 md:flex hidden gap-8 items-center justify-end'>
                                <span className='text-sm text-[#006CCB] hover:text-blue-700 cursor-pointer'>Học thử</span>
                                <span className=''>00:05:28</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 p-6">
                        <div className="text-center">
                            <span className="block text-xl font-semibold text-gray-700 mb-4">Khóa học chưa có video nào.</span>
                            <p className="mb-4 text-sm">Hiện tại, khóa học này chưa có bất kỳ bài giảng video nào. Bạn có thể chờ đợi nội dung mới hoặc liên hệ với người quản lý khóa học để biết thêm thông tin.</p>
                            <div className="flex justify-center gap-4">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Liên hệ hỗ trợ
                                </button>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
                                    Quay lại trang chủ
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
