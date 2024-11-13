"use client"
import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"

import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const page = () => {

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-fullrounded-lg bg-white">
                {/* Tiêu đề */}
                <h1 className="text-lg font-bold uppercase p-[30px]">Đăng nhập</h1>

                {/* Form đăng nhập */}
                <form className="text-[12px] px-[30px] pb-[30px] ">
                    <div className="flex flex-col gap-6">
                        <div className='w-full'>
                            <input
                                type="text"
                                className='w-full rounded-[2px] p-3 border focus:border-black border-slate-300 outline-none'
                                placeholder='Số điện thoại'
                            />
                        </div>

                        <button
                            type="submit"
                            className='bg-blue-500 rounded-[2px] hover:bg-blue-600 w-full py-3 px-6 text-white font-bold'
                        >
                            Tiếp theo
                        </button>
                    </div>

                    {/*  */}
                    <div className="flex text-[12px] justify-end my-[10px]">
                        <Link href={"/login"}>Đăng nhập với mật khẩu</Link>
                    </div>

                    {/*  */}
                    <div className=" text-slate-400 text-[12px] ">
                        <div className="pb-[14px] flex gap-2 items-center">
                            <div className="w-full h-[0.5px] bg-slate-400"></div>
                            HOẶC
                            <div className="w-full h-[0.5px] bg-slate-400"></div>
                        </div>
                        <div className="flex justify-between text-black gap-3">
                            <div className="flex items-center gap-1 justify-center border w-full border-solid border-slate-400 py-2 rounded-[2px] cursor-pointer">
                                <FaFacebook color="blue" size={20} />
                                Facebook
                            </div>
                            <div className="flex items-center gap-1 justify-center border w-full border-solid border-slate-400 py-2 rounded-[2px] cursor-pointer">
                                <FcGoogle size={20} />
                                Google
                            </div>
                        </div>
                    </div>
                </form>
                <div className="mb-[30px] flex justify-center text-sm">
                    <span className="text-slate-400">Bạn mới biết đến Eduhub? <Link className="text-[#003555]" href={"/register"}>Đăng ký</Link></span>
                </div>
            </div>
        </div>
    )
}

export default page