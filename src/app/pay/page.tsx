"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'

import payment from '@/constants/payments'

import { FaPenToSquare } from "react-icons/fa6";

import { momo, zalopay } from '@/api/payment.api';
import { getOrderById } from '@/api/order.api';

import { CourseProps } from '@/types/course.type';

export default function Pay() {
    const searchParams = useSearchParams();
    const oid = searchParams.get('oid');

    const [orderDetail, setOrderDetail] = useState({
        items: [],
        totalAmount: 0
    })
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

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

    const handlePayment = async () => {
        if (!selectedPaymentMethod) {
            alert("Please select a payment method");
            return;
        }

        try {
            if (selectedPaymentMethod === 'momo') {
                if (!oid) {
                    console.error('Order ID is missing');
                    return;
                }

                const data = await momo(oid);
                if (data && data.payUrl) {
                    window.location.href = data.payUrl;
                } else {
                    alert("Không thể tạo giao dịch thanh toán MoMo.");
                }
            } else if (selectedPaymentMethod === 'zalopay') {
                if (!oid) {
                    console.error('Order ID is missing');
                    return;
                }
                const data = await zalopay(oid);
                if (data && data.order_url) {
                    window.location.href = data.order_url;
                } else {
                    alert("Không thể tạo giao dịch thanh toán ZaloPay.");
                }
            } else {
                alert("Phương thức thanh toán không hợp lệ.");
            }
        } catch (err) {
            console.error("Error initiating payment: ", err);
            alert("Đã xảy ra lỗi trong quá trình thanh toán.");
        }
    };

    const calculateSalePrice = (originalPrice: number, discountPercentage: number) => {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    return (
        <div className='bg-[#F1F5F8] text-black'>
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

            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 py-4'>
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='lg:col-span-2 col-span-3 text-sm font-medium flex gap-4 flex-col border rounded p-6 bg-white shadow'>
                            <h3 className='font-semibold text-lg'>Chọn phương thức thanh toán</h3>
                            {payment?.map((payment, index) => (
                                <div className='flex gap-2 items-center justify-between p-4 border border-gray-200 rounded' key={index}>
                                    <div className='flex gap-2 items-center'>
                                        <input
                                            key={index} type="radio"
                                            name='radio' value={payment.value}
                                            className='w-6 h-6 rounded-ful'
                                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                        />
                                        <p>{payment.title}</p>
                                    </div>
                                    <Image width={25} height={25} src={payment.img} alt="" />
                                </div>
                            ))}
                            <button className='w-full py-4 text-center rounded-sm bg-orange-500 text-white hover:bg-orange-600' onClick={handlePayment}>
                                TIẾN HÀNH THANH TOÁN
                            </button>
                        </div>

                        <div className='lg:col-span-1 col-span-3 border rounded p-6 h-fit bg-white shadow flex flex-col gap-4'>
                            <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
                                <div className='font-semibold text-lg'>Đơn hàng: ({orderDetail.items?.length} khóa học)</div>
                                <div className='flex items-center gap-1.5 cursor-pointer'>
                                    <FaPenToSquare />
                                    <Link href={"/cart"} className='text-sm'>Sửa</Link>
                                </div>
                            </div>
                            {orderDetail.items?.map((item: CourseProps, index: number) => (
                                <div key={index} className='flex gap-6 border-b border-gray-300 pb-4 cart-course'>
                                    <div className='flex-auto'>{item?.courseName}</div>
                                    <div className='flex-1'>
                                        <div className='text-right'>
                                            <p className='text-base'>{calculateSalePrice(item?.price, item?.discount)?.toLocaleString('vi-VN')}<sup>đ</sup></p>
                                            <span className='line-through text-sm text-[#929292]'>{item?.price?.toLocaleString('vi-VN')}<sup>đ</sup></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='flex justify-between font-semibold'>
                                <p>Tổng cộng:</p>
                                <span className='text-right text-[#E66B22]'>{orderDetail.totalAmount?.toLocaleString('vi-VN')}<sup>đ</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
