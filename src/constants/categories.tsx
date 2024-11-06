import { SiGoogletranslate } from "react-icons/si";
import { IoRocketSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { PiCodeBold } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";
import { BsCameraFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";

const categories = [
    {
        icon: <SiGoogletranslate size={18} />,
        title: "Ngoại Ngữ",
        items: [
            {
                title: "Tiếng Hàn",
                tags: ["Phát Âm Tiếng Hàn", "Tiếng Hàn Sơ Cấp", "Ngữ Pháp Tiếng Hàn", "Tiếng Hàn Trung Cấp"]
            },
            {
                title: "Tiếng Trung",
                tags: ["Tiếng Trung Cao Cấp", "Tiếng Trung Sơ Cấp"]
            },
            {
                title: "Tiếng Nhật",
                tags: ["Từ Vựng Tiếng Nhập", "Ngữ Pháp Tiếng Nhật", "Tiếng Nhật Giao Tiếp", "Phát Âm Tiếng Nhật"]
            },
            {
                title: "Tiếng Anh",
                tags: ["Phát Âm Tiếng Hàn", "Tiếng Hàn Sơ Cấp", "Ngữ Pháp Tiếng Hàn", "Tiếng Hàn Trung Cấp"]
            },
            {
                title: "Ngoại Ngữ Khác",
                tags: []
            },
        ],
    },
    {
        icon: <IoRocketSharp size={18} />,
        title: "Kinh Doanh",
        items: [
            {
                title: "Quản Trị Kinh Doanh",
                tags: ["Chiến Lược Kinh Doanh", "Hệ Thống Kinh Doanh", "Kế Hoạch Kinh Doanh"]
            },
            {
                title: "Kinh Doanh Online",
                tags: ["Kiếm Tiền Youtube", "Kiếm Tiền Amazon", "Bán Hàng Shopee"]
            },
            {
                title: "Khởi Nghiệp",
                tags: ["Kinh Doanh Cafe", "Kinh Doanh Mỹ Phẩm", "Kinh Doanh Nội Thất", "Kinh Doanh Spa", "Kinh Doanh Quán Ăn",
                    "Kinh Doanh Nhà Hàng", "Kinh Doanh Nhà Trẻ", "Kinh Doanh Nhà Thuốc", "Kinh Doanh Thời Trang"
                ]
            },
            {
                title: "Quản Trị Nhân Sự",
                tags: ["Tuyển Dụng", "Đào Tạo Nhân Sự"]
            },
            {
                title: "Thương Mại Điện Tử",
                tags: ["Shopify"]
            },
            {
                title: "Bán Hàng",
                tags: ["Chốt Sale", "Chăm Sóc Khách Hàng", "Chiến Lược Bán Hàng"]
            },
        ],
    },
    {
        icon: <FaPaintBrush size={18} />,
        title: "Thiết Kế",
        items: [
            {
                title: "Thiết Kế Quảng Cáo",
                tags: ["Thiết Kế In Ấn", "Thiết Kế Logo", "Thiết Kế Banner", "Thiết Kế Sản Phẩm"]
            },
            {
                title: "Thiết Kế Web",
                tags: ["Bootstrap", "Lập Trình Web"]
            },
            {
                title: "Thiết Kế Kiến Trúc",
                tags: ["Autocad", "Sketchup", "Revit"]
            },
            {
                title: "Thiết Kế Nội Thất",
                tags: ["3DSMax"]
            },
            {
                title: "Thiết Kế Đồ Họa",
                tags: ["Thiết Kế Đồ Họa 2D", "Thiết Kế Đồ Họa 3D", "Design Sketching"]
            },
            {
                title: "Thiết Kế UI/UX",
                tags: ["UI-UX"]
            },
            {
                title: "Phần Mềm Thiết Kế",
                tags: ["Adobe Premiere", "Solidworks", "Illustrator", "Photoshop", "InDesign", "Corel Draw",
                    "Vray", "Capcut", "Canva", "After Effect"
                ]
            },
            {
                title: "Thiết Kế Khác",
                tags: []
            },
        ],
    },
    {
        icon: <FaRegLightbulb size={18} />,
        title: "Kỹ Năng",
        items: [
            {
                title: "Kỹ Năng Lãnh Đạo",
                tags: ["Kỹ Năng Lãnh Đạo"]
            },
            {
                title: "Kỹ Năng Thuyết Trình",
                tags: ["MC", "Thuyết Trình"]
            },
            {
                title: "Kỹ Năng Giao Tiếp",
                tags: ["Ngôn Ngữ Cơ Thể", "Giao Tiếp"]
            },
            {
                title: "Kỹ Năng Đàm Phán",
                tags: ["Đàm Phán"]
            },
            {
                title: "Kỹ Năng Phỏng Vấn Xin Việc",
                tags: ["DISC", "Kỹ Năng Tìm Việc", "Kỹ Năng Viết CV", "Kỹ Năng Phỏng Vấn"]
            },
            {
                title: "Kỹ Năng Quản Lý Thời Gian",
                tags: ["Quản Lý Thời Gian"]
            },
            {
                title: "Kỹ Năng Học Tập - Ghi Nhớ",
                tags: ["Sketchnote", "Rèn Luyện Trí Nhớ", "Du Học"]
            },
            {
                title: "Kỹ Năng Khác",
                tags: ["Phát Triển Đội Nhóm", "Kỹ Năng Tổ Chức", "Quản Trị Cảm Xúc", "Quản Lý Xung Đột", "Phát Triển Bản Thân", "Kỹ Năng Lập Kế Hoạch"]
            },
        ],
    },
    {
        icon: <PiCodeBold size={18} />,
        title: "Lập Trình & CNTT",
        items: [
            {
                title: "Cơ Sở Dữ Liệu",
                tags: ["MySQL", "Dữ Liệu", "Cơ Sở Dữ Liệu", "Blockchain"]
            },
            {
                title: "Ngôn Ngữ Lập Trình",
                tags: ["Lập Trình C", "Lập Trình Kotlin", "Javascript", "CSS", "Lập Trình PHP", "Nodejs", "Lập Trình Python", "Lập Trình Java"]
            },
            {
                title: "Mạng Và Bảo Mật",
                tags: ["Quản Trị Mạng"]
            },
            {
                title: "Sửa Chữa Và Chế Tạo",
                tags: []
            },
            {
                title: "Phát Triển Web",
                tags: ["Angular"]
            },
            {
                title: "Phát Triển Ứng Dụng Di Động",
                tags: ["Lập Trình Android", "Lập Trình IOS", "Lập Trình Swift"]
            },
            {
                title: "Trí Tuệ Nhân Tạo",
                tags: ["Trí Tuệ Nhân Tạo (AI)"]
            },
        ],
    },
    {
        icon: <FaHeartbeat size={18} />,
        title: "Sức Khỏe Và Làm Đẹp",
        items: [
            {
                title: "Yoga",
                tags: ["Yoga Trị Liệu", "Yoga Bầu", "Yoga Trẻ Em"]
            },
            {
                title: "Thiền Định",
                tags: ["Thiền"]
            },
            {
                title: "Massage",
                tags: []
            },
            {
                title: "Fitness - Gym",
                tags: []
            },
            {
                title: "Dinh Dưỡng Và Ăn Kiêng",
                tags: ["Eat Clean"]
            },
            {
                title: "Sức Khỏe Tinh Thần",
                tags: ["Hạnh Phúc", "Trầm Cảm"]
            },
            {
                title: "Thể Thao",
                tags: ["Nhảy", "Bơi", "Dance - Zumba", "Samba", "Cờ Vua", "Múa"]
            },
            {
                title: "Làm Đẹp",
                tags: ["Làm Đẹp Sau Sinh Trang Điểm"]
            },
        ],
    },
    {
        icon: <BsGraphUpArrow size={18} />,
        title: "Marketing",
        items: [
            {
                title: "Digital Marketing",
                tags: ["Facebook Marketing", "Zalo Marketing", "Quảng Cáo", "Livestream", "Email Marketing", "Google Ads", "Seo",
                    "Chatbot", "Youtube Marketing", "LandingPage", "Content Marrketing", "Tiktok", "Affiliate Marketing"]
            },
            {
                title: "Quan hệ Công Chúng",
                tags: []
            },
            {
                title: "Xây Dựng Thương Hiệu",
                tags: ["Thương Hiệu Cá Nhân", "Thương Hiệu Công Ty"]
            },
            {
                title: "Nguyên Lý Marketing",
                tags: ["Chiến Lược Marketing"]
            },
        ],
    },
    {
        icon: <HiComputerDesktop size={18} />,
        title: "Tin Học Văn Phòng",
        items: [
            {
                title: "Microsoft",
                tags: ["Vba"]
            },
            {
                title: "Google",
                tags: []
            },
            {
                title: "Tin Học Văn Phòng Khác",
                tags: []
            },
        ],
    },
    {
        icon: <ImSpoonKnife size={18} />,
        title: "Phong Cách Sống",
        items: [
            {
                title: "Nghệ Thuật",
                tags: ["Cắm Hoa", "Ảo Thuật", "Vẽ", "Đan Len", "Hội Họa", "Beatbox", "Nhạc Điện Tử", "DJ", "Phun Xăm"]
            },
            {
                title: "Ẩm Thực",
                tags: ["Làm Bánh", "Nấu Chè", "Mứt", "Làm Thạch", "Ăn Vặt", "Làm Kem"]
            },
            {
                title: "Đồ Uống",
                tags: ["Pha Chế", "Trà Sữa"]
            },
            {
                title: "Phương Pháp Bí Truyền",
                tags: ["Xem Tướng", "Sinh Trắc Vân Tay", "Tử Vi", "Thần Số Học", "Phong Thủy"]
            },
            {
                title: "Viết Nội Dung",
                tags: ["Nghệ thuật Viết Ebook", "Đọc Sách"]
            },
            {
                title: "Du Lịch",
                tags: ["Du Lịch"]
            },
            {
                title: "Phong Cách Sống Khác",
                tags: ["Handmade", "Cắt May"]
            },
        ],
    },
    {
        icon: <HiMiniUserGroup size={18} />,
        title: "Hôn Nhân Và Gia Đình",
        items: [
            {
                title: "Tình Yêu",
                tags: ["Tình Yêu", "Tán Gái"]
            },
            {
                title: "Đời Sống Vợ Chồng",
                tags: ["Mang Thai", "Ngoại Tình", "Hôn Nhân Gia Đình", "Sinh Con", "Trầm Cảm Trước Sinh", "Trầm Cảm Sau Sinh"]
            },
            {
                title: "Làm Cha Mẹ",
                tags: ["Nuôi Dạy Con", "Thai Giáo", "Dinh Dưỡng Cho Con", "Phát Triển Trí Tuệ", "Ăn Dặm", "Phương Pháp Dạy Con", "Giáo Dục Giới Tính"]
            },
        ],
    },
    {
        icon: <FaRegMoneyBillAlt size={18} />,
        title: "Tài Chính Kế Toán",
        items: [
            {
                title: "Kế Toán",
                tags: ["Phần Mềm Kế Toán", "Báo Cáo Tài Chính", "Kế Toán Thuế", "Kế Toán Tổng Hợp"]
            },
            {
                title: "Tài Chính",
                tags: ["Tài Chính Cá Nhân"]
            },
            {
                title: "Đầu Tư",
                tags: ["Bitcoin", "Đầu Tư Forex"]
            },
        ],
    },
    {
        icon: <IoMusicalNotes size={18} />,
        title: "Âm Nhạc",
        items: [
            {
                title: "Nhạc Cụ",
                tags: ["Guitar", "Piano", "Ukulele", "Sáo", "Harmonica", "Organ"]
            },
            {
                title: "Thanh Nhạc",
                tags: ["Hát", "Luyện Giọng"]
            },
            {
                title: "Sản Xuất Nhạc",
                tags: ["Sản Xuất Và Sáng Tác Nhạc", "Viết Nhạc"]
            },
            {
                title: "Âm Nhạc Khác",
                tags: []
            },
        ],
    },
    {
        icon: <BsCameraFill size={18} />,
        title: "Nhiếp Ảnh Và Video",
        items: [
            {
                title: "Chụp Ảnh",
                tags: ["Chỉnh Sửa Ảnh", "Chụp Ảnh"]
            },
            {
                title: "Dựng Phim",
                tags: ["Biên Kịch", "Dựng Phim", "Làm Phim Hoạt Hình", "Animation", "Sản Xuất Phim", "Blender", "Kỹ Xảo"]
            },
            {
                title: "Biên Tập Video",
                tags: ["Biên Tập Video"]
            },
        ],
    },
    {
        icon: <ImBooks size={18} />,
        title: "Sách Hay Nên Đọc",
        items: [],
    },
];

export default categories