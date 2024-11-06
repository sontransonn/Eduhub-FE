import React from 'react'


export default function page() {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='mx-auto py-8 xl:px-20 lg:px-10 px-2 pt-6 lg:pt-14 md:pt-4 '>
                <div className='xl:text-[32px] text-[26px] font-medium text-black'>
                    Khóa học Marketing
                </div>

                <div className='text-sm font-semibold text-center text-black border-b border-gray-400 mb-5'>
                    <ul className='flex flex-wrap text-base gap-[24px]'>
                        <li className='me-2'>
                            <button>
                                Phổ biến
                            </button>
                        </li>
                        <li className='me-2'>
                            <button>
                                Mới
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
