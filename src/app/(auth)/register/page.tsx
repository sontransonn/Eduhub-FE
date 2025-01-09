'use client'
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

import { RootState } from "@/store";

import { register } from "@/api/auth.api";

export default function Register() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { userInfo } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (userInfo) {
            router.push('/info')
        }
    }, [router, userInfo])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return toast.error("Vui lòng kiểm tra lại mật khẩu!")
        }

        try {
            const data = await register(formData);
            toast.success(data.message)
            router.push("/login")
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('Failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('Failed with an unknown error');
            }
        }
    }

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-full bg-white">
                {/* Tiêu đề */}
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Đăng ký</h1>

                {/* Form đăng ký */}
                <form className="text-sm px-[30px] pb-[30px]" onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-4">
                        <input
                            type="text" required
                            name="fullName"
                            className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 focus:outline-none focus:ring`}
                            placeholder='Họ tên'
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="email" required
                            name="email"
                            className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="flex gap-3">
                            <input
                                type="password" required
                                name="password"
                                minLength={8}
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder='Mật khẩu'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <input
                                type="password" required
                                name="confirmPassword"
                                minLength={8}
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder='Nhập lại mật khẩu'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className='bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold'>
                            Đăng ký
                        </button>
                    </div>

                    {/* Quên mật khẩu và Đăng nhập với SMS*/}
                    <div className="flex text-xs justify-between my-[10px]">
                        <Link href={"/forgot-password"}>Quên mật khẩu?</Link>
                    </div>

                    {/* Đăng nhập với Facebook hoặc Google */}
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

                {/* Bạn đã có tài khoản? */}
                <div className="mb-[30px] flex justify-center text-sm">
                    <span className="text-slate-400">
                        Bạn đã có tài khoản? <Link className="text-[#003555]" href={"/login"}>Đăng nhập</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
