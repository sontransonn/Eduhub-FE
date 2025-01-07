import React from "react"
import Link from "next/link"

export default function CTA() {
    return (
        <div className='bg-white'>
            <div className='max-w-8xl mx-auto p-5 lg:px-16 md:py-16 md:px-10 '>
                <div className='md:flex lg:gap-20 gap-4 text-center justify-center'>
                    <div className='basis-1/2 order-last justify-start lg:px-10'>
                        <img className="w-full h-auto" src="https://unica.vn/images/home_teacher.png" alt="" />
                    </div>
                    <div className='basis-1/2 flex flex-col gap-5 my-auto justify-end lg:px-10'>
                        <div className='md:text-[32px] text-lg font-bold'>Trở thành Giảng viên Eduhub</div>
                        <p className='md:text-xl'>Giúp mọi người trở nên tốt hơn - bao gồm cả chính bạn</p>
                        <Link href={"/teacher/form"} className="block md:w-fit mx-auto bg-[#1782FB] hover:bg-blue-600 px-[21px] py-3.5 text-white rounded">
                            ĐĂNG KÝ NGAY
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

