import Link from "next/link"

export default function Header() {
    return (
        <header className='sticky z-30 md:z-40 top-0 bg-white shadow-2xl'>
            <div className='hidden md:block'>
                <div className='py-4 px-6'>
                    <div className='flex flex-row'>
                        <div className='2xl:basis-7/12 lg:basis-6/12 basis-7/12 flex xl:gap-8 w-auto items-center gap-4'>
                            {/* Logo */}
                            <Link href={"/"}>
                                <img
                                    width={140}
                                    src="https://unica.vn/media/img/logo-unica.svg"
                                    alt="Học Online: 2000+ Khóa học trực tuyến cho người đi làm"
                                    className="max-w-none"
                                />
                            </Link>

                            {/* Menu */}
                            <div className="my-auto">
                                <div className="flex w-36 text-lg items-center uppercase gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M7.27502 1.125H3.15002C2.5287 1.125 2.02502 1.62868 2.02502 2.25V6.375C2.02502 6.99632 2.5287 7.5 3.15002 7.5H7.27502C7.89634 7.5 8.40002 6.99632 8.40002 6.375V2.25C8.40002 1.62868 7.89634 1.125 7.27502 1.125Z" fill="#6CC4F5" />
                                        <path d="M17.3017 3.53205L14.4679 0.698172C14.2608 0.49139 13.9801 0.375244 13.6875 0.375244C13.3949 0.375244 13.1142 0.49139 12.9071 0.698172L10.0732 3.53205C9.86627 3.73902 9.75 4.01973 9.75 4.31242C9.75 4.60512 9.86627 4.88583 10.0732 5.0928L12.9071 7.92667C13.1143 8.13318 13.3949 8.24914 13.6875 8.24914C13.98 8.24914 14.2607 8.13318 14.4679 7.92667L17.3017 5.0928C17.5087 4.88583 17.625 4.60512 17.625 4.31242C17.625 4.01973 17.5087 3.73902 17.3017 3.53205Z" fill="#F2C94C" />
                                        <path d="M15.7501 9.59985H11.6251C11.0038 9.59985 10.5001 10.1035 10.5001 10.7249V14.8499C10.5001 15.4712 11.0038 15.9749 11.6251 15.9749H15.7501C16.3714 15.9749 16.8751 15.4712 16.8751 14.8499V10.7249C16.8751 10.1035 16.3714 9.59985 15.7501 9.59985Z" fill="#6CC4F5" />
                                        <path d="M7.27502 9.59985H3.15002C2.5287 9.59985 2.02502 10.1035 2.02502 10.7249V14.8499C2.02502 15.4712 2.5287 15.9749 3.15002 15.9749H7.27502C7.89634 15.9749 8.40002 15.4712 8.40002 14.8499V10.7249C8.40002 10.1035 7.89634 9.59985 7.27502 9.59985Z" fill="#6CC4F5" />
                                    </svg>
                                    Danh mục
                                </div>
                            </div>

                            {/* Input */}
                            <div className="w-full">
                                <form className="relative" action="/search" method="get">
                                    <input
                                        autoComplete="on"
                                        name="key" id="text_search"
                                        value="" type="text"
                                        className="block w-full px-4 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                                        placeholder="Tìm khóa học, giảng viên" required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 right-0 h-full pr-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#929495" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20.9999 21L16.6499 16.65" stroke="#929495" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className='2xl:basis-5/12 lg:basis-6/12 basis-5/12 flex justify-end xl:gap-6 gap-4'>
                            <div className="my-auto lg:block sm:hidden">
                                <Link className="block" href={"/"}>Doanh nghiệp</Link>
                            </div>
                            <div className="my-auto lg:block sm:hidden">
                                <Link className="block" href={"/"}>Hội viên</Link>
                            </div>
                            <div className="my-auto">
                                <Link className="relative" href={"/cart"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="my-auto">
                                <Link className="block font-bold" href={"/login"}>
                                    Đăng nhập
                                </Link>
                            </div>
                            <div className="my-auto p-3 text-white bg-[#1782FB] rounded font-bold">
                                <Link className="block" href={"/register"}>
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For responsive */}
            <div className="lg:hidden md:hidden">
                <div className="grid grid-cols-3 px-4 py-3.5">
                    <div>
                        <button className="text-2xl" type="button" data-drawer-target="drawer-left-navbar" data-drawer-show="drawer-left-navbar" data-drawer-placement="left" aria-controls="drawer-left-navbar">
                            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.5593 22.9091H3.49148L5.11222 26.8665H5.17188L6.79261 22.9091H7.72479V28H6.99396V24.3161H6.94673L5.44531 27.9925H4.83878L3.33736 24.3136H3.29013V28H2.5593V22.9091ZM8.84153 28V22.9091H12.0333V23.5703H9.60964V25.1214H11.8667V25.7802H9.60964V27.3388H12.0631V28H8.84153ZM17.1683 22.9091V28H16.4624L13.8746 24.2663H13.8274V28H13.0593V22.9091H13.7702L16.3604 26.6477H16.4077V22.9091H17.1683ZM21.5626 22.9091H22.3332V26.2575C22.3332 26.6138 22.2495 26.9295 22.0821 27.2045C21.9147 27.478 21.6794 27.6934 21.3762 27.8509C21.0729 28.0066 20.7174 28.0845 20.3097 28.0845C19.9037 28.0845 19.5491 28.0066 19.2458 27.8509C18.9426 27.6934 18.7072 27.478 18.5399 27.2045C18.3725 26.9295 18.2888 26.6138 18.2888 26.2575V22.9091H19.0569V26.1953C19.0569 26.4257 19.1075 26.6303 19.2085 26.8093C19.3113 26.9883 19.4563 27.1291 19.6436 27.2319C19.8308 27.333 20.0529 27.3835 20.3097 27.3835C20.5683 27.3835 20.7912 27.333 20.9784 27.2319C21.1673 27.1291 21.3115 26.9883 21.411 26.8093C21.512 26.6303 21.5626 26.4257 21.5626 26.1953V22.9091Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <a href="/">
                        <img className="w-[140px]" src="https://unica.vn/media/img/logo-unica.svg" alt="Học Online: 2000+ Khóa học trực tuyến cho người đi làm" />
                    </a>
                    <div className="flex justify-end items-center gap-6">
                        <svg data-modal-target="search-modal" data-modal-toggle="search-modal" data-modal-placement="top" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.9999 21L16.6499 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <a href="/cart" className="relative">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
