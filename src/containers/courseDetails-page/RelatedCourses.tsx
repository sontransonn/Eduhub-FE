import React from 'react'

import { FaStar } from 'react-icons/fa'

const RelatedCourses = () => {
    return (
        <div className='flex flex-col gap-5'>
            {Array.from({ length: 5 }).map((_, index) => (
                <div className='flex gap-4'>
                    <img
                        className='object-cover w-[70px] h-[70px] rounded-lg'
                        src="https://static.unica.vn/upload/images/2019/06/eat-clean-chuan-cho-nguoi-viet_m_1561517372.jpg"
                        alt=""
                    />
                    <div className='flex md:flex-row flex-col w-full'>
                        <a href="" className='flex-auto'>
                            <div className='font-medium mb-3'>Eat Clean chuẩn cho người Việt</div>
                            <div className='flex gap-2 mb-2 items-center'>
                                <div className='text-[#008E31] text-sm'>03 giờ 41 phút</div>
                            </div>
                        </a>
                        <div className='flex flex-none md:ms-8'>
                            <div className='flex-auto md:flex'>
                                <div className='flex gap-2 md:gap-8'>
                                    <div className='text-sm font-medium flex items-center'>
                                        4.8
                                        <FaStar />
                                    </div>
                                    <div className='flex gap-1 items-start'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RelatedCourses