import CourseCard from "@/components/card/CourseCard"
import Link from "next/link"
import { CourseListProps } from "@/types/CourseListProps"

export default function CourseList({ title }: CourseListProps) {
    return (
        <div>
            <div className='w-full px-4 mx-auto max-w-8xl lg:px-20 md:px-10 pt-12'>
                <div className='w-full flex justify-between'>
                    <h4 className='uppercase font-semibold text-2xl'>{title}</h4>
                    <Link className="flex items-center text-sm" href={"/live"}>
                        Xem thêm
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 hidden">
                    <div className="col">
                        <CourseCard />
                    </div>
                    <div className="col">
                        <CourseCard />
                    </div>
                    <div className="col">
                        <CourseCard />
                    </div>
                    <div className="col">
                        <CourseCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
