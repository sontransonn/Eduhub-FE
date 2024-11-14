'use client'
import React from "react"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';

import { setUserInfo } from "@/redux/slices/userSlice";
import { setLoading } from "@/redux/slices/userSlice";

import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
interface FormData {
    phone: string;
}

export default function RegisterPage() {
    const { userInfo, loading } = useSelector((state: any) => state.user)

    const {
        register,
        handleSubmit, formState: { errors }
    } = useForm<FormData>({ mode: "onChange", });

    const onSubmit: SubmitHandler<FormData> = async (formData: { phone: string; }) => {
        try {

        } catch (error: any) {

        }
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-fullrounded-lg bg-white">
                {/* Tiêu đề */}
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Đăng ký</h1>

                {/* Form đăng nhập */}
                <form className="text-sm px-[30px] pb-[30px] ">
                    <div className="flex flex-col gap-8">
                        <div className='w-full relative'>
                            <input
                                type="text"
                                className={`w-full rounded-[2px] p-3 border focus:border-black focus:bg-white ${errors.phone && "border-red-500 bg-red-50"} border-slate-300 outline-none`}
                                placeholder='Số điện thoại'
                                {...register("phone", {
                                    required: "Vui lòng điền vào mục này",
                                    pattern: {
                                        value: /^\+?[0-9]{7,15}$/,
                                        message: "Vui lòng nhập số điện thoại hợp lệ"
                                    }
                                })}
                            />
                            {errors.phone && typeof errors.phone.message === "string" && (
                                <p className="absolute bottom-[-20px] text-red-500 text-xs mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className='bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold mb-[30px]'
                        >
                            Tiếp theo
                        </button>
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

                    <div className="mt-[25px] text-center">
                        <h3 className="block">Bằng việc đăng kí, bạn đã đồng ý với Eduhub về</h3>
                        <span className="text-[#003555]">Điều khoản dịch vụ </span>&<span className="text-[#003555]"> Chính sách bảo mật</span>
                    </div>
                </form>
                <div className="mb-[30px] flex justify-center text-sm">
                    <span className="text-slate-400">Bạn đã có tài khoản? <Link className="text-[#003555]" href={"/login"}>Đăng nhập</Link></span>
                </div>
            </div>
        </div>
    )
}
