import React from 'react'

const Teacher = () => {
    return (
        <div className='flex flex-col gap-2'>
            <a href="" className='block md:text-[#006CCB] text-[#F77321]'>Nguyễn Thu Hương (Choé)</a>
            <div className='italic font-light'>Blogger ẩm thực</div>
            <div className='flex gap-6'>
                <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/June720181115am_nguyen-thu-huong-huong-choe-choe-cooking_thumb.jpg" className='w-[117px] h-[117px] rounded-full' alt="" />
                <div className='text-sm'></div>
            </div>
            <div className='leading-5 md:leading-10 text-justify text-sm'>
                <p>Hương Choé có hơn 4 năm kinh nghiệm làm việc với lĩnh vực ẩm thực.</p>
                <p>Là food blogger được giải thưởng Influence-asia bình chọn trong top 15 người có ảnh hưởng trên cộng đồng mạng trong lĩnh vực food.</p>
            </div>
        </div>
    )
}

export default Teacher