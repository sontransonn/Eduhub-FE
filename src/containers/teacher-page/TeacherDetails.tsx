"use client"
import React from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';

import { FaFacebookSquare, FaStar } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function TeacherDetails() {
    return (
        <main className='w-full bg-[#f1f5f8]'>
            <div className='w-full bg-[url("https://static.vecteezy.com/system/resources/previews/028/112/827/non_2x/a-cup-of-coffee-with-book-and-pen-on-the-wooden-table-ai-generated-free-photo.jpg")]'>
                <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-4 h-full flex items-end'>
                    <div className='flex w-full md:flex-row md:items-stretch items-center flex-col justify-between lg:pt-32'>
                        <div className='flex lg:flex-row md:items-stretch items-center flex-col text-white gap-5'>
                            <img
                                src="https://unica.vn/uploads/duhq/December72018659am_han-quang-du_thumb.png"
                                className='rounded-full w-40 h-40'
                                alt=""
                            />
                            <div className='flex flex-col md:items-stretch items-center justify-between gap-4 lg:gap-0 lg:pt-10'>
                                <h4 className='text-3xl font-semibold'>Hán Quang Dự</h4>
                                <span className='text-xl font-light'>Giám đốc đào tạo công ty GCC Việt Nam</span>
                                <div className='flex gap-3 text-sm'>
                                    <button className='flex gap-2 items-center py-2 px-5 border border-solid border-white bg-white text-black font-medium rounded-sm flex-shrink-0'>
                                        <FaFacebookSquare size={20} />
                                        Follow mình
                                    </button>
                                    <button className='flex gap-2 items-center py-2 px-5 border border-solid border-white bg-white text-black font-medium rounded-sm flex-shrink-0'>
                                        <FaRocketchat size={20} />
                                        Nhắn cho mình
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className='pt-10 flex gap-16 text-white'>
                            <li className='flex-shrink-0'>
                                <h5 className='text-5xl font-semibold'>12</h5>
                                <h6 className='text-center'>Khóa học</h6>
                            </li>
                            <li className='flex-shrink-0'>
                                <h5 className='text-5xl font-semibold'>13218</h5>
                                <h6 className='text-center'>Học viên</h6>
                            </li>
                            <li className='flex-shrink-0'>
                                <h5 className='text-5xl font-semibold'>12</h5>
                                <h6 className='text-center'>Đánh giá</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-4'>
                <div className='flex flex-col gap-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4 md:col-span-1 col-span-2'>
                            <h4 className='text-lg font-semibold'>Giới thiệu</h4>
                            <div className='flex flex-col gap-2.5 text-sm'>
                                <p>Giảng viên Hán Quang dự hiện là chuyên gia đào tạo về phát triển bản thân và phát triển kinh doanh</p>
                                <p>Hiện tại, anh đang là giám đốc đào tạo công ty GCC Việt Nam.</p>
                                <p>Là tác giả các quyển sách điện tử: 30s tán đổ khách hàng, 08 bước telesales chinh phục khách hàng, 10s bán hàng siêu đẳng, phương pháp học tiếng anh của người ngu nhất hành tinh, Xây dựng hệ thống bán hàng tự động. </p>
                                <p>Đang là cố vấn đào tạo, kiêm cố vấn chiến lược kinh doanh cho hàng chục các doanh nghiệp ở khắp 2 miền Nam Bắc</p>
                                <p>Hán Quang dự được mọi người biết đến như một người truyền cảm hứng mãnh liệt với các chương trình đào tạo dạy học kinh doanh online nổi tiếng đang được tổ chức tại Hà Nội và Hồ Chí Minh: Bán hàng như hơi thở, Email marketing dành cho chủ doanh nghiệp, Nghệ thuật viết sách, xây dựng hệ thống bán hàng tự động, Thuyết trình bán hàng... Và rất nhiều những khoá học Marketing Online hấp dẫn khác trên Unica.</p>
                            </div>
                        </div>
                        <div className='md:col-span-1 col-span-2'>
                            <div className="relative" style={{ paddingTop: "56.25%" }}>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=zwsPND378OQ&embeds_referring_euri=https%3A%2F%2Ffullstack.edu.vn%2F&embeds_referring_origin=https%3A%2F%2Ffullstack.edu.vn&source_ve_path=MjM4NTE'
                                    controls
                                    width="100%"
                                    height="100%"
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h4 className='text-lg font-semibold'>Khóa học của giảng viên Hán Quang Dự</h4>
                        <div className='flex flex-col gap-2.5'>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div className='flex w-full bg-white justify-between gap-4 p-[10px] border border-solid border-[#e0e0e0]'>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/028/112/827/non_2x/a-cup-of-coffee-with-book-and-pen-on-the-wooden-table-ai-generated-free-photo.jpg"
                                        alt=""
                                        className='md:h-44 md:w-80 h-16 w-16'
                                    />
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="font-semibold">Bí quyết viết CV - Dự phỏng vấn</h3>
                                        <div className="text-sm">
                                            29 bài giảng - 07 giờ 38 phút
                                        </div>
                                        <ul>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                            <li>Khám phá điểm mạnh, điểm yếu của bản thân mình</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-1 text-end">
                                        <span className='text-2xl font-semibold'>199,000<sup>đ</sup></span>
                                        <span className='text-xl line-through'>550,000<sup>đ</sup></span>
                                        <span className='text-sm font-medium'>OFF 64%</span>
                                        <button className='py-2 px-10 bg-[#fe0000] rounded-sm text-white font-semibold'>
                                            CHI TIẾT
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
