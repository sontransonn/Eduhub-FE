import React from 'react';
import Link from 'next/link';

import navItems from '@/constants/navItems';

import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

const Navbar = () => {
    return (
        <nav className='bg-[#003555] text-white select-none'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-4'>
                <Carousel className='w-full'>
                    <CarouselContent className='m-0 gap-4 cursor-pointer justify-between flex'>
                        {navItems.map((navItem, index) => (
                            <CarouselItem key={index} className="p-0 basis-auto hover:text-blue-500">
                                <Link href={`/category/${navItem.slug}`}>
                                    {navItem.title}
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </nav>
    )
}

export default Navbar
