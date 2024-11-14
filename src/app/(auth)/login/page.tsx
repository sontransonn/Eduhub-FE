'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';

import { setUserInfo } from "@/redux/slices/userSlice";
import { setLoading } from "@/redux/slices/userSlice";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { login } from "@/api/auth.api"

type FormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)

    const { userInfo, loading } = useSelector((state: any) => state.user)

    const {
        register,
        handleSubmit, formState: { errors }
    } = useForm<FormData>({ mode: "onChange", });

    useEffect(() => {
        const storedUserInfo = localStorage.getItem("userInfo");
        if (userInfo || storedUserInfo) {
            router.push("/");
        }
    }, [userInfo, router])

    const onSubmit: SubmitHandler<FormData> = async (formData: { email: string, password: string }) => {
        try {
            dispatch(setLoading(true))
            const data = await login(formData);
            localStorage.setItem("userInfo", JSON.stringify(data.user))
            dispatch(setLoading(false))
            dispatch(setUserInfo(data.user))
            router.push("/")
        } catch (error: any) {
            console.error('Login failed:', error.message);
            dispatch(setLoading(false))
        }
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-fullrounded-lg bg-white">
                {/* Tiêu đề */}
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Đăng nhập</h1>

                {/* Form đăng nhập */}
                <form onSubmit={handleSubmit(onSubmit)} className="text-sm px-[30px] pb-[30px] ">
                    <div className="flex flex-col gap-8">
                        <div className='w-full relative'>
                            <input
                                type="email"
                                className={`w-full rounded-[2px] p-3 border focus:border-black focus:bg-white ${errors.email && "border-red-500 bg-red-50"} border-slate-300 outline-none`}
                                placeholder='Email/Số điện thoại/Tên đăng nhập'
                                {...register("email", {
                                    required: "Vui lòng điền vào mục này",
                                    pattern: {
                                        value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?[\d\s]{7,10}(\s?ext\s?\d{1,5})?$|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Vui lòng nhập số điện thoại hoặc email hợp lệ"
                                    }
                                })}
                            />
                            {errors.email && typeof errors.email.message === "string" && (
                                <p className="absolute bottom-[-20px] text-red-500 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className='w-full relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`w-full rounded-[2px] p-3 border focus:border-black focus:bg-white ${errors.password && "border-red-500 bg-red-50"} border-slate-300 outline-none`}
                                placeholder='Mật khẩu'
                                {...register("password", {
                                    required: "Vui lòng điền vào mục này",
                                    minLength: {
                                        value: 6,
                                        message: "Mật khẩu phải có ít nhất 6 ký tự"
                                    }
                                })}
                            />
                            {showPassword ?
                                <FaEye onClick={() => setShowPassword(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                                :
                                <FaEyeSlash onClick={() => setShowPassword(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            }
                            {errors.password && typeof errors.password.message === "string" && (
                                <p className="text-red-500 bottom-[-20px] absolute text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className='bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold'
                        >
                            {loading ? "Đang tải......" : "Đăng nhập"}
                        </button>
                    </div>

                    {/* Quên mật khẩu và Đăng nhập với SMS*/}
                    <div className="flex text-xs justify-between my-[10px]">
                        <Link href={""}>Quên mật khẩu</Link>
                        <Link href={"/login-otp"}>Đăng nhập với SMS</Link>
                    </div>

                    {/* Đăng nhập với Facebook hoặc Google */}
                    <div className=" text-slate-400 text-xs">
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

export default LoginPage
