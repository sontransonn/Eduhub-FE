import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { RootState } from '@/redux/store'

import { setWishlistItems } from '@/redux/slices/wishlistSlice'
import { setCartItems } from '@/redux/slices/cartSlice';
import { resetUserInfo } from '@/redux/slices/userSlice'

import { FaArrowRightToBracket, FaCircleUser, FaRightToBracket, FaTableList } from 'react-icons/fa6'
import { FaBitcoin, FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSolidBusiness } from 'react-icons/bi'
import { GiSkeletonKey } from 'react-icons/gi'
import { HiMiniUserGroup } from 'react-icons/hi2'

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

    useEffect(() => {
        const fetchData = async () => {
            const cartData = await getMyCart();
            dispatch(setCartItems(cartData.items))

            const wishlistData = await getMyWishlist();
            dispatch(setWishlistItems(wishlistData.items));
        }

        fetchData()
    }, [dispatch])

    const handleLogout = async () => {
        try {
            await logout()
            localStorage.removeItem("userInfo")
            dispatch(resetUserInfo())
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
    };

    return (
        <>
            {userInfo ? (
                <>
                    <div className="my-auto px-4 py-2.5 text-white bg-[#1782FB] hover:bg-blue-600 cursor-pointer rounded font-bold border border-solid border-[#3333]">
                        <Link className="flex gap-1.5 items-center text-sm" href={"/dashboard/user"}>
                            <FaArrowRightToBracket size={14} />
                            Vào học
                        </Link>
                    </div>
                    <div className="my-auto">
                        <Link href={"/dashboard/user"} className='relative'>
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
                    <div className="my-auto relative cursor-pointer" onClick={() => setOpenAccountMenu(prev => !prev)}>
                        <Avatar className='w-[41.6px] h-[41.6px]'>
                            <AvatarImage src={userInfo.avatar ? userInfo.avatar : "https://github.com/shadcn.png"} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {openAccountMenu ? (
                            <div className="absolute top-[120%] w-max right-0 bg-white shadow-2xl border rounded-sm">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaTableList size={18} />
                                        <Link href="/dashboard/user">Vào học</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <HiMiniUserGroup size={18} />
                                        <Link href="/dashboard/user">Hội viên</Link>
                                    </li>
                                    {userInfo.role == "INSTRUCTOR" && (
                                        <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                            <HiMiniUserGroup size={18} />
                                            <Link href="/dashboard/instructor">Giảng viên</Link>
                                        </li>
                                    )}
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <GiSkeletonKey size={18} />
                                        <Link href="/">Kích hoạt khóa học</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <BiSolidBusiness size={18} />
                                        <Link href="/">Doanh nghiệp</Link>
                                    </li>
                                    <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300">
                                        <FaCircleUser size={18} />
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
                    <div className="my-auto p-3 text-white bg-[#1782FB] hover:bg-blue-500 rounded font-bold">
                        <Link className="block" href={"/register"}>
                            Đăng ký
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}
