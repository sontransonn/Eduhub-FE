"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";

import { IoIosArrowDown } from 'react-icons/io'
import { RiErrorWarningLine, RiFilter3Fill } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

import { searchCourse } from '@/api/course.api';

export default function Search() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("key");

    const [results, setResults] = useState([]);
    const [isFilter, setIsFilter] = useState(true)
    const [page, setPage] = useState(1)
    const [showMenuSortBy, setShowMenuSortBy] = useState(false)

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (keyword) {
                const data = await searchCourse(keyword, page);
                console.log(data);

            }
        }

        fetchSearchResults()
    }, [keyword, page])

    const handleSortBy = (type: string) => {
        setShowMenuSortBy(false)
    }

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                {results.length > 0 ? (
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <h4 className='font-medium text-2xl'>{results.length} kết quả cho "{keyword}"</h4>
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
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                        </div>
                                                        Từ 4.5 trở lên
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input name='radio' type="radio" className='w-5 h-5' />
                                                        <div className='flex'>
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} />
                                                        </div>
                                                        Từ 4.0 trở lên
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input name='radio' type="radio" className='w-5 h-5' />
                                                        <div className='flex'>
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
                                                        </div>
                                                        Từ 3.0 trở lên
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input name='radio' type="radio" className='w-5 h-5' />
                                                        <div className='flex'>
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
                                                        </div>
                                                        Từ 2.0 trở lên
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <input name='radio' type="radio" className='w-5 h-5' />
                                                        <div className='flex'>
                                                            <FaStar size={18} color='#F77321' />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
                                                            <FaStar size={18} />
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
                                {results.map((result, index) => (
                                    <div key={index} className="w-full col">
                                        <a href="" className='flex lg:flex-row lg:gap-4 flex-col border border-grey rounded-xl lg:rounded-none lg:border-none'>
                                            <div className='lg:w-[310px]'>
                                                <img
                                                    src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg"
                                                    alt="" className='w-full rounded-tl-xl rounded-tr-xl lg:rounded-none'
                                                />
                                            </div>
                                            <div className='flex-1 flex p-4 lg:p-0'>
                                                <div className='flex flex-1 flex-col gap-4'>
                                                    <span className='font-bold text-base'>Học tiếng Nhật thật dễ</span>
                                                    <div className='flex flex-col gap-1.5 text-sm font-light'>
                                                        <span className=''>Trần Quang Vũ</span>
                                                        <span className='flex gap-1.5 items-center'>
                                                            <span className='font-bold'>3.7</span>
                                                            <span className='text-[#F77321] flex'>
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                            </span>
                                                            <span className=''>(107)</span>
                                                        </span>
                                                        <span>Thời lượng: 9.8 giờ, Giáo trình: 46 bài giảng </span>
                                                    </div>
                                                </div>

                                                <div className='w-20 flex flex-col text-end'>
                                                    <span className='font-bold text-base'>549.000<sup>đ</sup></span>
                                                    <span className='line-through text-sm text-[#929292]'>700.000<sup>đ</sup></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-8 min-h-[400px]'>
                        <h4 className='font-semibold text-4xl'>Xin lỗi, chúng tôi không thấy kết quả cho "{keyword}"</h4>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-semibold'>Hãy thử điều chỉnh tìm kiếm của bạn. Đây là một số gợi ý:</p>
                            <ul className='list-disc mt-6 pl-5'>
                                <li className='leading-5'>Hãy chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
                                <li className='leading-5'>Hãy thử các cụm từ tìm kiếm khác nhau.</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}