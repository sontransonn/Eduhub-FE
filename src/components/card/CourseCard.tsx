import React from 'react'

import { FaStar } from "react-icons/fa6";

type CourseCardProps = {
    courseName: string,
    instructorName: string,
    rating: string,
    price: number,
    discount: number
};

export default function CourseCard({ courseName, instructorName, rating, price, discount }: CourseCardProps) {
    const salePrice = calculateSalePrice(price, discount);

    function calculateSalePrice(originalPrice: number, discountPercentage: number) {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    return (
        <div className='w-full flex flex-col gap-1.5'>
            <div className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                <img
                    className='rounded w-full h-full absolute inset-0'
                    src="https://i.imgur.com/kFLuGCR.jpeg"
                    alt="" />
            </div>
            <h3 className='font-medium line-clamp-2'>{courseName}</h3>
            <div className='text-sm font-light'>{instructorName || "Tran duc son"}</div>
            <div className='flex items-center text-sm gap-1.5'>
                <span className='font-bold'>{rating}</span>
                <div className='text-[#F77321] flex'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='text-[#5C5C5C]'>(108)</div>
            </div>
            <div className='flex gap-1.5 items-center'>
                <div className='text-xl font-medium'>
                    {salePrice?.toLocaleString('vi-VN')}
                    <sup>đ</sup>
                </div>
                <div className='text-sm line-through text-[#929292]'>
                    {price?.toLocaleString('vi-VN')}
                    <sup>đ</sup>
                </div>
            </div>
        </div>
    )
}
