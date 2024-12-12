'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { login } from "@/api/auth.api"

export default function LoginPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { userInfo } = useSelector((state: any) => state.user)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await login(formData);
            toast.success(data.message)
            router.push("/info")
        } catch (error: any) {
            toast.error(error.message)
            console.error('Login failed:', error.message);
        }
    }

    const handleOAuth2 = async (type: string) => {
        window.location.href = `http://localhost:5000/auth/${type}`;
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-full bg-white">
                {/* Tiêu đề */}
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Đăng nhập</h1>

                {/* Form đăng nhập */}
                <form onSubmit={handleSubmit} className="text-sm px-[30px] pb-[30px] ">
                    <div className="flex flex-col gap-4">
                        <input
                            type="email" required
                            name="email"
                            className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                            placeholder='Email/Số điện thoại/Tên đăng nhập'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className='w-full relative'>
                            <input
                                type={showPassword ? "text" : "password"} required
                                name="password"
                                minLength={8}
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder='Mật khẩu'
                                onChange={handleChange}
                            />
                            {showPassword ?
                                <FaEye onClick={() => setShowPassword(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                                :
                                <FaEyeSlash onClick={() => setShowPassword(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            }
                        </div>

                        <button type="submit" className='bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold'>
                            Đăng nhập
                        </button>
                    </div>

                    {/* Quên mật khẩu và Đăng nhập với SMS*/}
                    <div className="flex text-xs justify-between my-4">
                        <Link href={""}>Quên mật khẩu?</Link>
                    </div>

                    {/* Đăng nhập với Facebook hoặc Google */}
                    <div className=" text-slate-400 text-xs">
                        <div className="pb-4 flex gap-2 items-center">
                            <div className="w-full h-[0.5px] bg-slate-400"></div>
                            HOẶC
                            <div className="w-full h-[0.5px] bg-slate-400"></div>
                        </div>
                        <div className="flex justify-between text-black gap-3">
                            <div className="flex items-center gap-1 justify-center border w-full border-solid border-slate-400 py-2 rounded-[2px] cursor-pointer" onClick={() => handleOAuth2("facebook")}>
                                <FaFacebook color="blue" size={20} />
                                Facebook
                            </div>
                            <div className="flex items-center gap-1 justify-center border w-full border-solid border-slate-400 py-2 rounded-[2px] cursor-pointer" onClick={() => handleOAuth2("google")}>
                                <FcGoogle size={20} />
                                Google
                            </div>
                        </div>
                    </div>
                </form>

                {/*  */}
                <div className="mb-[30px] flex justify-center text-sm">
                    <span className="text-slate-400">
                        Bạn mới biết đến Eduhub? <Link className="text-[#003555]" href={"/register"}>Đăng ký</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
