import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function MainBanner() {
    return (
        <Carousel className="w-full py-4 px-10">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <img
                            className='w-full'
                            src="https://file.unica.vn/storage/db240c65c57e0a4f35edba3312c62511cbac63cc/thiet-ke-chua-co-ten.jpg"
                            alt=""
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
