'use client'
import React from 'react'
import Link from "next/link"

import { FaTrashAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import CourseCard from "@/components/card/CourseCard";
import Image from 'next/image';

export default function Cart() {
    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                <div className=" flex flex-col gap-6">
                    <h3 className='font-medium text-2xl'>Giỏ hàng</h3>

                    {/* <div className='text-center py-24'>
                <p className='mb-6'>Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm một khóa học!</p>
                <Link href={"/"} className="block w-fit mx-auto btn bg-[#1782FB] hover:bg-blue-600 text-white font-medium px-8 py-4 fit-width">
                    Tiếp tục mua sắm
                </Link>
            </div> */}

                    <div className="grid grid-cols-3 md:gap-16">
                        <div className="lg:col-span-2 col-span-3">
                            <div className="flex items-center mb-6 justify-between">
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    <span className="text-sm font-medium text-[#656565]">
                                        CHỌN TẤT CẢ (1 SẢN PHẨM)
                                    </span>
                                </div>
                                <div className="flex h-8 hover:text-red-500 cursor-pointer items-center gap-1 text-[#656565]">
                                    <FaTrashAlt size={18} />
                                    <span className="text-sm font-medium">XÓA</span>
                                </div>
                            </div>

                            <div className="flex mb-4 justify-between gap-2">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 cursor-pointer flex-shrink-0"
                                />
                                <div className="flex gap-2 flex-1">
                                    <Image
                                        src=""
                                        alt=""
                                        width={128}
                                        height={64}
                                        className="rounded object-cover"
                                    />
                                    <Link href={"/"} className="flex-1 px-2">
                                        <h3 className="font-medium mb-3">
                                            Cắt ghép Banner, Poster
                                        </h3>
                                        <div className="flex gap-2 mb-3">
                                            <div className="flex items-center gap-1">
                                                <div className="text-sm font-medium">4.6</div>
                                                <div className="text-[#F77321] flex gap-0.5">
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
                                            <button className=" text-[#006CCB] hover:text-red-500">Xóa</button>
                                        </div>
                                        <div className="mb-4 md:ms-14 text-right">
                                            <div className="font-medium text-lg">299.000<sup>đ</sup></div>
                                            <div className="line-through text-[#929292]">800.000<sup>đ</sup></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1 col-span-3">
                            <h4 className="text-lg font-bold mb-4">
                                THÔNG TIN ĐƠN HÀNG
                            </h4>
                            <div className="flex justify-between gap-10 mb-4">
                                <div className="flex flex-1 items-center justify-between text-sm">
                                    <span className="text-sm">
                                        Tạm tính (1 sản phẩm)
                                    </span>
                                    <span className="text-base">299.000<span>đ</span></span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-10 mb-4 pt-4 border-t-2">
                                <div className="flex-1 text-sm flex items-center">Tổng cộng:</div>
                                <div className="text-[#F77321] text-2xl font-medium">
                                    <span>299.000<span>đ</span></span>
                                </div>
                            </div>
                            <Link href={"/order/step1"} className="block text-center w-full bg-[#E66B22] text-white rounded-sm font-bold py-4 hover:bg-orange-600">
                                THANH TOÁN
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="uppercase text-xl">Bạn có thể quan tâm</h3>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Link href={"/"} className="col" key={index}>
                                    <CourseCard courseName='' rating='' price={9} discount={5} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
