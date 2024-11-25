import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#003555]'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-6'>
                {/* Thông tin liên hệ và liên kết */}
                <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-6 md:gap-0'>
                    <div className='flex flex-col text-white'>
                        {/* Logo */}
                        <a href={"/"}>
                            <img
                                src="https://static.unica.vn/media/images_v2018/logo-unica.png"
                                alt=""
                            />
                        </a>
                        <div className='mt-6 text-sm flex flex-col gap-4'>
                            <p>247 Cầu Giấy, TP.Hà Nội</p>
                            <p>Hotline 1: 19001568</p>
                            <p>Hotline 2: 090 488 6095</p>
                            <p>Email: xxxxxxxxxx@unica.vn</p>
                            <p>08h00 - 17h30, thứ 2 - thứ 7</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <p className="text-lg font-medium">Về Unica</p>
                        <div className="mt-6">
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><a href="/gioi-thieu">Giới thiệu về Unica</a></li>
                                <li><a href="/faq">Câu hỏi thường gặp</a></li>
                                <li><a href="/chinh-sach-bao-mat.html">Chính sách bảo mật</a></li>
                                <li><a href="/huong-dan-thanh-toan.html">Hướng dẫn thanh toán</a></li>
                                <li><a href="/kichhoat">Kích hoạt khóa học</a></li>
                                <li><a href="/blog">Góc chia sẻ</a></li>
                                <li><a href="/dieu-khoan-dich-vu.html">Điều khoản dịch vụ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <p className="text-lg font-medium">Hợp tác</p>
                        <div className="mt-6">
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><a href="/teacher">Đăng ký giảng viên</a></li>
                                <li><a href="https://edubit.vn?ref=unica"
                                    target="_blank">Giải pháp e-learning</a></li>
                                <li><a href="https://acabiz.vn?ref=unica"
                                    target="_blank">Đào tạo doanh nghiệp</a></li>
                                <li><a href="http://inhouse.unica.vn">Đào tạo Inhouse</a></li>
                                <li><a href="/affiliate">Affiliate</a></li>
                                <li><a href="/agency">Agency</a></li>
                                <li><a href="http://quaydung.unica.vn/">Quay dựng video</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col text-white md:mt-2 lg:mt-0">
                        <p className="text-lg font-medium">Mobile</p>
                        <div className="mt-6">
                            <ul className="flex flex-col lg:flex-col md:flex-row gap-4">
                                <li>
                                    <a href="https://itunes.apple.com/us/app/unica-online-learning/id1230853725?ls=1&mt=8">
                                        <img className="w-[145px]" alt="Unica on App Store"
                                            src="https://unica.vn/master/image/app-store.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.inet.Learning">
                                        <img className="w-[145px]" alt="Unica on Google Play"
                                            src="https://unica.vn/master/image/google.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Thông tin pháp lý và liên kết mạng xã hội */}
                <div className='text-white mt-8 border-t-2 border-[#1782FB] border-opacity-30 pt-4 flex justify-between flex-col md:flex-row'>
                    <div className='flex flex-col md:flex-col gap-2'>
                        <p className='lg:mr-4 text-xs md:text-sm font-light md:font-normal leading-4 md:leading-none'>
                            Công ty cổ phần đào tạo trực tuyến Unica - Số 247 Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, TP Hà Nội.
                        </p>
                        <p className='lg:mr-4 text-xs md:text-sm font-light md:font-normal leading-4 md:leading-none'>
                            Đại Diện: Ông Nguyễn Trọng Thơ
                        </p>
                        <p className='lg:mr-4 text-xs md:text-sm font-light md:font-normal leading-4 md:leading-none'>
                            Mã số thuế: 0107695756 cấp tại Phòng đăng ký kinh doanh Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                        </p>
                    </div>
                    <div className='flex items-center gap-3 mt-3 md:mt-0'>
                        <div className='flex items-center'>
                            <a href="https://www.facebook.com/Unica.vn">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_775_11947)">
                                        <rect x="4" y="4.12793" width="24" height="24" rx="4" fill="white" />
                                        <g clip-path="url(#clip0_775_11947)">
                                            <path d="M19.4999 10.2944H17.7499C16.9764 10.2944 16.2345 10.6017 15.6875 11.1487C15.1405 11.6957 14.8333 12.4376 14.8333 13.2111V14.9611H13.0833V17.2944H14.8333V21.9611H17.1666V17.2944H18.9166L19.4999 14.9611H17.1666V13.2111C17.1666 13.0564 17.228 12.908 17.3374 12.7986C17.4468 12.6892 17.5952 12.6278 17.7499 12.6278H19.4999V10.2944Z" fill="#003555" stroke="#003555" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_775_11947" x="0" y="0.12793" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_775_11947" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_775_11947" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_775_11947">
                                            <rect width="14" height="14" fill="white" transform="translate(9 9.12793)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCrQoGDajCBs91atwgV8H6gw">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_775_11949)">
                                        <rect x="4" y="4.12793" width="24" height="24" rx="4" fill="white" />
                                        <g clip-path="url(#clip0_775_11949)">
                                            <path d="M23.0266 12.4078C22.9474 12.0914 22.7862 11.8015 22.5591 11.5674C22.332 11.3333 22.0471 11.1632 21.7333 11.0744C20.5866 10.7944 16 10.7944 16 10.7944C16 10.7944 11.4133 10.7944 10.2666 11.1011C9.95281 11.1899 9.66796 11.3599 9.44087 11.594C9.21378 11.8281 9.0525 12.118 8.97331 12.4344C8.76345 13.5981 8.6608 14.7786 8.66664 15.9611C8.65916 17.1525 8.76182 18.342 8.97331 19.5144C9.06061 19.821 9.22551 20.0999 9.45207 20.3241C9.67863 20.5483 9.95919 20.7103 10.2666 20.7944C11.4133 21.1011 16 21.1011 16 21.1011C16 21.1011 20.5866 21.1011 21.7333 20.7944C22.0471 20.7056 22.332 20.5356 22.5591 20.3015C22.7862 20.0674 22.9474 19.7775 23.0266 19.4611C23.2349 18.3062 23.3375 17.1347 23.3333 15.9611C23.3408 14.7697 23.2381 13.5802 23.0266 12.4078Z" stroke="#003555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.5 18.1413L18.3333 15.9613L14.5 13.7812V18.1413Z" fill="#003555" stroke="#003555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_775_11949" x="0" y="0.12793" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_775_11949" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_775_11949" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_775_11949">
                                            <rect width="16" height="16" fill="white" transform="translate(8 8.12793)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div
                            id="footerLangButton"
                            data-dropdown-toggle="footerLang"
                            data-dropdown-placement="top"
                            className="my-auto border"
                            typeof="button">
                            <div className="flex items-center gap-2 px-4 py-3 text-sm">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22.1279C18.0228 22.1279 22.5 17.6508 22.5 12.1279C22.5 6.60508 18.0228 2.12793 12.5 2.12793C6.97715 2.12793 2.5 6.60508 2.5 12.1279C2.5 17.6508 6.97715 22.1279 12.5 22.1279Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 12.1279H22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5 2.12793C15.0013 4.86628 16.4228 8.41996 16.5 12.1279C16.4228 15.8359 15.0013 19.3896 12.5 22.1279C9.99872 19.3896 8.57725 15.8359 8.5 12.1279C8.57725 8.41996 9.99872 4.86628 12.5 2.12793Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Tiếng Việt</p>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 9.12793L12.5 15.1279L18.5 9.12793" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer