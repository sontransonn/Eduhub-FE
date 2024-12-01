import React from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { RiFilter3Fill } from 'react-icons/ri'
import { MdStar } from 'react-icons/md'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function SearchPage() {
    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-8'>
                <div className='flex flex-col gap-10'>
                    {/*  */}
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-medium text-2xl'>3 kết quả cho "bác sĩ sữa mẹ"</h4>
                        <div className='flex items-center gap-3'>
                            <div className='flex bg-white gap-2 items-center py-4 px-5 border border-solid border-black rounded-sm'>
                                <RiFilter3Fill size={24} />
                                Bộ lọc
                            </div>
                            <div className='flex self-stretch bg-white gap-7 items-center str px-5 border border-solid border-black rounded-sm cursor-pointer'>
                                <div className='flex flex-col text-xs'>
                                    <span className='font-semibold'>Sắp xếp theo</span>
                                    <span>Học nhiều nhất</span>
                                </div>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
                        <div className='col-span-1 first-col-layout transition-all'>
                            <Accordion defaultValue='item-1' type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className='border-none'>
                                    <AccordionTrigger className='accordion-trigger text-base font-bold hover:no-underline pt-0 pb-3'>Đánh giá</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex flex-col gap-2.5'>
                                            <div className='flex items-center gap-2'>
                                                <input name='radio' type="radio" className='w-5 h-5' />
                                                <div className='flex'>
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                </div>
                                                Từ 4.5 trở lên
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input name='radio' type="radio" className='w-5 h-5' />
                                                <div className='flex'>
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} />
                                                </div>
                                                Từ 4.0 trở lên
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input name='radio' type="radio" className='w-5 h-5' />
                                                <div className='flex'>
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} />
                                                    <MdStar size={18} />
                                                </div>
                                                Từ 3.5 trở lên
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input name='radio' type="radio" className='w-5 h-5' />
                                                <div className='flex'>
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} color='#F77321' />
                                                    <MdStar size={18} />
                                                    <MdStar size={18} />
                                                </div>
                                                Từ 3.0 trở lên
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion defaultValue='item-2' type="single" collapsible className="w-full">
                                <AccordionItem value="item-2" className='border-none'>
                                    <AccordionTrigger className='accordion-trigger text-base font-bold hover:no-underline pt-0 pb-3'>Thời lượng video</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex flex-col gap-2.5'>
                                            <div className='flex items-center gap-2'>
                                                <input type="checkbox" className='w-5 h-5' />
                                                0 đến 1 giờ
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/*  */}
                        <div className='lg:col-span-3 second-col-layout transition-all'>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div className="w-full col">
                                    <a href="" className='flex mb-6 lg:flex-row flex-col gap-2 border border-grey rounded-xl lg:rounded-none lg:border-none'>
                                        <div className='lg:w-[310px]'>
                                            <img src="https://static.unica.vn/upload/images/2019/04/hoc-tieng-nhat-that-de_m_1555562005.jpg" alt="" className='w-full rounded-tl-xl rounded-tr-xl lg:rounded-none' />
                                        </div>
                                        <div className='flex-1 lg:pl-4 flex px-3 py-1 lg:p-0'>
                                            <div className='flex flex-1 flex-col gap-4'>
                                                <span className='font-bold text-base leading-5'>Học tiếng Nhật thật dễ</span>
                                                <div className='flex flex-col gap-2 text-sm font-light'>
                                                    <span className='leading-4'>Thanh Trúc</span>
                                                    <span className='leading-4 flex gap-2'>
                                                        <span className='font-bold'>3.7</span>
                                                        <span className='text-[#F77321] flex gap-1'>
                                                            <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                            <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                            <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                            <li className='fa fa-star co-or' aria-hidden="true"></li>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='w-20 flex flex-col'>
                                                <span className='font-bold text-base'>
                                                    549.000
                                                    <sup>đ</sup>
                                                </span>
                                                <span className='line-through text-sm text-[#929292]'>
                                                    700.000
                                                    <sup>đ</sup>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}