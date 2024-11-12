import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

export default function page() {
    return (
        <div className='bg-[#F1F5F8] text-black'>
            <div className='mx-auto py-8 xl:px-20 lg:px-10 px-2 pt-6 lg:pt-14 md:pt-4 '>
                <div className='xl:text-[32px] text-[26px] font-medium text-black'>
                    Khóa học Marketing
                </div>

                <div className='text-sm font-semibold text-center text-black border-b border-gray-400 mb-5'>
                    <ul className='flex flex-wrap text-base gap-[24px]'>
                        <li className='me-2'>
                            <button>
                                Phổ biến
                            </button>
                        </li>
                        <li className='me-2'>
                            <button>
                                Mới
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/4">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-2xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className='flex items-center justify-between mt-6 flex-wrap gap-4'>
                    <h2 className='filter-cate text-xl md:text-2xl lg:leading-5'>
                        <div className='font-medium'>Tất cả khóa học Tin Học Văn Phòng</div>
                    </h2>
                    <div className='flex items-center gap-3'></div>
                </div>

                <div className='mt-6 flex gap-4 border w-full border-black items-center pl-4 pr-2 py-4 rounded font-semibold lg:text-lg text-base flex-wrap justify-center lg:justify-start'>
                    <span>
                        Bạn không biết chắc? Tất cả các khóa học đều được đảm bảo hoàn tiền trong 07 ngày
                    </span>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 mt-10 gap-4'>
                    <div className='col-span-1 first-col-layout transition-all'>
                        <Accordion defaultValue='item-1' type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Đánh giá</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            Từ 4.5 trở lên
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            Từ 4.0 trở lên
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            Từ 3.5 trở lên
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            Từ 3.0 trở lên
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion defaultValue='item-2' type="single" collapsible className="w-full">
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Thời lượng video</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            0 đến 1 giờ
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            1 đến 3 giờ
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            3 đến 6 giờ
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            6 đến 17 giờ
                                        </div>
                                        <div className='flex items-center'>
                                            <input type="checkbox" />
                                            Trên 17 giờ
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className='lg:col-span-3 second-col-layout transition-all'>
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
                </div>
            </div>
        </div>
    )
}
