import React from 'react'

import { PiCertificateBold } from "react-icons/pi";
import { GoDownload } from "react-icons/go";

export default function CertificateTab() {
    return (
        <div className='text-sm font-light py-5 border-b border-gray-300 w-[80%]'>
            <div className='flex items-center gap-2 border border-solid border-[#c4c4c4] rounded p-2 min-h-[76px]'>
                <div className='w-[10%] h-full flex justify-center items-center'>
                    <PiCertificateBold size={40} color='green' />
                </div>
                <div>
                    <p className='text-base text-black font-normal'>
                        Chứng nhận hoàn thành khóa học: Khóa học đào tạo SEO miễn phí
                    </p>
                    <span>Bạn cần hoàn thành ít nhất 80% khóa học để được cấp giấy chứng nhận</span>
                </div>
                <div className='flex-1 flex justify-end'>
                    <button className='flex items-center border border-black px-4 py-1 w-fit rounded hover:bg-gray-300'>
                        <GoDownload size={16} />
                        <div className='ms-2 text-black font-medium'>Tải về</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
