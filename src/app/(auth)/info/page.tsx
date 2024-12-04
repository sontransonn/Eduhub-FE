"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

import { setUserInfo } from "@/redux/slices/userSlice";

import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

import { getUserInfo } from '@/api/user.api';

export default function InfoPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state: any) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo()
            dispatch(setUserInfo(data.userInfo))
        }
        fetchData()
    }, [])

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <form className="relative flex flex-col w-full bg-white p-6">
                <div></div>
                <input
                    type="email" required
                    name="email"
                    className={`w-full rounded-[2px] p-3 border focus:border-black focus:bg-white border-slate-300 outline-none`}
                    placeholder='Email/Số điện thoại/Tên đăng nhập'
                />
            </form>
        </div>
    )
}
