"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast';

import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

import { getMyOrder } from '@/api/order.api'

export default function UserOrder() {
    const [orders, setOrders] = useState([])
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMyOrder()
                setOrders(data)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    console.error('Failed:', error.message);
                } else {
                    toast.error('An unknown error occurred');
                    console.error('Failed with an unknown error');
                }
            }
        }

        fetchData()
    }, [])

    const toggleExpand = (orderId: string) => {
        setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
    };

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 shadow'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-1/4'></th>
                        <th scope='col' className='px-6 py-3'>Ngày</th>
                        <th scope='col' className='px-6 py-3'>Tổng giá</th>
                        <th scope='col' className='px-6 py-3 whitespace-nowrap'>Loại thanh toán</th>
                        <th scope='col' className='px-6 py-3 whitespace-nowrap'>Trạng thái</th>
                        <th scope='col' className='px-6 py-3'></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: { _id: string, items: [], createdAt: string, totalAmount: number, paymentStatus: string }, index) => (
                        <tr className='bg-white border-b hover:bg-gray-50' key={index}>
                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                <div className='truncate w-96 flex items-center gap-3'>
                                    {Number(order.items.length) === 1 ? (
                                        <>
                                            <PiShoppingCartFill size={24} color='#68737f' />
                                            {order.items.map((item: { courseName: string, slug: string }, index) => (
                                                <Link href={`/course/${item.slug}`} key={index}>
                                                    {item.courseName}
                                                </Link>
                                            ))}
                                        </>
                                    ) : Number(order.items.length) > 1 ? (
                                        <div className='flex flex-col gap-2'>
                                            <button className='flex gap-3 w-96 py-5 items-center text-base text-gray-900 rounded-lg group bg-[#f2f2f2]' onClick={() => toggleExpand(order._id)}>
                                                <PiShoppingCartFill size={24} color='#68737f' />
                                                {order.items.length} khóa học
                                                {expandedOrderId === order._id ? (
                                                    <MdOutlineKeyboardArrowUp size={24} />
                                                ) : (
                                                    <MdOutlineKeyboardArrowDown size={24} />
                                                )}
                                            </button>
                                            {expandedOrderId === order._id && (
                                                <div className='flex flex-col gap-2'>
                                                    {order.items.map((item: { courseName: string, slug: string }, index) => (
                                                        <Link href={`/course/${item.slug}`} key={index} className='bg-[#f2f2f2] p-2 pl-9 rounded-lg'>{item.courseName}</Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            </th>
                            <td className='px-6 py-4'>{formatDate(order.createdAt)}</td>
                            <td className='px-6 py-4'>{order.totalAmount?.toLocaleString('vi-VN')}đ</td>
                            <td className='px-6 py-4'></td>
                            <td className='px-6 py-4'>
                                <div className='py-1 whitespace-nowrap w-auto px-4 bg-[#a94442] text-center text-white'>{order.paymentStatus}</div>
                            </td>
                            <td className='px-6 py-4 text-right'>
                                {order.paymentStatus !== "Paid" && <Link href={`/pay?oid=${order._id}`} className='block font-medium text-blue-600 hover:underline w-max'>Thanh toán</Link>}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='py-6 flex justify-center bg-gray-50'></tfoot>
            </table>
        </div>
    )
}
