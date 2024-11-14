'use client'
import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";

import { banners } from '@/constants/images';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    customPaging: (i: number) => (
        <div className="custom-rect-dot"></div>
    ),
    appendDots: (dots: any) => (
        <ul style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            {dots}
        </ul>
    ),
};

const Banner = () => {
    return (
        <div id='banner'>
            <div className='max-w-8xl mx-auto relative md:pt-4 pt-0 overflow-hidden'>
                <Slider {...settings}>
                    {banners?.map((banner, index) => (
                        <div key={index} className='max-h-[500px] overflow-hidden'>
                            <Image
                                src={banner}
                                alt="Banner"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner
