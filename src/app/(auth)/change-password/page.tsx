"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import toast from 'react-hot-toast';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { changePassword } from '@/api/user.api';

export default function ChangePassword() {
    const router = useRouter()

    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await changePassword(oldPassword, newPassword, confirmPassword)
            toast.success(data.message)
            setOldPassword("")
            setNewPassword("")
            setConfirmPassword("")
            router.push("/info")
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('Failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('Failed with an unknown error');
            }
        }
    };

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-full bg-white">
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Thay đổi mật khẩu</h1>

                <form className="text-sm px-[30px]" onSubmit={handleChangePassword}>
                    <div className="flex flex-col gap-4">
                        <div className='w-full relative'>
                            <input
                                type={showPasswordOld ? "text" : "password"} required
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder="Mật khẩu cũ" onChange={(e) => setOldPassword(e.target.value)}
                            />
                            {showPasswordOld ? (
                                <FaEye onClick={() => setShowPasswordOld(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            ) : (
                                <FaEyeSlash onClick={() => setShowPasswordOld(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            )}
                        </div>
                        <div className='w-full relative'>
                            <input
                                type={showPasswordNew ? "text" : "password"} required
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder="Mật khẩu mới" onChange={(e) => setNewPassword(e.target.value)}
                            />
                            {showPasswordNew ? (
                                <FaEye onClick={() => setShowPasswordNew(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            ) : (
                                <FaEyeSlash onClick={() => setShowPasswordNew(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            )}
                        </div>
                        <div className='w-full relative'>
                            <input
                                type={showPasswordConfirm ? "text" : "password"} required
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder="Xác nhận mật khẩu" onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {showPasswordConfirm ? (
                                <FaEye onClick={() => setShowPasswordConfirm(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            ) : (
                                <FaEyeSlash onClick={() => setShowPasswordConfirm(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                            )}
                        </div>
                        <button type="submit" className="bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold">
                            Cập nhật
                        </button>
                    </div>
                </form>

                <div className="flex justify-between text-sm text-[#003555] font-medium mt-4 px-[30px] pb-[30px]">
                    <Link href={"/info"} className="hover:underline">Hồ sơ cá nhân</Link>
                    <Link href={"/register"} className="hover:underline">Tạo tài khoản mới</Link>
                </div>
            </div>
        </div>
    )
}
