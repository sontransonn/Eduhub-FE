import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getMyOrder } from '@/api/order.api'

export default function UserOrder() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMyOrder()
            setOrders(data)
        }

        fetchData()
    }, [])

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
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
                                        <Link href={"/"} className='flex'>
                                            <div className='ms-3 truncate w-96'>
                                                {order.items.map((item: { courseName: string }, index) => (
                                                    <div key={index}>
                                                        {item.courseName}
                                                    </div>
                                                ))}
                                            </div>
                                        </Link>
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
            </div>
        </div>
    )
}
