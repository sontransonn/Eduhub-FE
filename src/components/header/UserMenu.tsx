import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { RootState } from '@/redux/store'

import { setWishlistItems, resetWishlistItems } from '@/redux/slices/wishlistSlice'
import { setCartItems, resetCartItems } from '@/redux/slices/cartSlice';
import { resetUserInfo } from '@/redux/slices/userSlice'

import { FaArrowRightToBracket, FaRightToBracket } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { FaUserGraduate, FaUserCircle, FaUserAstronaut, FaKey, FaBitcoin, FaRegHeart, FaCity, FaCalendarAlt } from "react-icons/fa";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { getMyCart } from '@/api/cart.api'
import { getMyWishlist } from '@/api/wishlist.api'
import { logout } from '@/api/auth.api'

export default function UserMenu() {
    const dispatch = useDispatch()

    const [openAccountMenu, setOpenAccountMenu] = useState(false)

    const { userInfo } = useSelector((state: RootState) => state.user)
    const { quantity: quantityOfCart } = useSelector((state: RootState) => state.cart);
    const { quantity: quantityOfWishList } = useSelector((state: RootState) => state.wishlist)

    const menuRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userInfo) {
                    const cartData = await getMyCart();
                    dispatch(setCartItems(cartData.items))

                    const wishlistData = await getMyWishlist();
                    dispatch(setWishlistItems(wishlistData.items));
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Failed:', error.message);
                } else {
                    console.error('Failed with an unknown error');
                }
            }
        }
        fetchData()
    }, [dispatch])

    const handleLogout = async () => {
        try {
            await logout()
            dispatch(resetUserInfo())
            dispatch(resetCartItems())
            dispatch(resetWishlistItems())
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current?.contains(e.target as Node) && !avatarRef.current?.contains(e.target as Node)) {
            setOpenAccountMenu(false);
        }
    }

    return (
        <>
            {userInfo ? (
                <>
                    <div className="my-auto p-3 text-white bg-[#1782FB] hover:bg-blue-600 cursor-pointer rounded font-bold">
                        <Link className="flex gap-1.5 items-center" href={"/dashboard/user/course"}>
                            <FaArrowRightToBracket size={14} />
                            Vào học
                        </Link>
                    </div>
                    <div className="my-auto">
                        <Link href={"/dashboard/user/wishlist"} className='relative'>
                            <FaRegHeart size={24} />
                            <div className='absolute bg-[#1782FB] flex justify-center items-center rounded-full text-xs w-5 h-5 text-white right-[-10px] top-[-10px]'>{quantityOfWishList}</div>
                        </Link>
                    </div>
                    <div className="my-auto">
                        <Link href={"/cart"} className='relative'>
                            <FiShoppingCart size={24} />
                            <div className='absolute bg-[#1782FB] flex justify-center items-center rounded-full text-xs w-5 h-5 text-white right-[-10px] top-[-10px]'>{quantityOfCart}</div>
                        </Link>
                    </div>
                    <div className="my-auto relative cursor-pointer" ref={avatarRef} onClick={() => setOpenAccountMenu(prev => !prev)}>
                        <Avatar className='w-10 h-10'>
                            <AvatarImage src={userInfo.avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {openAccountMenu ? (
                            <div ref={menuRef} className="absolute top-[120%] w-max right-0 bg-white shadow-2xl border rounded-sm">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaCalendarAlt size={18} />
                                        <Link href="/dashboard/user/course">Vào học</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaUserAstronaut size={18} />
                                        <Link href="/dashboard/user/group">Hội viên</Link>
                                    </li>
                                    {userInfo.role == "INSTRUCTOR" && (
                                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                            <FaUserGraduate size={18} />
                                            <Link href="/dashboard/teacher/course">Giảng viên</Link>
                                        </li>
                                    )}
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaKey size={18} />
                                        <Link href="/">Kích hoạt khóa học</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaCity size={18} />
                                        <Link href="/">Doanh nghiệp</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaUserCircle size={18} />
                                        <Link href="/info">Cập nhật hồ sơ</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaBitcoin size={18} />
                                        <Link href="/">Ví của bạn</Link>
                                    </li>
                                    <li className="pt-2 border-t w-full border-solid">
                                        <div className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-300" onClick={() => handleLogout()}>
                                            <FaRightToBracket size={18} />
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
                    <div className="my-auto p-3 text-white bg-blue-500 hover:bg-blue-600 rounded font-bold">
                        <Link className="block" href={"/register"}>
                            Đăng ký
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}
