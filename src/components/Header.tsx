import React from "react";
import Image from "next/image";
import Link from "next/link";

import CategoryMenu from "@/components/header/CategoryMenu";
import SearchBar from "@/components/header/SearchBar";
import UserMenu from "@/components/header/UserMenu";
import MobileMenu from "@/components/header/MobileMenu";

import logoBig from "@/public/logo/logoBig.png"

export default function Header() {
    return (
        <header className='sticky z-30 md:z-[100] top-0 bg-white shadow-2xl'>
            {/* --------------- Hiển thị khi màn hình > 768px --------------- */}
            <div className='max-w-8xl mx-auto px-0 xl:px-20 md:px-10 py-4 md:block hidden'>
                <div className='flex flex-row'>
                    <div className='2xl:basis-7/12 lg:basis-6/12 basis-7/12 flex w-auto items-center gap-4'>
                        {/* Logo */}
                        <Link href={"/"}>
                            <Image src={logoBig} width={180} height={45} alt="" />
                        </Link>

                        {/* Danh mục */}
                        <CategoryMenu />

                        {/* Thanh tìm kiếm */}
                        <SearchBar />
                    </div>

                    {/* Liên kết điều hướng */}
                    <div className='2xl:basis-5/12 lg:basis-6/12 basis-5/12 flex justify-end xl:gap-6 gap-4'>
                        <div className="my-auto lg:block hidden">
                            <Link className="block" href={"/biz"}>Doanh nghiệp</Link>
                        </div>
                        <div className="my-auto lg:block hidden">
                            <Link className="block" href={"/dashboard/user"}>Hội viên</Link>
                        </div>
                        <UserMenu />
                    </div>
                </div>
            </div>

            {/* --------------- Hiển thị khi màn hình < 768px --------------- */}
            <div className="md:hidden">
                <MobileMenu />
            </div>
        </header>
    )
}
