import Link from "next/link"

export default function RelatedSolutions() {
    return (
        <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4'>
            <h3 className='uppercase text-2xl font-semibold mb-6'>GIẢI PHÁP KHÁC TỪ UNICA</h3>
            <div className='md:flex flex-row justify-between lg:gap-20 gap-5 mb-14'>
                <Link href={"/"} className="shadow border border-xl rounded-lg basis-1/2">
                    <img className="rounded-t-lg w-full" src="https://static.unica.vn/media/images_v2018/hb-edu.jpg" alt="" />
                    <div className="p-3">
                        <p className="text-xl font-bold my-1.5">Edubit.vn - Ai cũng có thể dạy học online</p>
                        <p>Giải pháp elearning giúp tạo bài giảng, bài trắc nghiệm online chỉ với 1 click chuột </p>
                    </div>
                </Link>
                <Link href={"/"} className="shadow border border-xl rounded-lg basis-1/2">
                    <img className="rounded-t-lg w-full" src="https://static.unica.vn/media/images_v2018/hb-aca.jpg" alt="" />
                    <div className="p-3">
                        <p className="text-xl font-bold mb-1.5">Acabiz - Giải pháp đào tạo nội bộ cho doanh nghiệp</p>
                        <p>
                            Nâng cao năng lực đội ngũ với nền tảng Acabiz và hơn 500 khoá học chọn lọc từ Unica
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
