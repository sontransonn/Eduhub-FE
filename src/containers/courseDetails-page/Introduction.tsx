"use client"
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Introduction = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`leading-10 text-justify mark overflow-hidden ${isExpanded ? "h-auto" : "h-[150px]"}`}>
                <h3>Vấn đề của khách hàng</h3>
                <p dir='ltr'>
                    Ăn uống luôn là chủ đề thu hút mọi người, đặc biệt vào những ngày cuối tuần, chúng ta có nhiều thời gian cho gia đình,
                    chế biến các món ăn ngon cho những người thân yêu.
                    Thay vì tốn hàng đống tiền ra ngoài mua đồ ăn sẵn,
                    vừa không đảm bảo vệ sinh, sức khỏe, chúng ta - nhất là các bạn nữ,
                    có thể dễ dàng trổ tài khéo tay của mình với các món ăn vặt đơn giản,
                    dễ làm.
                </p>
                <p dir='ltr'>
                    Bạn đang là chủ quán muốn có thêm những món
                    ăn HOT để doanh thu và hiệu quả kinh doanh có khả năng tăng cao
                </p>
                <p dir='ltr'>
                    Bạn có nhu cầu mở quán kinh doanh các món ăn vặt cho giới trẻ
                </p>
                <p dir='ltr'>
                    Hay đơn giản bạn là người thích đồ ăn vặt
                </p>
                <p dir='ltr'>
                    Bạn đang muốn tìm những món ăn vặt không chỉ ngon mà còn phù hợp với những trẻ đang ở
                    độ tuổi ăn vặt 2 tuổi trở lên
                </p>
                <p dir='ltr'>
                    Để giải quyết mọi vấn đề trên bạn hãy tham khảo ngay khoá học <strong>Hướng dẫn làm các món ăn vặt hot nhất thị trường </strong>
                    ngay hôm nay!
                </p>
                <h3 dir='ltr'>Nội dung khoá học Hướng dẫn làm các món ăn vặt hot nhất thị trường</h3>
                <p dir='ltr'>
                    <strong>Hướng dẫn làm các món ăn vặt hot nhất thị trường do cô Hương Choé </strong>
                    xây dựng, gồm 5 chương và 42 bài hướng dẫn chi tiết cách chế biến đồ ăn vặt hot nhất hiện nay.
                    Bạn sẽ được học hơn 40 món đồ ăn vặt vô cùng được yêu thích
                    trên thị trường như: dồi sụn nướng, chim cút quay,
                    khoai lang lắc phô mai, chè khúc bạch, chè khoai dẻo, chè bơ chè xoài,...
                </p>
                <p dir='ltr'>
                    Khoá học không chỉ dạy cách nấu ăn đơn thuần mà giảng viên còn hướng dẫn chi tiết cách sử dụng các loại nguyên liệu sạch, nguyên liệu đảm bảo an toàn mà các bé ăn dặm từ 2 tuổi đã có thể ăn được. Bạn sẽ có thêm kiến thức về kinh doanh quán ăn,
                    định lượng đồ ăn, setup menu cho món ăn thêm phong phú và
                    hợp lý hấp dẫn nhất. Ngoài các công thức,
                    cách làm các món ăn vặt bạn có thể biến tấu từ các món cơ bản
                    mang dấu ấn riêng của quán.
                </p>
                <p dir='ltr'>
                    Còn chần chờ gì nữa? Nhanh tay đăng ký khoá học
                    <strong>Hướng dẫn làm các món ăn vặt hot nhất thị trường do cô Hương choé </strong>
                    xây dựng tại Unica.vn!
                </p>
            </div>
            <button onClick={toggleExpand} className="mt-4 font-normal" >
                {isExpanded ? (
                    <div className='flex items-center gap-1'>
                        Ẩn bớt
                        <MdKeyboardArrowUp size={24} />
                    </div>
                ) : (
                    <div className='flex items-center gap-1'>
                        Hiện thêm
                        <MdKeyboardArrowDown size={24} />
                    </div>
                )}
            </button>
        </>
    )
}

export default Introduction