"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2'

import { setUserInfo } from "@/redux/slices/userSlice";

import { IoCameraOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";

import { RootState } from '@/redux/store';

import { getUserInfo } from '@/api/user.api';

export default function Info() {
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo()
            dispatch(setUserInfo(data.userInfo))
        }
        fetchData()
    }, [dispatch])

    const handleChange = (value: string) => {
        console.log(value);
    };

    return (
        <div className="w-full lg:w-1/2 xl:w-1/3">
            <div className='relative flex flex-col min-w-0 break-words w-full bg-gray-200'>
                <div className='flex-auto px-4 py-6 relative'>
                    <button className='absolute top-4'>
                        <FaRegTrashCan size={20} color='red' />
                    </button>
                    <Link href={"/login"} className='absolute right-4 top-4 cursor-pointer'>
                        <AiOutlineLogout size={20} color='#666c77' />
                    </Link>
                    <Link href={"/history"} className='absolute right-4 top-12 cursor-pointer'>
                        <LuHistory size={20} color='blue' />
                    </Link>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='mx-auto flex w-24 h-24 relative bg-gray-500 rounded-full'>
                            <label htmlFor="" className='absolute bottom-0 right-0 border-2 rounded-full bg-white p-1 cursor-pointer'>
                                <IoCameraOutline size={24} color='#666c77' />
                            </label>
                            <Image
                                src=""
                                alt="User Avatar"
                                width={96}
                                height={96}
                                className="rounded-full object-cover"
                            />
                        </div>

                        <input
                            type="text"
                            className='w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring'
                            placeholder='Họ tên'
                            value={userInfo?.fullName}
                        />

                        <div className='w-full relative'>
                            <input
                                type="text"
                                className='w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring'
                                placeholder='Email'
                                value={userInfo?.email}
                            />
                            <MdOutlineVerified size={18} className='cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' />
                        </div>

                        <div className='w-full relative'>
                            <PhoneInput
                                country={'vn'}
                                value={''}
                                onChange={handleChange}
                                containerClass="w-full !rouded-none"
                                inputClass='!w-full !h-auto !border-0 !rounded-none px-3 py-3 text-gray-700 bg-white !text-sm shadow focus:outline-none focus:ring'
                            />
                            <MdOutlineVerified size={18} className='cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' />
                        </div>

                        <div className='w-full flex relative gap-2'>
                            <div className='flex-1'>
                                <input
                                    type="text"
                                    className='border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Chọn quốc gia'
                                />
                            </div>
                            <div className='flex-1'>
                                <input
                                    type="text"
                                    className='border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Chọn tỉnh thành'
                                />
                            </div>
                        </div>

                        <div className='w-full flex relative gap-2'>
                            <div className='flex-1'>
                                <input
                                    type="text"
                                    className='border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='dd/mm/yy'
                                />
                            </div>
                            <div className='flex-1'>
                                <input
                                    type="text"
                                    className='border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Giới tính'
                                />
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='w-4 h-4' />
                            <span className='text-sm'>Bỏ qua, tôi sẽ cập nhật sau</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:shadow-lg outline-none focus:outline-none appearance-none'>
                                    Cập nhật
                                </button>
                                <Link href={"/change-password"} className='text-blue-500'>
                                    Đổi mật khẩu
                                </Link>
                            </div>

                            <Link href={"/"} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:shadow-lg outline-none focus:outline-none appearance-none'>
                                Truy cập
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
