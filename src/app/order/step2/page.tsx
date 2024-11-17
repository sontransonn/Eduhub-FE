import React from 'react'

import payment from '@/constants/payments'
import Link from 'next/link'

const Step2Page = () => {
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
                                    <span className='flex items-center text-black justify-center w-10 h-10 bg-white border-4 border-blue-500 rounded-full lg:h-12 lg:w-12 shrink-0'>
                                        2
                                    </span>
                                </li>
                                <div className="absolute w-1/2 right-0 top-2.5 z-0 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-500 after:border-4 after:inline-block"></div>
                                <div className="absolute w-1/2 left-0 top-2.5 z-0 before:content-[''] before:w-full before:h-1 before:border-b before:border-blue-500 before:border-4 before:inline-block"></div>
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
            <div className='max-w-8xl mx-auto lg:px-10 px-4'>
                <p className='text-2xl font-semibold mt-10'>Hình thức thanh toán</p>
                <div className='grid grid-cols-3 gap-6 '>
                    <div className='lg:col-span-2 col-span-3 text-sm font-medium flex gap-4 flex-col border rounded p-6 my-8 bg-white shadow'>
                        {payment?.map((payment, index) => (
                            <div className='flex gap-2 items-center p-4 border border-gray-200 rounded'>
                                <input
                                    key={index}
                                    type="radio"
                                    name='radio'
                                    className='w-6 h-6 rounded-ful'
                                />
                                <p>{payment.title}</p>
                            </div>
                        ))}
                        <Link href={"/order/step2"} className='w-full py-4 text-center rounded-sm bg-orange-500 text-white hover:bg-orange-600'>
                            TIẾN HÀNH THANH TOÁN
                        </Link>
                    </div>

                    <div className='lg:col-span-1 col-span-3 border rounded p-6 my-8 h-fit bg-white shadow'>
                        <div className='flex justify-between border-b border-gray-300 py-4'>
                            <div className='font-semibold text-lg'>Đơn hàng: (1 khóa học)</div>
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
                </div>
            </div>
        </div>
    )
}

export default Step2Page 