import React from 'react'
import Link from 'next/link'

import categories from '@/constants/categories'

import { IoMdArrowDropright } from 'react-icons/io'
import { FiMenu } from "react-icons/fi"

export default function CategoryMenu() {
    return (
        <>
            <div className="flex-shrink-0 text-white bg-[#003555] rounded-sm hidden xl:block">
                <div className="flex text-sm items-center gap-1.5 px-4 py-2.5 border border-solid border-[#3333] rounded-sm cursor-pointer">
                    <FiMenu size={20} />
                    Danh mục
                </div>
            </div>
            <div className="my-auto flex-shrink-0 relative group xl:hidden">
                <div className="flex text-sm items-center text-white gap-1.5 px-4 py-2.5 bg-[#003555] border border-solid border-[#3333] rounded-sm cursor-pointer">
                    <FiMenu size={20} />
                    Danh mục
                </div>
                <div className="absolute w-[270px] top-full pt-4 group-hover:block hidden">
                    <ul className="bg-white h-fit border border-solid border-[#eee] relative shadow-custom z-[99]">
                        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-white border-b-[15px] border-l-transparent border-r-transparent absolute top-[-15px]"></div>
                        {categories?.map((category, index) => (
                            <li key={index} className="flex justify-between items-center cursor-pointer hover:text-blue-500 hover:bg-slate-100 group/item">
                                <Link href={`/category/${category.slug}`} className="w-full flex items-center justify-between p-[10px] ">
                                    <div className="flex items-center text-sm gap-1">
                                        {category.icon}
                                        {category.title}
                                    </div>
                                    <IoMdArrowDropright size={18} />
                                </Link>
                                <div className="absolute top-[-1px] left-full bg-slate-100 text-black z-[1000] group-hover/item:block hidden shadow-custom border border-solid border-[#eee]">
                                    <ul className="h-[520px] w-[305px] border border-solid border-[#eee] relative">
                                        {category.subCategories?.map((subCategory, index) => (
                                            <li key={index} className="flex group/sub-item text-sm cursor-pointer hover:text-blue-500">
                                                <Link href={`/category/${category.slug}/${subCategory.slug}`} className="p-[10px] w-full flex items-center justify-between">
                                                    {subCategory.title}
                                                    <IoMdArrowDropright size={18} />
                                                </Link>
                                                <div className="absolute top-[-1px] left-full bg-slate-100 text-black z-[1000] group-hover/sub-item:block hidden shadow-custom border border-solid border-[#eee]">
                                                    <ul className="h-[520px] w-[305px] border border-solid border-[#eee]">
                                                        {subCategory.tags?.map((tag, index: number) => (
                                                            <li key={index} className="w-full flex group/sub-item text-sm cursor-pointer hover:text-blue-500">
                                                                <Link href={`/tag/${tag.slug}`} className="w-full p-[10px] ">
                                                                    {tag.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
