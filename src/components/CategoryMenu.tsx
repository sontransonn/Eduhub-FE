import Link from 'next/link'

export default function CategoryMenu() {
    return (
        <nav className='bg-[#003555]'>
            <div className='py-4 px-4 lg:px-6 flex relative overflow-hidden lg:overflow-visible text-white'>
                <div className='mx-auto relative flex flex-row gap-8'>
                    <Link href={"/"}>Tin học văn phòng</Link>
                    <Link href={"/"}>Thiết kế</Link>
                    <Link href={"/"}>Ngoại ngữ</Link>
                    <Link href={"/"}>Marketing</Link>
                    <Link href={"/"}>Tài chính kế toán</Link>
                    <Link href={"/"}>Công nghệ</Link>
                    <Link href={"/"}>Sức khỏe - làm đẹp</Link>
                    <Link href={"/"}>Hôn nhân gia đình</Link>
                    <Link href={"/"}>Sách hay nên đọc</Link>
                    <Link href={"/"}>Đào tạo inhouse</Link>
                </div>
            </div>
        </nav>
    )
}
