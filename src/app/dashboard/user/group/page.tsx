import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='bg-[#003555] text-white'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 pt-12 flex flex-col gap-[60px] leading-normal'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[40px] font-medium'>Học viên : Trần Đức Sơn</span>
                    </div>
                    <div className='flex'>
                        <ul className='flex gap-5 font-medium'>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <Link href={"/dashboard/user/course"} className='hover:text-slate-400'>Khóa học</Link>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <span className='hover:text-slate-400'>Hội viên</span>
                                <div className='h-[4px] bg-white w-full'></div>
                            </li>
                            <li className='flex flex-col gap-4 cursor-pointer'>
                                <span className='hover:text-slate-400'>Yêu thích</span>
                            </li>
                            <li className='flex flex-col cursor-pointer'>
                                <span className='hover:text-slate-400'>Ví của bạn</span>
                            </li>
                            <li className='flex flex-col cursor-pointer'>
                                <span className='hover:text-slate-400'>Lịch sử đặt hàng</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page