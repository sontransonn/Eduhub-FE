import React from "react"
import { useSelector } from "react-redux"
import Link from "next/link"

import categories from "@/constants/categories"

import { RootState } from "@/redux/store"

import { FiMenu, FiPhoneOutgoing, FiSearch, FiShoppingCart } from "react-icons/fi"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Drawer, DrawerContent, DrawerTrigger, } from "@/components/ui/drawer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { MdDownloadForOffline, MdMailOutline, MdOutlineNavigateNext } from "react-icons/md"

export default function MobileMenu() {
    const { userInfo } = useSelector((state: RootState) => state.user)

    return (
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
                                <MdOutlineNavigateNext size={24} className="cursor-pointer" />
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
    )
}
