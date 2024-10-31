import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const categories = [
    "Tin học văn phòng",
    "Thiết kế",
    "Ngoại ngữ",
    "Marketing",
    "Tài chính kế toán",
    "Công nghệ",
    "Sức khỏe - làm đẹp",
    "Hôn nhân gia đình",
    "Sách hay nên đọc",
    "Đào tạo inhouse"
];

export default function CategoryMenu() {

    const toSlug = (category: String) => category.toLowerCase().replace(/ /g, "-");

    return (
        <nav className='bg-[#003555] select-none'>
            <div className='py-4 px-4 lg:px-6 flex relative overflow-hidden lg:overflow-visible text-white'>
                <div className='w-full justify-center relative flex flex-row gap-12 overflow-hidden'>
                    <Carousel>
                        <CarouselContent className='gap-4 cursor-pointer'>
                            {categories.map((category, index) => (
                                <CarouselItem key={index} className="basis-auto hover:text-blue-500">
                                    <Link href={`/course/${toSlug(category)}`}>
                                        {category}
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </nav>
    )
}
