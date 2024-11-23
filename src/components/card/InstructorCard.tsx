import React from 'react'

const InstructorCard = () => {
    return (
        <div className='w-full flex flex-col gap-3 p-5 justify-center items-center'>
            <img
                src="https://static.unica.vn/uploads/phan-van-truong/June2420201127am_phan-van-truong_thumb.jpg"
                alt=""
                className='rounded-full w-[150px] h-[150px]'
            />
            <div className='text-lg text-[#273167] md:text-2xl font-semibold h-[30px] text-center'>
                <span>Hồ Minh Chính</span>
            </div>
            <div className='text-sm text-center line-clamp-2'>
                Chuyên gia tâm lý, TGĐ Công ty Tư Vấn Tâm Lý và Đào Tạo VERA
            </div>
        </div>
    )
}

export default InstructorCard