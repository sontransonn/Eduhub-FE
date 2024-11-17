import React from 'react'
import Link from 'next/link'

import CourseCard from "@/components/card/CourseCard";

const Step1Page = () => {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            {/*  */}
            <div className='bg-sky-200 py-6'>
                <div className='max-w-8xl mx-auto'>
                    <ol className='flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base md:px-20'>
                        <div className='flex-1 w-full'>
                            <div className='flex justify-center relative'>
                                <li className='flex items-center z-10'>
                                    <span className='flex items-center text-black justify-center w-10 h-10 bg-white border-4 border-blue-500 rounded-full lg:h-12 lg:w-12 shrink-0'>
                                        1
                                    </span>
                                </li>
                                <div className="absolute w-1/2 right-0 top-2.5 z-0 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block"></div>
                            </div>
                            <div className='text-center mt-3'>Thông tin</div>
                        </div>
                        <div className='flex-1 w-full'>
                            <div className='flex justify-center relative'>
                                <li className='flex items-center z-10'>
                                    <span className='flex items-center text-black justify-center w-10 h-10 bg-white border-4 border-white rounded-full lg:h-12 lg:w-12 shrink-0'>
                                        2
                                    </span>
                                </li>
                                <div className="absolute w-1/2 right-0 top-2.5 z-0 after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-4 after:inline-block"></div>
                                <div className="absolute w-1/2 left-0 top-2.5 z-0 before:content-[''] before:w-full before:h-1 before:border-b before:border-white before:border-4 before:inline-block"></div>
                            </div>
                            <div className='text-center mt-3'>Thanh toán</div>
                        </div>

                        <div className='flex-1 justify-center'>
                            <div className='flex justify-center relative'>
                                <li className='flex items-center z-10'>
                                    <span className='flex items-center text-black justify-center w-10 h-10 bg-white border-4 border-white rounded-full lg:h-12 lg:w-12 shrink-0'>
                                        3
                                    </span>
                                </li>
                                <div className="absolute w-1/2 left-0 top-2.5 z-0 before:content-[''] before:w-full before:h-1 before:border-b before:border-white before:border-4 before:inline-block"></div>
                            </div>
                            <div className='text-center mt-3'>Vào học</div>
                        </div>
                    </ol>
                </div>
            </div >


            {/*  */}
            <div className='max-w-8xl mx-auto grid grid-cols-3 gap-4 lg:px-10 px-4 py-4'>
                <div className='lg:col-span-2 col-span-3 border rounded p-6 bg-white shadow h-fit'>
                    <div className='text-lg font-semibold py-4'>Thông tin người mua</div>
                    <form action="" className='text-sm flex flex-col gap-4'>
                        {/* Họ tên */}
                        <div>
                            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Họ tên *</label>
                            <input
                                type="text"
                                className='border rounded-sm block w-full p-2.5'
                                placeholder='Họ tên'
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="" className='block mb-2 font-medium text-gray-900'>Email *</label>
                            <input
                                type="email"
                                className='border rounded-sm block w-full p-2.5'
                                placeholder='Email'
                                required
                            />
                        </div>

                        {/* Điện thoại */}
                        <div>
                            <label htmlFor="" className='block mb-2 font-medium text-gray-900'>Điện thoại *</label>
                            <input
                                type="text"
                                className='border rounded-sm block w-full p-2.5'
                                placeholder='Điện thoại'
                                required
                            />
                        </div>
                        <Link href={"/order/step2"} className='w-full py-4 flex items-center justify-center rounded-sm bg-orange-500 text-white font-semibold hover:bg-orange-600'>
                            Tiếp theo
                        </Link>
                    </form>
                </div>

                <div className='lg:col-span-1 col-span-3 border rounded p-6 h-fit bg-white shadow'>
                    <div className='flex justify-between border-b border-gray-300 py-4'>
                        <div className='font-semibold text-lg'>Đơn hàng: (1 khóa học)</div>
                        <Link href={"/cart"}>Sửa</Link>
                    </div>
                    <div>
                        <div className='flex gap-6 border-b border-gray-300 py-4 cart-course'>
                            <div className='flex-auto'>Nghệ thuật giao tiếp và đàm phán</div>
                            <div className='flex-1'>
                                <div className='text-right'>
                                    <p className='text-base'>299,000<sup>đ</sup></p>
                                    <span className='line-through text-sm text-[#929292]'>600,000<sup>đ</sup></span>
                                </div>
                            </div>
                        </div>

                        <div className='pt-6 flex justify-between font-semibold'>
                            <p>Tổng cộng:</p>
                            <span className='text-right text-[#E66B22]'>299,000<sup>đ</sup></span>
                        </div>
                    </div>
                </div>

                <div className='col-span-3'>
                    <h3 className="uppercase text-xl my-4">Bạn có thể quan tâm</h3>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Link href={"/"} className="col">
                                <CourseCard />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Step1Page