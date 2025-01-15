"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

import { FaRegCheckCircle } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";

import { getOrderById } from '@/api/order.api';
import Link from 'next/link';

export default function Order() {
    const searchParams = useSearchParams();
    const oid = searchParams.get('oid');

    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [orderDetail, setOrderDetail] = useState({
        items: [],
        totalAmount: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!oid) {
                    console.error('Order ID is missing');
                    return;
                }
                const data = await getOrderById(oid)
                setOrderDetail(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [oid])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer); // Stop the timer when it reaches 0
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); // Update the countdown every second

        return () => clearInterval(timer); // Cleanup the interval when component unmounts
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return (
        <main className='bg-[#F1F5F8] text-black'>
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

            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 py-4'>
                <div className='flex flex-col items-center gap-5 bg-white p-5 shadow'>
                    <FaRegCheckCircle size={50} color='#01ba09' />
                    <h3 className='font-medium text-xl'>ĐẶT HÀNG THÀNH CÔNG!</h3>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='pb-2'>Vui lòng chuyển khoản trong 15 phút để giữ ưu đãi!!!</span>
                        <div className='text-xl font-bold text-red-600 flex justify-center'>
                            {formattedTime} {/* Hiển thị thời gian đếm ngược */}
                        </div>
                    </div>
                    <div className="overflow-x-auto self-stretch">
                        <table className="w-full table-auto border-collapse border border-gray-300">
                            <tbody>
                                <tr className="border-t border-b border-gray-300">
                                    <td className="p-2 font-bold text-gray-800 text-center border-r border-solid border-gray-300">Tên tài khoản</td>
                                    <td className="p-2 font-bold text-gray-800">Công ty cổ phần đào tạo trực tuyến Eduhub CT6B</td>
                                </tr>
                                <tr className="border-t border-b border-gray-300">
                                    <td className="p-2 font-bold text-gray-800 text-center border-r border-solid border-gray-300">Nội dung</td>
                                    <td className="p-2 font-bold text-gray-800 border-r border-solid border-gray-300">Thanh toán đơn hàng {oid}</td>
                                </tr>
                                <tr className="border-t border-b border-gray-300">
                                    <td className="p-2 font-bold text-gray-800 text-center border-r border-solid border-gray-300">Số tiền</td>
                                    <td className="p-2 font-bold text-gray-800">{orderDetail.totalAmount?.toLocaleString('vi-VN')}đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="overflow-x-auto self-stretch">
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#888888]">
                                    <th className="p-2 text-center font-bold text-gray-700 w-80">Số tài khoản</th>
                                    <th className="p-2 text-center font-bold text-gray-700">Ngân hàng</th>
                                    <th className="p-2 text-center font-bold text-gray-700 w-80">Mã QR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-b border-gray-200">
                                    <td className="p-2 font-medium text-gray-800 text-center">1210967966</td>
                                    <td className="p-2 text-gray-600 text-center">BIDV - chi nhánh Học Viện Kỹ Thuật Mật Mã</td>
                                    <td className="p-2 text-gray-800 flex items-center justify-center">
                                        <button className='bg-green-600 hover:bg-green-700 py-[6px] px-3 rounded-sm text-sm text-white flex items-center gap-1.5'>
                                            <FaQrcode />
                                            Xem
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-t border-b border-gray-200">
                                    <td className="p-2 font-medium text-gray-800 text-center">0943192828</td>
                                    <td className="p-2 text-gray-600 text-center">MB - chi nhánh Học Viện Kỹ Thuật Mật Mã</td>
                                    <td className="p-2 text-gray-800 flex items-center justify-center">
                                        <button className='bg-green-600 hover:bg-green-700 py-[6px] px-3 rounded-sm text-sm text-white flex items-center gap-1.5'>
                                            <FaQrcode />
                                            Xem
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-t border-b border-gray-200">
                                    <td className="p-2 font-medium text-gray-800 text-center">833310122003</td>
                                    <td className="p-2 text-gray-600 text-center">MB - chi nhánh Học Viện Kỹ Thuật Mật Mã</td>
                                    <td className="p-2 text-gray-800 flex items-center justify-center">
                                        <button className='bg-green-600 hover:bg-green-700 py-[6px] px-3 rounded-sm text-sm text-white flex items-center gap-1.5'>
                                            <FaQrcode />
                                            Xem
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link href={`/pay?oid=${oid}`} className='w-full py-4 text-center rounded-sm bg-orange-500 text-white hover:bg-orange-600'>
                        THANH TOÁN NGAY
                    </Link>
                </div>
            </div>
        </main>
    )
}
