import Link from "next/link"

const CTA = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-8xl mx-auto md:py-20 lg:px-20 md:px-10 px-4'>
                <div className='md:flex lg:gap-20 gap-4 text-center justify-center'>
                    <div className='basis-1/2 order-last justify-start lg:px-14'>
                        <img className="w-full h-auto" src="https://unica.vn/images/home_teacher.png" alt="" />
                    </div>
                    <div className='basis-1/2 my-auto justify-end pb-4 lg:px-10'>
                        <div className='md:text-[32px] text-lg font-bold md:mb-3 mb-4'>Trở thành Giảng viên Unica</div>
                        <p className='md:text-xl md:mb-7 mb-4'>Giúp mọi người trở nên tốt hơn - bao gồm cả chính bạn</p>
                        <Link href={"/teacher"} className="block md:w-fit mx-auto bg-[#1782FB] px-[21px] py-3.5 text-white uppercase rounded">
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA