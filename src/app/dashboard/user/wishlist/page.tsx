"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { FiSearch } from 'react-icons/fi'
import { TbJewishStarFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

export default function UserWishlist() {
    const [isLoading, setIsLoading] = useState(false); // Thêm trạng thái loading

    const { items } = useSelector((state: RootState) => state.wishlist);

    useEffect(() => {
        // Cập nhật trạng thái loading khi dữ liệu được tải
        if (!items.length) {
            setIsLoading(true);
        }
        setIsLoading(false);
    }, [items]);

    function calculateSalePrice(originalPrice: number, discountPercentage: number) {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    if (isLoading) {
        return <div className="flex text-gray-600">Đang tải dữ liệu...</div>;
    }

    if (items.length === 0) {
        return <div className="flex text-gray-600">Không có khóa học nào trong danh sách yêu thích.</div>;
    }

    return (
        <>
            <form action="" className='flex justify-end gap-4 text-sm'>
                <div className='flex relative border border-black rounded w-96'>
                    <input
                        type="text"
                        className='block w-full p-2.5 ps-4 text-sm rounded outline-none'
                        placeholder='Tìm kiếm khóa học'
                    />
                    <button className='p-[10px] bg-blue-700 text-white'>
                        <FiSearch size={18} />
                    </button>
                </div>
            </form>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-8'>
                {items.map((item, index) => (
                    <Link href={`/course/${item.slug}`} className='relative w-full flex flex-col gap-1.5' key={index}>
                        <div className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                            <img
                                className='rounded w-full h-full absolute inset-0'
                                src={item.poster}
                                alt="" />
                        </div>
                        <h3 className='font-medium line-clamp-2'>{item.courseName}</h3>
                        <div className='text-sm font-light'>Bùi Đức Tiến</div>
                        <div className='flex items-center text-sm gap-1.5'>
                            <span className='font-bold'>{item.rating}</span>
                            <div className='text-[#F77321] flex'>
                                <TbJewishStarFilled />
                                <TbJewishStarFilled />
                                <TbJewishStarFilled />
                                <TbJewishStarFilled />
                                <TbJewishStarFilled />
                            </div>
                            <div className='text-[#5C5C5C] text-xs'>(108)</div>
                        </div>
                        <div className='flex gap-1.5 items-center'>
                            <div className='text-xl font-medium'>
                                {calculateSalePrice(item.price, item.discount)?.toLocaleString('vi-VN')}
                                <sup>đ</sup>
                            </div>
                            <div className='text-sm line-through text-[#929292]'>
                                {item.price?.toLocaleString('vi-VN')}
                                <sup>đ</sup>
                            </div>
                        </div>
                        <div className='absolute top-2 right-2'>
                            <FaHeart color='#006ecc' size={24} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
