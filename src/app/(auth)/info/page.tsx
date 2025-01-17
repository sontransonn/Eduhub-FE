"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2'
import toast from 'react-hot-toast';

import { setUserInfo } from "@/store/slices/userSlice";

import { IoCameraOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";

import { getUserInfo, updateUserInfo } from '@/api/user.api';

export default function Info() {
    const dispatch = useDispatch();

    const [avatar, setAvatar] = useState<File | null>(null);
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        avatar: "",
        fullName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        dob: '',
        gender: 'MALE',
    });

    useEffect(() => {
        fetchData()
    }, [dispatch])

    const fetchData = async () => {
        try {
            const data = await getUserInfo()
            dispatch(setUserInfo(data.userInfo))
            setBase64Image(data.userInfo.avatar)
            setFormData({
                avatar: data.userInfo.avatar,
                fullName: data.userInfo.fullName || '',
                email: data.userInfo.email || '',
                phone: data.userInfo.phone || '',
                country: data.userInfo.country || '',
                city: data.userInfo.city || '',
                dob: data.userInfo.dateOfBirth ? data.userInfo.dateOfBirth.split('T')[0] : '',
                gender: data.userInfo.gender || '',
            });
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
                console.error('Failed:', error.message);
            } else {
                toast.error('An unknown error occurred');
                console.error('Failed with an unknown error');
            }
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            phone: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const formPayload = new FormData();
            if (avatar) {
                formPayload.append('avatar', avatar);
            }
            const data = await updateUserInfo(formData)
            toast.success(data.message)
            fetchData()
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed:', error.message);
            } else {
                console.error('Failed with an unknown error');
            }
        }
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
                            <input
                                type="file" accept="image/*"
                                id="avatar-input" style={{ display: "none" }}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setAvatar(file);

                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                if (reader.result) {
                                                    setBase64Image(reader.result as string);
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }
                                }}
                            />
                            <label htmlFor="avatar-input" className="absolute bottom-0 right-0 border-2 rounded-full bg-white p-1 cursor-pointer">
                                <IoCameraOutline size={24} color="#666c77" />
                            </label>
                            <img
                                src={base64Image || ""}
                                alt="User Avatar"
                                width={96}
                                height={96}
                                className="rounded-full object-cover"
                            />
                        </div>

                        <input
                            type="text" name="fullName"
                            className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring"
                            placeholder="Họ tên"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />

                        <div className='w-full relative'>
                            <input
                                type="text" name="email"
                                className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <MdOutlineVerified size={18} className='cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' />
                        </div>

                        <div className='w-full relative'>
                            <PhoneInput
                                country="vn"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                containerClass="w-full !rounded-none"
                                inputClass="!w-full !h-auto !border-0 !rounded-none px-3 py-3 text-gray-700 bg-white !text-sm shadow focus:outline-none focus:ring"
                            />
                            <MdOutlineVerified size={18} className='cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' />
                        </div>

                        <div className='w-full flex relative gap-2'>
                            <div className='flex-1'>
                                <input
                                    type="text" name="country"
                                    className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring"
                                    placeholder="Chọn quốc gia"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex-1'>
                                <input
                                    type="text" name="city"
                                    className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring"
                                    placeholder="Chọn tỉnh thành"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className='w-full flex relative gap-2'>
                            <div className='flex-1'>
                                <input
                                    type="date" name="dob"
                                    className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring"
                                    placeholder="dd/mm/yy"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex-1'>
                                <select
                                    name="gender"
                                    className="w-full border-0 px-3 py-3 text-gray-700 bg-white text-sm shadow focus:outline-none focus:ring custom-select-arrow"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="MALE">Nam</option>
                                    <option value="FEMALE">Nữ</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className='w-4 h-4' />
                            <span className='text-sm'>Bỏ qua, tôi sẽ cập nhật sau</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <button
                                    type="button"
                                    onClick={handleUpdate}
                                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold uppercase px-4 py-3 rounded hover:shadow-lg"
                                >
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
