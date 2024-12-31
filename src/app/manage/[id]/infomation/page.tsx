import React from 'react'

export default function Infomation() {
    return (
        <>
            <h1 className='py-4 px-5 border-b border-solid border-[#3333] text-lg font-semibold'>Thông tin cơ bản</h1>
            <div className='flex flex-col gap-4 py-4 px-5'>
                <p>
                    Trang tổng quan của bạn rất quan trọng đối với thành công của bạn trên Eduhub. Nếu được thực hiện đúng trang này cũng có thể giúp bạn hiển thị
                    trong các công cụ tìm kiếm như Google. Khi bạn hoàn thành phần này, hãy nghĩ đến việc tạo trang Tổng quan khóa học hấp dẫn để mọi người muốn đăng ký học
                    tìm hiểu thêm về <span>cách tạo trang tổng quan khóa học của bạn</span> và <span>các tiêu chuẩn tiêu đề quan trọng</span>
                </p>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Tên khóa học</h5>
                    <input
                        type="text" name={"courseName"}
                        // value={courseUpdates.courseName} onChange={handleInputChange}
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333]'
                        placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao'
                    />
                    <p className='text-sm'>Tiêu đề của bạn không những phải thu hút sự chú ý, chứa nhiều thông tin mà còn được tối ưu hóa để dễ tìm kiếm</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Đường dẫn</h5>
                    <input
                        type="text"
                        // value={courseUpdates.slug}
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333]'
                        placeholder='Ví dụ: Word 2019 từ cơ bản đến nâng cao'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Mô tả ngắn</h5>
                    <textarea
                        rows={4} name="description"
                        // value={courseUpdates.description}
                        // onChange={handleInputChange}
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333]'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Thể loại</h5>
                    <input type="text" className='w-full px-3 py-2 outline-none border border-solid border-[#3333]' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Giới thiệu khóa học</h5>
                    <textarea
                        rows={4} name='introduce'
                        // value={courseUpdates.introduce}
                        // onChange={handleInputChange}
                        className='w-full px-3 py-2 outline-none border border-solid border-[#3333]'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 className='text-lg font-medium'>Ảnh khóa học</h5>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex justify-center items-center h-[250px] bg-[#cccccc] col-span-1'>
                            <span className='text-xl font-medium text-[#a5a5a5]'>800 x 450</span>
                        </div>
                        <div className='col-span-1 flex flex-col gap-4'>
                            <p>
                                Tải hình ảnh khóa học lên tại đây. Để được chấp nhận, hình ảnh phải đáp ứng tiêu chuẩn chất lượng hình ảnh khóa học.
                                Hướng dẫn quan trọng: 800x450 pixel; .jpg; .jpeg; .gif; .png và không có chữ trên hình ảnh.
                            </p>
                            <input
                                type="file" required accept="image/*"
                                // onChange={handleFileChange}
                                className='border border-solid border-[#3333] outline-none bg-white text-sm file:bg-blue-500 file:text-white file:border-none file:px-4 file:py-2 hover:file:bg-blue-600 cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
