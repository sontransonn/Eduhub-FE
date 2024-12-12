'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import Link from 'next/link';

import { MdKeyboardArrowRight } from "react-icons/md";

import { banners } from '@/constants/images';
import categories from '@/constants/categories';
interface Props {
    onClick: () => void;
    active: boolean;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomDot: React.FC<Props> = ({ onClick, active }) => {
    return (
        <li onClick={() => onClick()} className={`${active ? "active bg-orange-600" : "inactive bg-orange-300 opacity-40"}   w-[20px] h-[20px] rounded-full border-2 border-solid border-white inline-block mb-3 mx-1 cursor-pointer `} />
    );
};

export default function Banner() {
    return (
        <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 md:pt-8'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='xl:col-span-3 xl:block hidden'>
                    <ul className='relative w-full h-full bg-white flex flex-col shadow-custom'>
                        {categories?.map((category, index) => (
                            <li key={index} className="flex justify-between flex-1 items-center cursor-pointer hover:text-white hover:bg-[#01314e] group/item">
                                <Link href={`/category/${category.slug}`} className="relative h-full w-full px-4 flex items-center justify-between">
                                    <div className="flex items-center text-sm gap-2.5">
                                        {category.icon}
                                        {category.title}
                                    </div>
                                    <MdKeyboardArrowRight size={18} />
                                    <div className="absolute left-full z-[999] w-0 h-0 border-t-[25px] border-b-[25px] border-l-[25px] border-t-transparent border-b-transparent border-l-[#01314e] hidden group-hover/item:block"></div>
                                </Link>
                                <div className="absolute top-0 left-full ml-3 w-[calc(300%+24px)] bottom-0 z-[99] group-hover/item:block hidden shadow-custom">
                                    <div className='bg-white text-black grid grid-cols-5 h-full gap-4 p-4'>
                                        {category.subCategories?.map((subCategory: any, index) => (
                                            <div className='col-span-1 flex flex-col gap-2'>
                                                <Link href={`/category/${category.slug}/${subCategory.slug}`} className='font-semibold text-[#01314e]'>{subCategory.title}</Link>
                                                <ul className='text-sm'>
                                                    {subCategory.tags?.map((tag: any, index: number) => (
                                                        <li className='font-medium'>
                                                            <Link href={`/tag/${tag.slug}`} className='inline-block py-1.5'>
                                                                {tag.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='xl:col-span-9 col-span-12'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        customLeftArrow={<></>}
                        customRightArrow={<></>}
                        autoPlaySpeed={3000}
                        showDots={true}
                        customDot={<CustomDot onClick={() => { }} active={true} />}
                    >
                        {banners.map((src, index) => (
                            <div key={index} className="w-full aspect-video">
                                <img
                                    src={"https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/nutrime-livestream.png"}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

