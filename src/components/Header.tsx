'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';

import categories from "@/constants/categories";

import { resetUserInfo } from "@/redux/slices/userSlice";

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
import {
    Accordion,
    AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import {
    AlertDialog,
    AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { logout } from "@/api/auth.api";

const Header = () => {
    const dispatch = useDispatch()

    const [openAccountMenu, setOpenAccountMenu] = useState(false)
    const [openAlertDialog, setOpenAlertDialog] = useState(false)

    const { userInfo } = useSelector((state: any) => state.user)

    const handleLogout = async () => {
        try {
            const data = await logout()
            localStorage.removeItem("userInfo")
            dispatch(resetUserInfo())
            toast.success(data.message)
            setOpenAlertDialog(false);
        } catch (error: any) {
            console.error('Logout failed:', error.message);
            toast.error(error.message)
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
                            <div className="flex w-36 text-lg items-center uppercase gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7.27502 1.125H3.15002C2.5287 1.125 2.02502 1.62868 2.02502 2.25V6.375C2.02502 6.99632 2.5287 7.5 3.15002 7.5H7.27502C7.89634 7.5 8.40002 6.99632 8.40002 6.375V2.25C8.40002 1.62868 7.89634 1.125 7.27502 1.125Z" fill="#6CC4F5" />
                                    <path d="M17.3017 3.53205L14.4679 0.698172C14.2608 0.49139 13.9801 0.375244 13.6875 0.375244C13.3949 0.375244 13.1142 0.49139 12.9071 0.698172L10.0732 3.53205C9.86627 3.73902 9.75 4.01973 9.75 4.31242C9.75 4.60512 9.86627 4.88583 10.0732 5.0928L12.9071 7.92667C13.1143 8.13318 13.3949 8.24914 13.6875 8.24914C13.98 8.24914 14.2607 8.13318 14.4679 7.92667L17.3017 5.0928C17.5087 4.88583 17.625 4.60512 17.625 4.31242C17.625 4.01973 17.5087 3.73902 17.3017 3.53205Z" fill="#F2C94C" />
                                    <path d="M15.7501 9.59985H11.6251C11.0038 9.59985 10.5001 10.1035 10.5001 10.7249V14.8499C10.5001 15.4712 11.0038 15.9749 11.6251 15.9749H15.7501C16.3714 15.9749 16.8751 15.4712 16.8751 14.8499V10.7249C16.8751 10.1035 16.3714 9.59985 15.7501 9.59985Z" fill="#6CC4F5" />
                                    <path d="M7.27502 9.59985H3.15002C2.5287 9.59985 2.02502 10.1035 2.02502 10.7249V14.8499C2.02502 15.4712 2.5287 15.9749 3.15002 15.9749H7.27502C7.89634 15.9749 8.40002 15.4712 8.40002 14.8499V10.7249C8.40002 10.1035 7.89634 9.59985 7.27502 9.59985Z" fill="#6CC4F5" />
                                </svg>
                                Danh mục
                            </div>

                            {/* Menu danh mục */}
                            <div className="absolute w-[270px] top-full pt-4 group-hover:block hidden">
                                <ul className="bg-white h-fit border border-solid border-[#eee] relative shadow-custom z-[99]">
                                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[15px] border-l-transparent border-r-transparent absolute top-[-15px]"></div>
                                    {categories?.map((category, index) => (
                                        <li key={index} className="p-[10px] flex justify-between cursor-pointer hover:text-blue-500 hover:bg-slate-100 group/item">
                                            <Link href={`/course/hello`} className="flex items-center text-sm gap-1">
                                                {category.icon}
                                                {category.title}
                                            </Link>
                                            <IoMdArrowDropright size={18} />
                                            <div className="absolute top-[-1px] left-full bg-slate-100 text-black z-[1000] group-hover/item:block hidden shadow-custom border border-solid border-[#eee]">
                                                <ul className="h-[520px] w-[305px]">
                                                    {category.items?.map((item, index) => (
                                                        <li key={index} className="p-[10px] flex justify-between items-center group/item1 text-sm cursor-pointer hover:text-blue-500">
                                                            {item.title}
                                                            <IoMdArrowDropright size={18} />
                                                            <div className="absolute top-[-1px] left-full bg-slate-100 text-black z-[1000] group-hover/item1:block hidden shadow-custom border border-solid border-[#eee]">
                                                                <ul className="px-[10px] h-[520px] w-[305px]">
                                                                    {item.tags?.map((tag, index) => (
                                                                        <li key={index} className="py-[10px] flex justify-between items-center group/item1 text-sm cursor-pointer hover:text-blue-500">
                                                                            {tag}
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
                                                        onClick={() => setOpenAlertDialog(true)}
                                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

            {/* Alert */}
            <AlertDialog open={openAlertDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Do you want to logout?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpenAlertDialog(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </header>
    )
}

export default Header