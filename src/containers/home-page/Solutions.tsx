import React from "react"
import Link from "next/link"

const Solutions = () => {
    return (
        <div className='max-w-8xl mx-auto px-4 xl:px-20 md:px-10 py-12'>
            <h4 className='uppercase text-2xl font-semibold'>GIẢI PHÁP KHÁC TỪ UNICA</h4>
            <div className='md:flex flex-row justify-between lg:gap-20 gap-5 mt-6'>
                <Link href={"/"} className="shadow border rounded-sm border-xl basis-1/2">
                    <img className="rounded-t-sm w-full" src="https://static.unica.vn/media/images_v2018/hb-edu.jpg" alt="" />
                    <div className="p-3 flex flex-col gap-1">
                        <p className="text-xl font-bold">Edubit.vn - Ai cũng có thể dạy học online</p>
                        <p>Giải pháp elearning giúp tạo bài giảng, bài trắc nghiệm online chỉ với 1 click chuột </p>
                    </div>
                </Link>
                <Link href={"/"} className="shadow border rounded-sm border-xl basis-1/2">
                    <img className="rounded-t-sm w-full" src="https://static.unica.vn/media/images_v2018/hb-aca.jpg" alt="" />
                    <div className="p-3 flex flex-col gap-1">
                        <p className="text-xl font-bold">Acabiz - Giải pháp đào tạo nội bộ cho doanh nghiệp</p>
                        <p> Nâng cao năng lực đội ngũ với nền tảng Acabiz và hơn 500 khoá học chọn lọc từ Unica </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Solutions
