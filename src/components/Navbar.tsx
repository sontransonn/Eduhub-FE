import React from 'react';
import Link from 'next/link';

import navItems from '@/constants/navItems';

import {
    Carousel,
    CarouselContent, CarouselItem,
} from "@/components/ui/carousel"

const Navbar = () => {
    return (
        <nav className='bg-[#003555] select-none'>
            <div className='py-4 px-4 lg:px-14 text-white'>
                <Carousel className='w-full'>
                    <CarouselContent className='gap-4 cursor-pointer justify-between flex'>
                        {navItems.map((navItem, index) => (
                            <CarouselItem key={index} className="basis-auto hover:text-blue-500">
                                <Link href={`/course/${navItem.slug}`}>
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
