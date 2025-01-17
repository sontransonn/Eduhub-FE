"use client"
import React from 'react'
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { FaBullseye, FaInfoCircle, FaListAlt, FaGift, FaDollarSign } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function UserDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const params = useParams();
    const pathname = usePathname();
    const courseId = Array.isArray(params.courseId) ? params.courseId[0] : params.courseId;

    const menuItems = [
        { href: `/manage/${courseId}/target`, label: 'Mục tiêu khóa học', icon: <FaBullseye /> },
        { href: `/manage/${courseId}/infomation`, label: 'Thông tin cơ bản', icon: <FaInfoCircle /> },
        { href: `/manage/${courseId}/lessons`, label: 'Danh sách bài học', icon: <FaListAlt /> },
        { href: `/manage/${courseId}/document`, label: 'Tài liệu và quà tặng', icon: <FaGift /> },
        { href: `/manage/${courseId}/price`, label: 'Giá khóa học', icon: <FaDollarSign /> },
    ];

    const handleSend = () => {
        toast.success("Đơn duyệt đã được gửi!")
    }

    return (
        <main className="bg-[#F1F5F8] text-black relative">
            <div className="max-w-8xl mx-auto px-4 xl:px-20 md:px-10 md:py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <div className="bg-white border border-solid border-[#3333] p-4">
                            <nav className="flex flex-col gap-4">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname.startsWith(item.href);
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className={`flex items-center gap-2 py-3 px-4 rounded-lg transition duration-300 ${isActive
                                                ? 'bg-blue-100 text-blue-700 font-semibold'
                                                : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                                }`}
                                        >
                                            <span className="text-xl">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </nav>
                            <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300" onClick={handleSend}>
                                Gửi duyệt
                            </button>
                        </div>
                    </div>
                    <div className='col-span-9 flex flex-col border border-solid border-[#3333]'>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}
