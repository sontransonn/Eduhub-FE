"use client"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { RootState } from "@/redux/store";

import { addToWishlist, removeFromWishlist } from "@/redux/slices/wishlistSlice";
import { removeFromCart } from "@/redux/slices/cartSlice";
import { addToCart } from "@/redux/slices/cartSlice";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";
import { TbClockHour9 } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import { PiWarningCircleBold } from "react-icons/pi";

import { handleAddRemoveWithWishlist } from "@/api/wishlist.api";
import { handleAddRemoveWithCart } from "@/api/cart.api";

import { CourseProps } from "@/types/course.type";

export default function PurchaseCard({ currentCourse }: { currentCourse: CourseProps }) {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { items: cartItems } = useSelector((state: RootState) => state.cart);
    const { items: wishlistItems } = useSelector((state: RootState) => state.wishlist)

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("body-no-scroll");
        } else {
            document.body.classList.remove("body-no-scroll");
        }

        return () => {
            document.body.classList.remove("body-no-scroll");
        };
    }, [isModalOpen]);

    const calculateSalePrice = (originalPrice: number, discountPercentage: number) => {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    const handleAddRemoveWishlist = async (currentCourse: CourseProps) => {
        const isInWishlist = wishlistItems.some(item => item._id === currentCourse._id);

        try {
            const data = await handleAddRemoveWithWishlist(currentCourse._id)

            if (isInWishlist) {
                dispatch(removeFromWishlist(currentCourse._id));
                toast.success(data.message);
            } else {
                dispatch(addToWishlist({
                    _id: currentCourse._id,
                    courseName: currentCourse.courseName,
                    slug: currentCourse.slug,
                    rating: currentCourse.rating,
                    poster: currentCourse.poster,
                    price: currentCourse.price,
                    discount: currentCourse.discount,
                }));
                toast.success(data.message);
            }
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

    const handleAddRemoveCart = async (currentCourse: CourseProps) => {
        const isInCart = cartItems.some(item => item._id === currentCourse._id);

        if (isInCart) {
            setIsModalOpen(true);
            return;
        }

        try {
            await handleAddRemoveWithCart(currentCourse._id)
            dispatch(addToCart({
                _id: currentCourse._id,
                courseName: currentCourse.courseName,
                slug: currentCourse.slug,
                poster: currentCourse.poster,
                rating: currentCourse.rating,
                price: currentCourse.price,
                discount: currentCourse.discount
            }));
            toast.success('Đã thêm sản phẩm vào giỏ hàng');
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

    const handleConfirmRemove = async () => {
        try {
            await handleAddRemoveWithCart(currentCourse._id);
            dispatch(removeFromCart(currentCourse._id));
            toast.success('Đã xóa sản phẩm khỏi giỏ hàng');
            setIsModalOpen(false);
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

    const salePrice = calculateSalePrice(currentCourse.price, currentCourse.discount);

    return (
        <>
            <div className='md:px-10 md:py-4 lg:p-4 px-4 py-6 md:bg-white lg:sticky top-28 z-20 lg:-mt-2 flex flex-col gap-4 rounded border-b shadow-custom'>
                <div className='flex items-center justify-between'>
                    <div className='text-3xl lg:flex-col lg:gap-1 xl:flex-row font-semibold flex gap-2'>
                        <span>{salePrice?.toLocaleString('vi-VN')}đ</span>
                        <span className='text-[#929292] line-through text-lg'>{currentCourse.price?.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <span className='font-light flex-shrink-0'>
                        Giảm {currentCourse.discount}%
                    </span>
                </div>

                {/* Thêm vào giỏ hàng */}
                <div className='flex gap-2'>
                    <button className='w-full py-3 bg-[#E66B22] text-white rounded-sm hover:bg-orange-600 cursor-pointer font-semibold' onClick={() => handleAddRemoveCart(currentCourse)}>
                        {cartItems.some(item => item._id === currentCourse._id) ? 'ĐÃ THÊM VÀO GIỎ' : 'THÊM VÀO GIỎ HÀNG'}
                    </button>
                    <div className='flex justify-center items-center p-2.5 border border-solid border-slate-300 rounded-sm cursor-pointer hover:bg-slate-200' onClick={() => handleAddRemoveWishlist(currentCourse)}>
                        {wishlistItems.some(item => item._id === currentCourse._id) ? <FaHeart size={28} color="#006fd3" /> : <FaRegHeart size={28} />}
                    </div>
                </div>

                {/* Mua Ngay */}
                <button className='w-full py-3 bg-[#1882fc] text-white rounded-sm hover:bg-blue-600 cursor-pointer font-semibold'>
                    MUA NGAY
                </button>

                {/*  */}
                <ul className='flex flex-col gap-3 text-sm md:order-none order-last'>
                    <li className='flex gap-2 items-center'>
                        <HiOutlineVideoCamera size={20} />
                        Thời lượng:
                        <span className='font-semibold'>{" "}07 giờ 15 phút</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <LuClipboardList size={20} />
                        Giáo trình:
                        <span className='font-semibold'>{" "}29 bài giảng</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <TbClockHour9 size={20} />
                        Sở hữu khóa học trọn đời
                    </li>
                    <li className='flex gap-2 items-center'>
                        <PiCertificateBold size={20} />
                        Cấp chứng chỉ hoàn thành
                    </li>
                </ul>

                <div className='flex gap-2'>
                    <input
                        type="text"
                        placeholder='Nhập mã giảm giá'
                        className='border border-solid border-[#3333] w-full rounded-sm p-3 text-sm outline-none bg-[#f9fafc]'
                    />
                    <button className='flex min-w-max justify-center items-center p-2.5 border border-solid border-[#3333] rounded-sm cursor-pointer hover:bg-slate-200'>
                        Áp dụng
                    </button>
                </div>
                <div className="md:border-none border border-gray-300 bg-white px-3 py-4 md:p-0 rounded">
                    <button className="rounded-[4px] mb-4 w-full block text-center py-1.5 border border-black hover:bg-[#1782FB] hover:text-[#fff] hover:border-[#fff]">Đăng ký cho doanh nghiệp</button>
                    <span className="font-light text-sm">Giúp nhân viên của bạn truy cập không giới hạn 500 khóa học, mọi lúc, mọi nơi</span>
                </div>
            </div>

            {isModalOpen && (
                <>
                    <div className="overlay"></div>
                    <div className="fixed top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center z-[999]">
                        <div className="flex flex-col gap-6 items-center py-10 bg-white rounded-lg shadow-lg xl:w-1/3 lg:w-1/2 md:w-2/3 w-[90%]">
                            <PiWarningCircleBold size={100} color="#f8bb87" />
                            <p className="text-center text-3xl px-[30px] text-[#535353] font-medium">
                                Bạn chắc chắn muốn bỏ khóa học này chứ?
                            </p>
                            <div className="flex justify-center gap-4 text-white">
                                <button onClick={handleConfirmRemove} className="bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded">
                                    Xóa khóa học
                                </button>
                                <button onClick={() => setIsModalOpen(false)} className="bg-red-500 hover:bg-red-600 px-4 py-2.5 rounded">
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
