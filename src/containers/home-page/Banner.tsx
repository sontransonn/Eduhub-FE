'use client'
import React from 'react'
import Carousel from "react-multi-carousel";

import { banners } from '@/constants/images';
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
        <div className='max-w-8xl mx-auto px-0 xl:px-20 lg:px-10 md:px-10 md:pt-8'>
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
                    <div key={index} className="w-full aspect-[16:9]">
                        <img
                            src={"https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/nutrime-livestream.png"}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

