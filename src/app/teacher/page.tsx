"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { FiSearch } from 'react-icons/fi'

import { getAllInstructor } from '@/api/user.api'

import { TeacherType } from '@/types/teacher.type'

export default function Teacher() {
    const [listTeacher, setListTeacher] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllInstructor(1)
            setListTeacher(data)
        }
        fetchData()
    }, [])

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 lg:py-14 py-8'>
                <div className='flex flex-col gap-5'>
                    <h3 className='font-medium text-2xl text-center'>DANH SÁCH GIẢNG VIÊN TRÊN EDUHUB</h3>
                    <form action="" className='grid lg:grid-cols-12 grid-cols-4 gap-4 text-sm'>
                        <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                            <option value="">Lĩnh vực giảng dạy</option>
                            <option value="1">Truy cập gần nhất</option>
                            <option value="2">Lâu chưa truy cập</option>
                        </select>
                        <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                            <option value="">Trình độ giảng viên</option>
                            <option value="1">Truy cập gần nhất</option>
                            <option value="2">Lâu chưa truy cập</option>
                        </select>
                        <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                            <option value="">Kinh nghiệm</option>
                            <option value="1">Truy cập gần nhất</option>
                            <option value="2">Lâu chưa truy cập</option>
                        </select>
                        <select className='custom-select-arrow border border-solid border-black relative col-span-2 bg-transparent px-4 py-[10px] rounded outline-none' name="" id="">
                            <option value="">Trạng thái công tác</option>
                            <option value="1">Truy cập gần nhất</option>
                            <option value="2">Lâu chưa truy cập</option>
                        </select>
                        <div className='col-span-4 flex relative border border-black rounded'>
                            <input
                                type="text"
                                className='block w-full p-2.5 ps-4 text-sm rounded outline-none'
                                placeholder='Tìm kiếm giảng viên'
                            />
                            <button className='p-[10px] bg-blue-700 text-white'>
                                <FiSearch size={18} />
                            </button>
                        </div>
                    </form>
                    <div className='grid grid-cols-10 p-8 bg-[#00314f] rounded-sm gap-8'>
                        {listTeacher.map((teacher: TeacherType, index) => (
                            <div className='md:col-span-2 col-span-5' key={index}>
                                <Link href={`/teacher/${teacher.user._id}`} className='w-full flex flex-col gap-3 justify-center items-center' >
                                    <div className='overflow-hidden mx-auto h-24 w-24 rounded-full border-2 border-solid border-white lg:w-28 lg:h-28'>
                                        <img
                                            src={teacher.user.avatar}
                                            alt=""
                                            className='object-cover object-center w-full h-full'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 text-center'>
                                        <span className='text-yellow-500 text-lg font-semibold'>{teacher.user.fullName}</span>
                                        <span className='text-white text-sm'>{teacher.description}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">5</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </main>
    )
}
