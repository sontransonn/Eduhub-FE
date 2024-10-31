import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function MainBanner() {
    return (
        <Carousel className="w-full md:py-4 lg:px-10 overflow-hidden">
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <img
                            className='w-full lg:rounded-sm'
                            src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/thiet-ke-chua-co-ten.jpg"
                            alt=""
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
