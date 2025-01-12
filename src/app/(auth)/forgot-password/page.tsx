'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation';
import React, { useState } from "react"
import toast from "react-hot-toast";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { sendOtp, verifyOtp, resetPassword } from "@/api/auth.api";

export default function ForgotPassword() {
    const router = useRouter();

    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await sendOtp(email)
            toast.success(data.message)
            setIsCodeSent(true);
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

    const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await verifyOtp(email, code)
            toast.success(data.message)
            setIsVerified(true);
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

    const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await resetPassword(email, newPassword, confirmPassword)
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
    };

    return (
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-full bg-white">
                <h1 className="text-lg text-[#003555] font-bold uppercase p-[30px]">Quên mật khẩu</h1>

                {!isCodeSent && !isVerified && (
                    <form className="text-sm px-[30px]" onSubmit={handleSendCode}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email" required
                                name="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder="Email/Số điện thoại"
                            />
                            <button type="submit" className="bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold">
                                Gửi mã OTP
                            </button>
                        </div>
                    </form>
                )}

                {isCodeSent && !isVerified && (
                    <form className="text-sm px-[30px]" onSubmit={handleVerifyCode}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text" required
                                name="code" value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                placeholder="Nhập mã xác minh"
                            />
                            <button type="submit" className="bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold">
                                Xác minh
                            </button>
                        </div>
                    </form>
                )}

                {isVerified && (
                    <form className="text-sm px-[30px]" onSubmit={handleUpdatePassword}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email" readOnly
                                value={email}
                                className={`w-full rounded-[2px] p-3 border border-slate-300 bg-gray-100 outline-none`}
                                placeholder="Email"
                            />
                            <div className='w-full relative'>
                                <input
                                    type={showPasswordNew ? "text" : "password"} required
                                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                                    className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                    placeholder="Mật khẩu mới"
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
                                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full rounded-[2px] p-3 border focus:bg-white border-slate-300 outline-none focus:outline-none focus:ring`}
                                    placeholder="Xác nhận mật khẩu"
                                />
                                {showPasswordConfirm ? (
                                    <FaEye onClick={() => setShowPasswordConfirm(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                                ) : (
                                    <FaEyeSlash onClick={() => setShowPasswordConfirm(prev => !prev)} size={18} className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-4" />
                                )}
                            </div>
                            <button type="submit" className="bg-[#003555] rounded-[2px] hover:bg-[#1c3c55] w-full py-3 px-6 text-white font-bold">
                                Cập nhật mật khẩu
                            </button>
                        </div>
                    </form>
                )}

                <div className="flex justify-between text-sm text-[#003555] font-medium mt-4 px-[30px] pb-[30px]">
                    <Link href={"/login"} className="hover:underline">Đăng nhập</Link>
                    <Link href={"/register"} className="hover:underline">Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}


