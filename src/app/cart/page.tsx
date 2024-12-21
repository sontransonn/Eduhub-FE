'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import toast from 'react-hot-toast';

import { RootState } from '@/redux/store';

import { removeFromCart } from '@/redux/slices/cartSlice';

import { FaTrashAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import CourseCard from "@/components/card/CourseCard";

import { createOrder } from '@/api/order.api';
import { handleAddRemoveWithCart } from '@/api/cart.api';

export default function Cart() {
    const router = useRouter();
    const dispatch = useDispatch()

    const [selectedCourses, setSelectedCourses] = useState<(number | string)[]>([]);

    const { items, quantity } = useSelector((state: RootState) => state.cart);

    const calculateSalePrice = (originalPrice: number, discountPercentage: number) => {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            const allIds = items.map(item => item._id);
            setSelectedCourses(allIds);
        } else {
            setSelectedCourses([]);
        }
    };

    const handleSelectItem = (id: string, isChecked: boolean) => {
        if (isChecked) {
            setSelectedCourses(prev => [...prev, id]);
        } else {
            setSelectedCourses(prev => prev.filter(itemId => itemId !== id));
        }
    };

    const calculateTotal = () => {
        return items
            .filter((course) => selectedCourses.includes(course._id))
            .reduce((total, course) => {
                const discountedPrice = course.price - (course.price * course.discount) / 100;
                return total + discountedPrice;
            }, 0);
    };

    const handleCreateOrder = async (courseIds: (number | string)[]) => {
        try {
            const data = await createOrder(courseIds)
            toast.success(data.message)
            const queryString = new URLSearchParams({ data: JSON.stringify(data.data) }).toString();
            router.push(`/cart/success-payment?${queryString}`);
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

    const handleConfirmRemove = async (currentCourse: { _id: string }) => {
        try {
            await handleAddRemoveWithCart(currentCourse._id);
            dispatch(removeFromCart(currentCourse._id));
            toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
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

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                <div className=" flex flex-col gap-6">
                    <h3 className='font-medium text-2xl'>Giỏ hàng</h3>

                    {items.length == 0 ? (
                        <div className='text-center py-24'>
                            <p className='mb-6'>Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm một khóa học!</p>
                            <Link href={"/"} className="block w-fit mx-auto btn bg-[#1782FB] hover:bg-blue-600 text-white font-medium px-8 py-4 fit-width">
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-3 md:gap-16">
                                <div className="lg:col-span-2 col-span-3">
                                    <div className="flex items-center mb-6 justify-between">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 cursor-pointer"
                                                checked={selectedCourses.length === items.length && items.length > 0}
                                                onChange={(e) => handleSelectAll(e.target.checked)}
                                            />
                                            <span className="text-sm font-medium text-[#656565]">
                                                CHỌN TẤT CẢ ({quantity} SẢN PHẨM)
                                            </span>
                                        </div>
                                        <div className="flex h-8 hover:text-red-500 cursor-pointer items-center gap-1 text-[#656565]">
                                            <FaTrashAlt size={18} />
                                            <span className="text-sm font-medium">XÓA</span>
                                        </div>
                                    </div>

                                    {items.map((item, index) => (
                                        <div className="flex mb-4 justify-between gap-2" key={index}>
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 cursor-pointer flex-shrink-0"
                                                checked={selectedCourses.includes(item._id)}
                                                onChange={(e) => handleSelectItem(item._id, e.target.checked)}
                                            />
                                            <div className="flex gap-2 flex-1">
                                                <img
                                                    src={item.poster} alt=""
                                                    width={128} height={64}
                                                    className="rounded object-cover"
                                                />
                                                <Link href={`/course/${item.slug}`} className="flex-1 px-2">
                                                    <h3 className="font-medium mb-3">
                                                        {item.courseName}
                                                    </h3>
                                                    <div className="flex gap-2 mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <div className="text-sm font-medium">{item.rating}</div>
                                                            <div className="text-[#F77321] flex gap-0.5">
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                            </div>
                                                            <div className="text-xs text-[#5C5C5C]">(35 đánh giá)</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm mb-3">
                                                        29 bài giảng - 07 giờ 38 phút
                                                    </div>
                                                </Link>
                                                <div className="flex md:flex-row flex-col">
                                                    <div className="md:order-first order-last text-right">
                                                        <button className=" text-[#006CCB] hover:text-red-500" onClick={() => handleConfirmRemove(item)}>Xóa</button>
                                                    </div>
                                                    <div className="mb-4 md:ms-14 text-right">
                                                        <div className="font-medium text-lg">{calculateSalePrice(item.price, item.discount)?.toLocaleString('vi-VN')}<sup>đ</sup></div>
                                                        <div className="line-through text-[#929292]">{item.price?.toLocaleString('vi-VN')}<sup>đ</sup></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="lg:col-span-1 col-span-3">
                                    <h4 className="text-lg font-bold mb-4">
                                        THÔNG TIN ĐƠN HÀNG
                                    </h4>
                                    <div className="flex justify-between gap-10 mb-4">
                                        <div className="flex flex-1 items-center justify-between text-sm">
                                            <span className="text-sm">
                                                Tạm tính ({selectedCourses.length} sản phẩm)
                                            </span>
                                            <span className="text-base">{calculateTotal()?.toLocaleString('vi-VN')}<span>đ</span></span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-10 mb-4 pt-4 border-t-2">
                                        <div className="flex-1 text-sm flex items-center">Tổng cộng:</div>
                                        <div className="text-[#F77321] text-2xl font-medium">
                                            <span>{calculateTotal()?.toLocaleString('vi-VN')}<span>đ</span></span>
                                        </div>
                                    </div>
                                    <button className="block text-center w-full bg-[#E66B22] text-white rounded-sm font-bold py-4 hover:bg-orange-600" onClick={() => handleCreateOrder(selectedCourses)}>
                                        ĐẶT HÀNG NGAY
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="uppercase text-xl">Bạn có thể quan tâm</h3>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <Link href={"/"} className="col" key={index}>
                                            <CourseCard poster='' courseName='' ratingNum={9} rating='' price={9} discount={5} instructorName='' />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}
