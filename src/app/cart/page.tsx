'use client'
import Link from "next/link"
import Header from "@/components/Header"
import CategoryMenu from "@/components/CategoryMenu"
import Footer from "@/components/Footer"

export default function CartPage() {

    const handleRedirect = (url: String) => {
        window.location.href = `${url}`
    }

    return (
        <>
            <Header />
            <CategoryMenu />
            <div className='bg-[#F1F5F8] text-black'>
                <div className='max-w-8xl mx-auto lg:px-20 md:px-10 px-4 pt-8 pb-6'>
                    <h3 className='text-semibold text-2xl mb-6'>Giỏ hàng</h3>
                    <div className='text-center py-24'>
                        <p className='mb-6'>Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm một khóa học!</p>
                        <Link href={"/"} onClick={() => handleRedirect("/")} className="block w-fit mx-auto btn bg-[#1782FB] hover:bg-blue-600 text-white font-medium px-8 py-4 fit-width">
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
