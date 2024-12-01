'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import categories from "@/constants/categories";

import { resetUserInfo } from "@/redux/slices/userSlice";

import { CgMenuGridR } from "react-icons/cg";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdDownloadForOffline } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Drawer, DrawerContent, DrawerTrigger, } from "@/components/ui/drawer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

import { logout } from "@/api/auth.api";

const Header = () => {
    const dispatch = useDispatch()

    const [openAccountMenu, setOpenAccountMenu] = useState(false)

    const { userInfo } = useSelector((state: any) => state.user)

    const handleLogout = async () => {
        try {
            const data = await logout()
            localStorage.removeItem("userInfo")
            dispatch(resetUserInfo())
        } catch (error: any) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <header className='sticky z-30 md:z-40 top-0 bg-white shadow-2xl'>
            {/* --------------- Hiển thị khi màn hình > 768px --------------- */}
            <div className='hidden md:block py-4 px-6'>
                <div className='flex flex-row'>
                    <div className='2xl:basis-7/12 lg:basis-6/12 basis-7/12 flex xl:gap-8 w-auto items-center gap-4'>
                        {/* Logo */}
                        <Link href={"/"}>
                            <img
                                width={140}
                                src="https://unica.vn/media/img/logo-unica.svg"
                                alt="Học Online: 2000+ Khóa học trực tuyến cho người đi làm"
                                className="max-w-none"
                            />
                        </Link>

                        {/* Danh mục */}
                        <div className="my-auto relative group">
                            <div className="flex w-36 text-lg items-center uppercase gap-1">
                                <CgMenuGridR size={30} />
                                Danh mục
                            </div>

                            {/* Menu danh mục */}
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
                                                    {category.subCategories?.map((subCategory: any, index) => (
                                                        <li key={index} className="flex group/sub-item text-sm cursor-pointer hover:text-blue-500">
                                                            <Link href={`/category/${category.slug}/${subCategory.slug}`} className="p-[10px] w-full flex items-center justify-between">
                                                                {subCategory.title}
                                                                <IoMdArrowDropright size={18} />
                                                            </Link>
                                                            <div className="absolute top-[-1px] left-full bg-slate-100 text-black z-[1000] group-hover/sub-item:block hidden shadow-custom border border-solid border-[#eee]">
                                                                <ul className="h-[520px] w-[305px] border border-solid border-[#eee]">
                                                                    {subCategory.tags?.map((tag: any, index: number) => (
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

                        {/* Thanh tìm kiếm */}
                        <div className="w-full relative">
                            <input
                                autoComplete="on"
                                name="key" id="text_search"
                                value="" type="text"
                                className="block w-full px-4 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                                placeholder="Tìm khóa học, giảng viên" required
                            />
                            <button type="submit" className="absolute top-0 right-0 h-full pr-4">
                                <FiSearch size={26} color="#969899" />
                            </button>
                        </div>
                    </div>

                    {/* Liên kết điều hướng */}
                    <div className='2xl:basis-5/12 lg:basis-6/12 basis-5/12 flex justify-end xl:gap-6 gap-4'>
                        <div className="my-auto lg:block hidden">
                            <Link className="block" href={"/biz"}>Doanh nghiệp</Link>
                        </div>
                        <div className="my-auto lg:block hidden">
                            <Link className="block" href={"/"}>Hội viên</Link>
                        </div>
                        {userInfo ? (
                            <>
                                <div className="my-auto p-3 text-white bg-[#1782FB] hover:bg-blue-600 cursor-pointer rounded font-bold">
                                    <Link className="flex gap-2 items-center" href={"/dashboard"}>
                                        <FaArrowRightToBracket size={14} />
                                        Vào học
                                    </Link>
                                </div>
                                <div className="my-auto">
                                    <Link href={"/cart"}>
                                        <FaRegHeart size={24} />
                                    </Link>
                                </div>
                                <div className="my-auto">
                                    <Link href={"/cart"}>
                                        <FiShoppingCart size={24} />
                                    </Link>
                                </div>
                                <div className="my-auto relative cursor-pointer" onClick={() => setOpenAccountMenu(prev => !prev)}>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    {openAccountMenu ? (
                                        <div className="absolute top-[120%] w-44 right-0 bg-white shadow-2xl border rounded-lg">
                                            <ul className="py-2 text-sm text-gray-700">
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="">Vào học</a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="">Hội viên</a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="">Kích hoạt khóa học</a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="">Doanh nghiệp</a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="/info">Cập nhật hồ sơ</a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-100" href="">Ví của bạn</a>
                                                </li>
                                                <li className="pt-2 border-t w-full border-solid">
                                                    <div
                                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        onClick={() => handleLogout()}
                                                    >
                                                        Đăng xuất
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : ""}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="my-auto">
                                    <Link className="relative" href={"/cart"}>
                                        <FiShoppingCart size={26} />
                                    </Link>
                                </div>
                                <div className="my-auto">
                                    <Link className="block font-bold" href={"/login"}>
                                        Đăng nhập
                                    </Link>
                                </div>
                                <div className="my-auto p-3 text-white bg-[#1782FB] hover:bg-blue-500 rounded font-bold">
                                    <Link className="block" href={"/register"}>
                                        Đăng ký
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* --------------- Hiển thị khi màn hình < 768px --------------- */}
            <div className="md:hidden">
                <div className="flex justify-between items-center p-4">
                    {/* Drawer */}
                    <Drawer direction='left'>
                        <DrawerTrigger asChild>
                            <div className="flex flex-col text-[10px] items-center cursor-pointer">
                                <FiMenu size={30} />
                                Menu
                            </div>
                        </DrawerTrigger>
                        <DrawerContent id="drawer-content" className="h-screen bg-white overflow-y-auto top-0 left-0 mt-0 w-80 rounded-none">
                            {userInfo ? (
                                <div className="bg-[#F8F9FB] p-4">
                                    <div className="flex gap-3 items-center justify-between">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <p className="w-40">Chào mừng bạn quay lại!</p>
                                        <MdNavigateNext size={24} className="cursor-pointer" />
                                    </div>
                                </div>
                            ) : (
                                <div className="border-t p-4 text-[#BF4A01]">
                                    <div className="mt-2">
                                        <Link href={"/login"}>Đăng nhập</Link>
                                    </div>
                                    <div className="my-4">
                                        <Link href={"/register"}>Đăng ký</Link>
                                    </div>
                                </div>
                            )}
                            <div className="border-t p-4">
                                <div className="mt-2">
                                    <Link href={"/"}>Kích hoạt khóa học</Link>
                                </div>
                                <div className="my-4">
                                    <Link href={"/"}>Hội viên</Link>
                                </div>
                                <div className="my-4">
                                    <Link href={"/biz"}>Doanh nghiệp</Link>
                                </div>
                            </div>
                            <div className="border-t p-4">
                                <Accordion defaultValue="item" type="single" id="accordion" collapsible className="border-none w-full">
                                    <AccordionItem value="item">
                                        <AccordionTrigger className="hover:no-underline font-bold text-base p-0 pb-3">Danh mục</AccordionTrigger>
                                        {categories?.map((category, index) => (
                                            <AccordionContent key={index} className="flex gap-2 cursor-pointer text-base">
                                                {category.icon}
                                                {category.title}
                                            </AccordionContent>
                                        ))}
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="border-t px-4 py-6">
                                <a href={"/"} className="flex items-center gap-3">
                                    <MdDownloadForOffline size={22} />
                                    Tải app
                                </a>
                            </div>
                            <div className="border-t p-4">
                                <p className="font-bold">Hỗ trợ</p>
                                <div className="py-4 flex gap-2.5 items-center">
                                    <FiPhoneOutgoing size={22} />
                                    Hotline:
                                    <span>
                                        <Link href={"/"}> 090 488 6095</Link>
                                    </span>
                                </div>
                                <div className="pb-1 flex gap-2.5 items-center">
                                    <MdMailOutline size={22} />
                                    Email:
                                    <span>cskh@unica.vn</span>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>

                    {/* Logo */}
                    <Link href="/">
                        <img
                            className="w-[140px]"
                            src="https://unica.vn/media/img/logo-unica.svg"
                            alt="Học Online: 2000+ Khóa học trực tuyến cho người đi làm"
                        />
                    </Link>

                    <div className="flex justify-end items-center gap-6">
                        <FiSearch size={26} />
                        <Link href="/cart" className="relative">
                            <FiShoppingCart size={26} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header