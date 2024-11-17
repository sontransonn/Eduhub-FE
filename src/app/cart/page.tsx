'use client'
import React, { useState } from "react"
import Link from "next/link"

import { FaTrashAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import CourseCard from "@/components/card/CourseCard";

const CartPage = () => {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 py-8'>
                <h3 className='text-semibold text-2xl mb-6'>Giỏ hàng</h3>

                {/* Nếu không có sản phẩm trong giỏ hàng */}
                {/* <div className='text-center py-24'>
                    <p className='mb-6'>Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm một khóa học!</p>
                    <Link href={"/"} className="block w-fit mx-auto btn bg-[#1782FB] hover:bg-blue-600 text-white font-medium px-8 py-4 fit-width">
                        Tiếp tục mua sắm
                    </Link>
                </div> */}

                {/* Nếu có sản phẩm trong giỏ hàng */}
                <div className="grid grid-cols-3 md:gap-16">
                    {/* Thông tin các sản phẩm có trong giỏ hàng */}
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
                                <img
                                    src="https://static.unica.vn/upload/images/2024/02/cat-ghep-Banner-Poster-san-pham-don-giang-bang-Photoshop.jpg_m_1709088443.jpg"
                                    alt=""
                                    className="md:h-[72px] md:w-32 h-16 w-16 rounded object-cover"
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

                    {/* Thanh toán */}
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

                {/* Bạn có thể quan tâm */}
                <div className="mt-6">
                    <h3 className="uppercase text-xl mb-4">Bạn có thể quan tâm</h3>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Link href={"/"} className="col">
                                <CourseCard />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage