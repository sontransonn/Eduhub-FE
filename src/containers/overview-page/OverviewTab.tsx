import React from 'react'

import { FaPlusSquare, FaRocketchat, FaStar, FaYoutube } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function OverviewTab() {
    return (
        <div className='grid grid-cols-3 gap-8'>
            <div className='lg:col-span-2 col-span-3'>
                <div className='flex flex-col gap-4'>
                    <div className='w-full flex flex-col gap-2.5 bg-white p-4 rounded-sm border border-solid border-[#3333]'>
                        <h4 className='font-semibold'>Chào mừng khóa học</h4>
                        <p className='text-sm'>
                            Chào mừng các bạn đã đăng ký Khóa Học SEO Nền Tảng Dành Cho Người Mới Khóa học được thiết kế dành riêng cho những ai mới bắt đầu, giúp bạn nắm vững các kiến thức cơ bản và kỹ năng cần thiết để áp dụng SEO hiệu quả. Trong khóa học bạn sẽ được học về cơ bản SEO, hiểu về SEO là gì và tại sao nó quan trọng; cách tìm và sử dụng từ khóa để tăng cường nội dung; tối ưu hóa trang web từ bên trong để cải thiện thứ hạng. chiến lược xây dựng liên kết và quảng bá trang web (Off-Page SEO);
                            các kỹ thuật nâng cao giúp cải thiện trải nghiệm người dùng và hiệu suất trang web; và sử dụng các công cụ phân tích để theo dõi và đánh giá hiệu quả SEO
                        </p>
                        <span className='text-sm'>Trong quá trình học cần hỗ trợ hãy đặt câu hỏi tại mục thảo luận. Chúc bạn học tập hiệu quả!</span>
                    </div>
                    <div className='w-full flex flex-col gap-2.5 bg-white p-4 rounded-sm border border-solid border-[#3333]'>
                        <h4 className='font-semibold'>Nội dung khóa học</h4>
                        <div className="h-full border-none">
                            <Accordion type="multiple" className="w-full">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <AccordionItem value={"index" + index} key={index}>
                                        <AccordionTrigger className='accordion-trigger w-full py-3 pr-7 hover:no-underline border-none text-sm'>
                                            <div className='w-full flex items-center gap-2'>
                                                <FaPlusSquare />
                                                <h3 className='font-semibold'>Phần 1: Bắt đầu</h3>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='bg-white pb-3 px-4'>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:col-span-1 col-span-3'>
                <div className='flex flex-col gap-4'>
                    <div className='w-full flex flex-col gap-2.5 bg-white p-4 rounded-sm border border-solid border-[#3333]'>
                        <h4 className='font-semibold text-center'>Giảng viên</h4>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='col-span-1 flex flex-col gap-1 items-center text-sm'>
                                <div className='overflow-hidden mx-auto h-24 w-24 rounded-full lg:w-28 lg:h-28'>
                                    <img
                                        src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183063_Qhws5HebqXncNjlIW3WknSwDIjq5FCiV.jpg"
                                        alt=""
                                        className='object-cover object-top w-full h-full'
                                    />
                                </div>
                                <span className='text-center font-semibold'>Yui Hatano</span>
                                <span className='text-center'>Fouder Công ty TNHH TIEN ZIVEN</span>
                            </div>
                            <div className='col-span-1 flex flex-col gap-1 justify-between items-center text-sm'>
                                <ul className='flex flex-col gap-2.5'>
                                    <li className='flex items-center gap-2'>
                                        <FaStar color='green' />
                                        12 đánh giá
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaUserGroup color='green' />
                                        213 học viên
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaYoutube color='green' />
                                        3 khóa học
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <FaRocketchat color='green' />
                                        0 thảo luận
                                    </li>
                                </ul>
                                <button className='w-full text-lg font-semibold py-1 px-2 rounded-sm border border-solid border-[#3333] bg-white'>CHI TIẾT</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white p-4 rounded-sm border border-solid border-[#3333]'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex'>
                                    <FaStar size={24} />
                                    <FaStar size={24} />
                                    <FaStar size={24} />
                                    <FaStar size={24} />
                                    <FaStar size={24} />
                                </div>
                                <h4 className='font-medium'>Đánh giá khóa học</h4>
                            </div>
                            <textarea
                                name="" id="" rows={5}
                                className='text-sm outline-none border border-solid border-[#3333] py-[6px] px-3 rounded-sm'
                                placeholder='Nhập nội dung đánh giá (tối thiểu 20 ký tự)'
                            >
                            </textarea>
                            <button className='self-start text-sm py-2 px-8 bg-blue-500 text-white font-medium rounded-sm'>Gửi đánh giá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
