import React from 'react'

import { FaStar } from 'react-icons/fa'

const Reviews = () => {
    return (
        <>
            <div className='grid grid-cols-2'>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className='md:col-span-1 col-span-2 py-6 border-t border-gray-300 odd:pr-4 even:pl-4'>
                        <div className='flex gap-2 mb-4.5'>
                            <img className='w-[35px] h-[35px] rounded-full' src="https://ui-avatars.com/api/?name=Tran Thi Thanh Trang&color=FFF&background=031B49" alt="" />
                            <div>
                                <div className='font-medium'>Tran Thi Thanh Trang</div>
                                <div className='flex gap-2'>
                                    <div className='flex text-[#F77321]'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    3 năm trước
                                </div>
                            </div>
                        </div>
                        <p>giao vien day hay, nhiet tinh, co tam, co tinh than. cho 5 sao, cam on unica da co nhieu khoa hoc bo ich nhu vay, hi vong dc khuyen mai nhieu khoa hoc re hon nua</p>
                    </div>
                ))}
            </div>

            {/* Xem thêm đánh giá */}
            <div className='text-center mt-6'>
                <button className='border border-gray-400 hover:bg-gray-200 rounded-lg py-3 px-5'>Xem thêm đánh giá</button>
            </div>
        </>
    )
}

export default Reviews