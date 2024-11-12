// import Header from "@/components/Header"
// import CategoryMenu from "@/components/Navbar"
// import Footer from "@/components/Footer"

export default function BizPage() {
    return (
        <>
            {/* <Header />
            <CategoryMenu /> */}
            <div className="bg-[#F1F5F8] text-black">
                <div className="py-20 inline-block w-full bg-[#f5f5f5]">
                    <div className="max-w-8xl mx-auto lg:px-20 md:px-10 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col">
                                <h1 className="text-3xl md:text-4xl font-semibold text-center mb-[25px] mt-0">
                                    Tư vấn đào tạo cho doanh nghiệp
                                </h1>
                                <div>
                                    <span className="text-base font-bold mb-[30px] block">Hãy trải nghiệm giải pháp đào tạo Unica để hiểu tại sao hàng trăm công ty hàng đầu lựa chọn chúng tôi để đào tạo nhân viên:</span>
                                    <ul className="list-disc">
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Hơn <b>500 </b>
                                            khóa học dành riêng cho doanh nghiệp, được đào tạo bởi những chuyên gia hàng đầu giúp nhân sự học dễ dàng mọi lúc, mọi nơi.
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Hệ thống báo cáo chi tiết, dễ hiểu giúp doanh nghiệp bám sát kết quả học tập của từng nhân viên và phòng ban.
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Học tập mọi lúc mọi nơi, giúp nhân sự của bạn học tập liên tục, xóa đi lỗ hổng kỹ năng, đáp ứng được mọi yêu cầu của công việc.
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Đội ngũ hơn <b>800 chuyên gia </b>
                                            đào tạo doanh nghiệp hàng đầu tại Việt Nam.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-base font-bold mb-[30px] block">Unica giúp doanh nghiệp chuyển đổi số đào tạo nội bộ bằng:</span>
                                    <ul className="list-decimal">
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Thuê các khóa học online có sẵn chỉ với <b>8.000đ </b>
                                            / nhân viên / tháng
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Đào tạo <b>inhouse </b>
                                            theo nhu cầu của doanh nghiệp: trực tiếp hoặc Zoom
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Nền tảng đào tạo nội bộ riêng: doanh nghiệp có thể tự upload khóa học
                                        </li>
                                        <li className="ml-5 leading-[23px] mb-5">
                                            Xây dựng chuẩn khung năng lực từng vị trí, các bài kiểm tra, khảo sát,..
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-base font-bold mb-[30px] block">Được tin dùng bởi hàng trăm doanh nghiệp:</span>
                                    <ul className="grid grid-cols-5 gap-4 mt-4">
                                        {/* <li><img src="https://unica.vn/media/img/ub-logo-1.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-2.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-3.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-4.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-5.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-6.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-7.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-8.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-9.png" alt="" /></li>
                                        <li><img src="https://unica.vn/media/img/ub-logo-10.png" alt="" /></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center">
                                    <div className="font-bold md:text-[22px] text-[20px] text-center">Vui Lòng Để Lại Thông Tin Bên Dưới</div>
                                    <p className="md:text-[20px] text-[18px] mb-[30px]">Để Được Tư Vấn Giải Pháp Phù Hợp</p>
                                    <form action="" method="post">
                                        <div className="w-full mb-[15px]">
                                            <input
                                                type="text"
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Họ và tên"
                                            />
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <input
                                                type="text"
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <input
                                                type="text"
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Số điện thoại"
                                            />
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <input
                                                type="text"
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Tên công ty"
                                            />
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <input
                                                type="text"
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Chức danh"
                                            />
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <select className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm">
                                                <option value="">Quy mô nhân sự</option>
                                                <option value="">10-100</option>
                                                <option value="">101-500</option>
                                                <option value="">501-1000</option>
                                                <option value="">1001-5000</option>
                                                <option value="">5000</option>
                                            </select>
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <textarea
                                                className="w-full outline-blue-600 p-[10px] border-[2px] rounded-sm"
                                                placeholder="Yêu cầu đào tạo"
                                                rows={3}>
                                            </textarea>
                                        </div>
                                        <div className="w-full mb-[15px]">
                                            <button
                                                className="w-full text-white font-bold text-[18px] bg-red-500 hover:bg-red-600 p-[10px] border-[2px] rounded-sm"
                                            >ĐĂNG KÝ NGAY</button>
                                        </div>
                                    </form>
                                    <div className="w-full flex justify-center">
                                        <p className="w-full md:w-[70%] text-center font-semibold text-lg md:text-2xl mt-4">Nâng cao năng lực cạnh tranh doanh nghiệp của bạn ngay hôm nay!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <Footer /> */}
        </>
    )
}
