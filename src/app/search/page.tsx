"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import toast from 'react-hot-toast';

import { IoIosArrowDown } from 'react-icons/io'
import { RiErrorWarningLine, RiFilter3Fill } from 'react-icons/ri'
import { TbJewishStarFilled } from "react-icons/tb";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"

import { searchCourse } from '@/api/course.api';

import { CourseProps } from '@/types/course.type';

export default function Search() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("key");

    const [results, setResults] = useState([]);
    const [isFilter, setIsFilter] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const [showMenuSortBy, setShowMenuSortBy] = useState(false)
    const [totalCourse, setTotalCourse] = useState(0)

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (keyword) {
                    const data = await searchCourse(keyword, currentPage);
                    setResults(data.data.courses);
                    setTotalPages(data.data.totalPages);
                    setTotalCourse(data.data.total)
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    console.error('Failed:', error.message);
                } else {
                    toast.error('An unknown error occurred');
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchSearchResults()
    }, [keyword, currentPage])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [currentPage]);

    const calculateSalePrice = (originalPrice: number, discountPercentage: number) => {
        const remainingPercentage = 100 - discountPercentage;
        const salePrice = originalPrice * (remainingPercentage / 100);
        return salePrice;
    }

    const handleSortBy = (type: string) => {
        setShowMenuSortBy(false)
        console.log(type);

        setCurrentPage(2)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-medium text-2xl'>{totalCourse} kết quả cho &quot;{keyword}&quot;</h4>
                        <div className='flex items-center gap-3'>
                            <div className='flex bg-white gap-2 items-center py-4 px-5 border border-solid border-black rounded-sm' onClick={() => setIsFilter(prev => !prev)}>
                                <RiFilter3Fill size={24} />
                                Bộ lọc
                            </div>
                            <div className='relative flex self-stretch bg-white gap-7 items-center str px-5 border border-solid border-black rounded-sm cursor-pointer' onClick={() => setShowMenuSortBy(prev => !prev)}>
                                <div className='flex flex-col text-xs'>
                                    <span className='font-semibold'>Sắp xếp theo</span>
                                    <span>Học nhiều nhất</span>
                                </div>
                                <IoIosArrowDown />
                                {showMenuSortBy && (
                                    <ul className='z-10 rounded-sm absolute top-[120%] right-0 py-2 bg-white w-full text-sm shadow'>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("learn-most")}>Học nhiều nhất</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("rating")}>Đánh giá cao</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("new")}>Mới nhất</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("price-low")}>Giá thấp đến cao</li>
                                        <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleSortBy("price-high")}>Giá cao đến thấp</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4 border w-full border-black items-center pl-4 pr-2 py-4 rounded font-semibold lg:text-lg text-base flex-wrap justify-center lg:justify-start'>
                        <RiErrorWarningLine size={28} />
                        <span>Bạn không biết chắc? Tất cả các khóa học đều được đảm bảo hoàn tiền trong 07 ngày</span>
                    </div>

                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                        {isFilter && (
                            <div className='col-span-1'>
                                <Accordion defaultValue={["item-1", "item-2"]} type="multiple" className="w-full">
                                    {/* Đánh giá */}
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='accordion-trigger text-base font-bold border-t border-solid border-black hover:no-underline'>
                                            <div className={"w-full flex justify-between items-center"}>
                                                <span>Đánh giá</span>
                                                <IoIosArrowDown />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-2.5'>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                    </div>
                                                    Từ 4.5 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} />
                                                    </div>
                                                    Từ 4.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                    </div>
                                                    Từ 3.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                    </div>
                                                    Từ 2.0 trở lên
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input name='radio' type="radio" className='w-5 h-5' />
                                                    <div className='flex'>
                                                        <TbJewishStarFilled size={18} color='#F77321' />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                        <TbJewishStarFilled size={18} />
                                                    </div>
                                                    Từ 1.0 trở lên
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Thời lượng video */}
                                    <AccordionItem value="item-2" className='border-none'>
                                        <AccordionTrigger
                                            className='accordion-trigger text-base font-bold border-t border-solid border-black hover:no-underline'>
                                            <div className={"w-full flex justify-between items-center"}>
                                                <span>Thời lượng video</span>
                                                <IoIosArrowDown />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-2.5'>
                                                <div className='flex items-center gap-2'>
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    0 đến 1 giờ
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    1 đến 3 giờ
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    3 đến 6 giờ
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    6 đến 17 giờ
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <input type="checkbox" className='w-5 h-5' />
                                                    Trên 17 giờ
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )}

                        <div className={`lg:col-span-3 ${!isFilter && "lg:col-span-4"} flex flex-col gap-4`}>
                            {results.map((result: CourseProps, index) => (
                                <div key={index} className="w-full col">
                                    <Link href={`/course/${result.slug}`} className='flex lg:flex-row lg:gap-4 flex-col border border-grey rounded-xl lg:rounded-none lg:border-none'>
                                        <div className='lg:w-[310px]'>
                                            <img
                                                src={result.poster}
                                                alt="" className='w-full rounded-tl-xl rounded-tr-xl lg:rounded-none'
                                            />
                                        </div>
                                        <div className='flex-1 flex p-4 lg:p-0'>
                                            <div className='flex flex-1 flex-col gap-4'>
                                                <span className='font-bold text-base'>{result.courseName}</span>
                                                <div className='flex flex-col gap-1.5 text-sm font-light'>
                                                    <span className=''>Trần Quang Vũ</span>
                                                    <span className='flex gap-1.5 items-center'>
                                                        <span className='font-bold text-base'>{result.rating}</span>
                                                        <span className='text-[#F77321] flex'>
                                                            <TbJewishStarFilled size={18} />
                                                            <TbJewishStarFilled size={18} />
                                                            <TbJewishStarFilled size={18} />
                                                            <TbJewishStarFilled size={18} />
                                                            <TbJewishStarFilled size={18} />
                                                        </span>
                                                        <span className=''>({result.ratingNum})</span>
                                                    </span>
                                                    <span>Thời lượng: 9.8 giờ, Giáo trình: 46 bài giảng </span>
                                                </div>
                                            </div>

                                            <div className='min-w-20 w-max flex flex-col text-end'>
                                                <span className='font-bold text-base'>{calculateSalePrice(result.price, result.discount)?.toLocaleString('vi-VN')}<sup>đ</sup></span>
                                                <span className='line-through text-sm text-[#929292]'>{result.price?.toLocaleString('vi-VN')}<sup>đ</sup></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            {/* Pagination */}
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            className={`bg-gray-200 hover:bg-gray-300`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1) {
                                                    handlePageChange(currentPage - 1)
                                                }
                                            }}
                                        />
                                    </PaginationItem>
                                    {Array.from({ length: totalPages }).map((page, index) => (
                                        <PaginationItem key={index}>
                                            <PaginationLink
                                                href={`/search?key=${keyword}&page=${index + 1}`}
                                                className={`${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(index + 1);
                                                }}
                                            >
                                                {index + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            className={`bg-gray-200 hover:bg-gray-300`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < totalPages) {
                                                    handlePageChange(currentPage + 1)
                                                }
                                            }}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}