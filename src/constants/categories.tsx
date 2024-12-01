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
        slug: "ngoai-ngu",
        subCategories: [
            {
                title: "Tiếng Hàn",
                slug: "tieng-han",
                tags: [
                    { title: "Phát Âm Tiếng Hàn", slug: "phat-am-tieng-han" },
                    { title: "Tiếng Hàn Sơ Cấp", slug: "tieng-han-so-cap" },
                    { title: "Ngữ Pháp Tiếng Hàn", slug: "ngu-phap-tieng-han" },
                    { title: "Tiếng Hàn Trung Cấp", slug: "tieng-han-trung-cap" }
                ]
            },
            {
                title: "Tiếng Trung",
                slug: "tieng-trung",
                tags: [
                    { title: "Tiếng Trung Cao Cấp", slug: "tieng-trung-cao-cap" },
                    { title: "Tiếng Trung Sơ Cấp", slug: "tieng-trung-so-cap" }
                ]
            },
            {
                title: "Tiếng Nhật",
                slug: "tieng-nhat",
                tags: [
                    { title: "Từ Vựng Tiếng Nhật", slug: "tu-vung-tieng-nhat" },
                    { title: "Ngữ Pháp Tiếng Nhật", slug: "ngu-phap-tieng-nhat", },
                    { title: "Tiếng Nhật Giao Tiếp", slug: "tieng-nhat-giao-tiep" },
                    { title: "Phát Âm Tiếng Nhật", slug: "phat-am-tieng-nhat" }
                ]
            },
            {
                title: "Tiếng Anh",
                slug: "tieng-anh",
                tags: [
                    { title: "Phát Âm Tiếng Hàn", slug: "phat-am-tieng-han" },
                    { title: "Tiếng Hàn Sơ Cấp", slug: "tieng-han-so-cap" },
                    { title: "Ngữ Pháp Tiếng Hàn", slug: "ngu-phap-tieng-han" },
                    { title: "Tiếng Hàn Trung Cấp", slug: "tieng-han-trung-cap" }
                ]
            },
            {
                title: "Ngoại Ngữ Khác",
                slug: "ngoai-ngu-khac",
                tags: []
            },
        ],
    },
    {
        icon: <IoRocketSharp size={18} />,
        title: "Kinh Doanh",
        slug: "kinh-doanh",
        subCategories: [
            {
                title: "Quản Trị Kinh Doanh",
                slug: "quan-tri-kinh-doanh",
                tags: [
                    { title: "Chiến Lược Kinh Doanh", slug: "chien-luoc-kinh-doanh" },
                    { title: "Hệ Thống Kinh Doanh", slug: "he-thong-kinh-doanh" },
                    { title: "Kế Hoạch Kinh Doanh", slug: "ke-hoach-kinh-doanh" }
                ]
            },
            {
                title: "Kinh Doanh Online",
                slug: "kinh-doanh-online",
                tags: [
                    { title: "Kiếm Tiền Youtube", slug: "kiem-tien-youtube" },
                    { title: "Kiếm Tiền Amazon", slug: "kiem-tien-amazon" },
                    { title: "Bán Hàng Shopee", slug: "ban-hang-shopee" }
                ]
            },
            {
                title: "Khởi Nghiệp",
                slug: "khoi-nghiep",
                tags: [
                    { title: "Kinh Doanh Cafe", slug: "kinh-doanh-cafe" },
                    { title: "Kinh Doanh Mỹ Phẩm", slug: "kinh-doanh-my-pham" },
                    { title: "Kinh Doanh Nội Thất", slug: "kinh-doanh-noi-that" },
                    { title: "Kinh Doanh Spa", slug: "kinh-doanh-spa" },
                    { title: "Kinh Doanh Quán Ăn", slug: "kinh-doanh-quan-an" },
                    { title: "Kinh Doanh Nhà Hàng", slug: "kinh-doanh-nha-hang" },
                    { title: "Kinh Doanh Nhà Trẻ", slug: "kinh-doanh-nha-tre" },
                    { title: "Kinh Doanh Nhà Thuốc", slug: "kinh-doanh-nha-thuoc" },
                    { title: "Kinh Doanh Thời Trang", slug: "kinh-doanh-thoi-trang" }
                ]
            },
            {
                title: "Quản Trị Nhân Sự",
                slug: "quan-tri-nhan-su",
                tags: [
                    { title: "Tuyển Dụng", slug: "tuyen-dung" },
                    { title: "Đào Tạo Nhân Sự", slug: "dao-tao-nhan-su" }
                ]
            },
            {
                title: "Thương Mại Điện Tử",
                slug: "thuong-mai-dien-tu",
                tags: [
                    { title: "Shopify", slug: "shopify" }
                ]
            },
            {
                title: "Bán Hàng",
                slug: "ban-hang",
                tags: [
                    { title: "Chốt Sale", slug: "chot-sale" },
                    { title: "Chăm Sóc Khách Hàng", slug: "cham-soc-khach-hang" },
                    { title: "Chiến Lược Bán Hàng", slug: "chien-luoc-ban-hang" }
                ]
            },
        ],
    },
    {
        icon: <FaPaintBrush size={18} />,
        title: "Thiết Kế",
        slug: "thiet-ke",
        subCategories: [
            {
                title: "Thiết Kế Quảng Cáo",
                slug: "thiet-ke-quang-cao",
                tags: [
                    { title: "Thiết Kế In Ấn", slug: "thiet-ke-in-an" },
                    { title: "Thiết Kế Logo", slug: "thiet-ke-logo" },
                    { title: "Thiết Kế Banner", slug: "thiet-ke-banner" },
                    { title: "Thiết Kế Sản Phẩm", slug: "thiet-ke-san-pham" }
                ]
            },
            {
                title: "Thiết Kế Web",
                slug: "thiet-ke-web",
                tags: [
                    { title: "Bootstrap", slug: "bootstrap" },
                    { title: "Lập Trình Web", slug: "lap-trinh-web" }
                ]
            },
            {
                title: "Thiết Kế Kiến Trúc",
                slug: "thiet-ke-kien-truc",
                tags: [
                    { title: "Autocad", slug: "autocad" },
                    { title: "Sketchup", slug: "sketchup" },
                    { title: "Revit", slug: "revit" }
                ]
            },
            {
                title: "Thiết Kế Nội Thất",
                slug: "thiet-ke-noi-that",
                tags: [
                    { title: "3DSMax", slug: "3dsmax" }
                ]
            },
            {
                title: "Thiết Kế Đồ Họa",
                slug: "thiet-ke-do-hoa",
                tags: [
                    { title: "Thiết Kế Đồ Họa 2D", slug: "thiet-ke-do-hoa-2d" },
                    { title: "Thiết Kế Đồ Họa 3D", slug: "thiet-ke-do-hoa-3d" },
                    { title: "Design Sketching", slug: "design-sketching" }
                ]
            },
            {
                title: "Thiết Kế UI/UX",
                slug: "thiet-ke-ui-ux",
                tags: [
                    { title: "UI-UX", slug: "ui-ux" }
                ]
            },
            {
                title: "Phần Mềm Thiết Kế",
                slug: "phan-mem-thiet-ke",
                tags: [
                    { title: "Adobe Premiere", slug: "adobe-premiere" },
                    { title: "Solidworks", slug: "solidworks" },
                    { title: "Illustrator", slug: "illustrator" },
                    { title: "Photoshop", slug: "photoshop" },
                    { title: "InDesign", slug: "indesign" },
                    { title: "Corel Draw", slug: "corel-draw" },
                    { title: "Vray", slug: "vray" },
                    { title: "Capcut", slug: "capcut" },
                    { title: "Canva", slug: "canva" },
                    { title: "After Effect", slug: "after-effect" }
                ]
            },
            {
                title: "Thiết Kế Khác",
                slug: "thiet-ke-khac",
                tags: []
            },
        ],
    },
    {
        icon: <FaRegLightbulb size={18} />,
        title: "Kỹ Năng",
        slug: "ky-nang",
        subCategories: [
            {
                title: "Kỹ Năng Lãnh Đạo",
                slug: "ky-nang-lanh-dao",
                tags: [
                    { title: "Kỹ Năng Lãnh Đạo", slug: "ky-nang-lanh-dao" }
                ]
            },
            {
                title: "Kỹ Năng Thuyết Trình",
                slug: "ky-nang-thuyet-trinh",
                tags: [
                    { title: "MC", slug: "mc" },
                    { title: "Thuyết Trình", slug: "thuyet-trinh" }
                ]
            },
            {
                title: "Kỹ Năng Giao Tiếp",
                slug: "ky-nang-giao-tiep",
                tags: [
                    { title: "Ngôn Ngữ Cơ Thể", slug: "ngon-ngu-co-the" },
                    { title: "Giao Tiếp", slug: "giao-tiep" }
                ]
            },
            {
                title: "Kỹ Năng Đàm Phán",
                slug: "ky-nang-dam-phan",
                tags: [
                    { title: "Đàm Phán", slug: "dam-phan" }
                ]
            },
            {
                title: "Kỹ Năng Phỏng Vấn Xin Việc",
                slug: "ky-nang-phong-van-xin-viec",
                tags: [
                    { title: "DISC", slug: "disc" },
                    { title: "Kỹ Năng Tìm Việc", slug: "ky-nang-tim-viec" },
                    { title: "Kỹ Năng Viết CV", slug: "ky-nang-viet-cv" },
                    { title: "Kỹ Năng Phỏng Vấn", slug: "ky-nang-phong-van" }
                ]
            },
            {
                title: "Kỹ Năng Quản Lý Thời Gian",
                slug: "ky-nang-quan-ly-thoi-gian",
                tags: [
                    { title: "Quản Lý Thời Gian", slug: "quan-ly-thoi-gian" }
                ]
            },
            {
                title: "Kỹ Năng Học Tập - Ghi Nhớ",
                slug: "ky-nang-hoc-tap-ghi-nho",
                tags: [
                    { title: "Sketchnote", slug: "sketchnote" },
                    { title: "Rèn Luyện Trí Nhớ", slug: "ren-luyen-tri-nho" },
                    { title: "Du Học", slug: "du-hoc" }
                ]
            },
            {
                title: "Kỹ Năng Khác",
                slug: "ky-nang-khac",
                tags: [
                    { title: "Phát Triển Đội Nhóm", slug: "phat-trien-doi-nhom" },
                    { title: "Kỹ Năng Tổ Chức", slug: "ky-nang-to-chuc" },
                    { title: "Quản Trị Cảm Xúc", slug: "quan-tri-cam-xuc" },
                    { title: "Quản Lý Xung Đột", slug: "quan-ly-xung-dot" },
                    { title: "Phát Triển Bản Thân", slug: "phat-trien-ban-than" },
                    { title: "Kỹ Năng Lập Kế Hoạch", slug: "ky-nang-lap-ke-hoach" }
                ]
            }
        ],
    },
    {
        icon: <PiCodeBold size={18} />,
        title: "Lập Trình & CNTT",
        slug: "lap-trinh-cntt",
        subCategories: [
            {
                title: "Cơ Sở Dữ Liệu",
                slug: "co-so-du-lieu",
                tags: [
                    { title: "MySQL", slug: "mysql" },
                    { title: "Dữ Liệu", slug: "du-lieu" },
                    { title: "Cơ Sở Dữ Liệu", slug: "co-so-du-lieu" },
                    { title: "Blockchain", slug: "blockchain" }
                ]
            },
            {
                title: "Ngôn Ngữ Lập Trình",
                slug: "ngon-ngu-lap-trinh",
                tags: [
                    { title: "Lập Trình C", slug: "lap-trinh-c" },
                    { title: "Lập Trình Kotlin", slug: "lap-trinh-kotlin" },
                    { title: "Javascript", slug: "javascript" },
                    { title: "CSS", slug: "css" },
                    { title: "Lập Trình PHP", slug: "lap-trinh-php" },
                    { title: "Nodejs", slug: "nodejs" },
                    { title: "Lập Trình Python", slug: "lap-trinh-python" },
                    { title: "Lập Trình Java", slug: "lap-trinh-java" }
                ]
            },
            {
                title: "Mạng Và Bảo Mật",
                slug: "mang-va-bao-mat",
                tags: [
                    { title: "Quản Trị Mạng", slug: "quan-tri-mang" }
                ]
            },
            {
                title: "Sửa Chữa Và Chế Tạo",
                slug: "sua-chua-va-che-tao",
                tags: []
            },
            {
                title: "Phát Triển Web",
                slug: "phat-trien-web",
                tags: [
                    { title: "Angular", slug: "angular" }
                ]
            },
            {
                title: "Phát Triển Ứng Dụng Di Động",
                slug: "phat-trien-ung-dung-di-dong",
                tags: [
                    { title: "Lập Trình Android", slug: "lap-trinh-android" },
                    { title: "Lập Trình IOS", slug: "lap-trinh-ios" },
                    { title: "Lập Trình Swift", slug: "lap-trinh-swift" }
                ]
            },
            {
                title: "Trí Tuệ Nhân Tạo",
                slug: "tri-tue-nhan-tao",
                tags: [
                    { title: "Trí Tuệ Nhân Tạo (AI)", slug: "tri-tue-nhan-tao-ai" }
                ]
            }
        ],
    },
    {
        icon: <FaHeartbeat size={18} />,
        title: "Sức Khỏe Và Làm Đẹp",
        slug: "suc-khoe-va-lam-dep",
        subCategories: [
            {
                title: "Yoga",
                slug: "yoga",
                tags: [
                    { title: "Yoga Trị Liệu", slug: "yoga-tri-lieu" },
                    { title: "Yoga Bầu", slug: "yoga-bau" },
                    { title: "Yoga Trẻ Em", slug: "yoga-tre-em" }
                ]
            },
            {
                title: "Thiền Định",
                slug: "thien-dinh",
                tags: [
                    { title: "Thiền", slug: "thien" }
                ]
            },
            {
                title: "Massage",
                slug: "massage",
                tags: []
            },
            {
                title: "Fitness - Gym",
                slug: "fitness-gym",
                tags: []
            },
            {
                title: "Dinh Dưỡng Và Ăn Kiêng",
                slug: "dinh-duong-va-an-kieng",
                tags: [
                    { title: "Eat Clean", slug: "eat-clean" }
                ]
            },
            {
                title: "Sức Khỏe Tinh Thần",
                slug: "suc-khoe-tinh-than",
                tags: [
                    { title: "Hạnh Phúc", slug: "hanh-phuc" },
                    { title: "Trầm Cảm", slug: "tram-cam" }
                ]
            },
            {
                title: "Thể Thao",
                slug: "the-thao",
                tags: [
                    { title: "Nhảy", slug: "nhay" },
                    { title: "Bơi", slug: "boi" },
                    { title: "Dance - Zumba", slug: "dance-zumba" },
                    { title: "Samba", slug: "samba" },
                    { title: "Cờ Vua", slug: "co-vua" },
                    { title: "Múa", slug: "mua" }
                ]
            },
            {
                title: "Làm Đẹp",
                slug: "lam-dep",
                tags: [
                    { title: "Làm Đẹp Sau Sinh Trang Điểm", slug: "lam-dep-sau-sinh-trang-diem" }
                ]
            }
        ],
    },
    {
        icon: <BsGraphUpArrow size={18} />,
        title: "Marketing",
        slug: "marketing",
        subCategories: [
            {
                title: "Digital Marketing",
                slug: "digital-marketing",
                tags: [
                    { title: "Facebook Marketing", slug: "facebook-marketing" },
                    { title: "Zalo Marketing", slug: "zalo-marketing" },
                    { title: "Quảng Cáo", slug: "quang-cao" },
                    { title: "Livestream", slug: "livestream" },
                    { title: "Email Marketing", slug: "email-marketing" },
                    { title: "Google Ads", slug: "google-ads" },
                    { title: "SEO", slug: "seo" },
                    { title: "Chatbot", slug: "chatbot" },
                    { title: "Youtube Marketing", slug: "youtube-marketing" },
                    { title: "LandingPage", slug: "landingpage" },
                    { title: "Content Marketing", slug: "content-marketing" },
                    { title: "Tiktok", slug: "tiktok" },
                    { title: "Affiliate Marketing", slug: "affiliate-marketing" }
                ]
            },
            {
                title: "Quan hệ Công Chúng",
                slug: "quan-he-cong-chung",
                tags: []
            },
            {
                title: "Xây Dựng Thương Hiệu",
                slug: "xay-dung-thuong-hieu",
                tags: [
                    { title: "Thương Hiệu Cá Nhân", slug: "thuong-hieu-ca-nhan" },
                    { title: "Thương Hiệu Công Ty", slug: "thuong-hieu-cong-ty" }
                ]
            },
            {
                title: "Nguyên Lý Marketing",
                slug: "nguyen-ly-marketing",
                tags: [
                    { title: "Chiến Lược Marketing", slug: "chien-luoc-marketing" }
                ]
            }
        ],
    },
    {
        icon: <HiComputerDesktop size={18} />,
        title: "Tin Học Văn Phòng",
        slug: "tin-hoc-van-phong",
        subCategories: [
            {
                title: "Microsoft",
                slug: "microsoft",
                tags: [
                    { title: "Vba", slug: "vba" }
                ]
            },
            {
                title: "Google",
                slug: "google",
                tags: []
            },
            {
                title: "Tin Học Văn Phòng Khác",
                slug: "tin-hoc-van-phong-khac",
                tags: []
            }
        ],
    },
    {
        icon: <ImSpoonKnife size={18} />,
        title: "Phong Cách Sống",
        slug: "phong-cach-song",
        subCategories: [
            {
                title: "Nghệ Thuật",
                slug: "nghe-thuat",
                tags: [
                    { title: "Cắm Hoa", slug: "cam-hoa" },
                    { title: "Ảo Thuật", slug: "ao-thuat" },
                    { title: "Vẽ", slug: "ve" },
                    { title: "Đan Len", slug: "dan-len" },
                    { title: "Hội Họa", slug: "hoi-hoa" },
                    { title: "Beatbox", slug: "beatbox" },
                    { title: "Nhạc Điện Tử", slug: "nhac-dien-tu" },
                    { title: "DJ", slug: "dj" },
                    { title: "Phun Xăm", slug: "phun-xam" }
                ]
            },
            {
                title: "Ẩm Thực",
                slug: "am-thuc",
                tags: [
                    { title: "Làm Bánh", slug: "lam-banh" },
                    { title: "Nấu Chè", slug: "nau-che" },
                    { title: "Mứt", slug: "mut" },
                    { title: "Làm Thạch", slug: "lam-thach" },
                    { title: "Ăn Vặt", slug: "an-vat" },
                    { title: "Làm Kem", slug: "lam-kem" }
                ]
            },
            {
                title: "Đồ Uống",
                slug: "do-uong",
                tags: [
                    { title: "Pha Chế", slug: "pha-che" },
                    { title: "Trà Sữa", slug: "tra-sua" }
                ]
            },
            {
                title: "Phương Pháp Bí Truyền",
                slug: "phuong-phap-bi-truyen",
                tags: [
                    { title: "Xem Tướng", slug: "xem-tuong" },
                    { title: "Sinh Trắc Vân Tay", slug: "sinh-trac-van-tay" },
                    { title: "Tử Vi", slug: "tu-vi" },
                    { title: "Thần Số Học", slug: "than-so-hoc" },
                    { title: "Phong Thủy", slug: "phong-thuy" }
                ]
            },
            {
                title: "Viết Nội Dung",
                slug: "viet-noi-dung",
                tags: [
                    { title: "Nghệ thuật Viết Ebook", slug: "nghe-thuat-viet-ebook" },
                    { title: "Đọc Sách", slug: "doc-sach" }
                ]
            },
            {
                title: "Du Lịch",
                slug: "du-lich",
                tags: [
                    { title: "Du Lịch", slug: "du-lich" }
                ]
            },
            {
                title: "Phong Cách Sống Khác",
                slug: "phong-cach-song-khac",
                tags: [
                    { title: "Handmade", slug: "handmade" },
                    { title: "Cắt May", slug: "cat-may" }
                ]
            }
        ],
    },
    {
        icon: <HiMiniUserGroup size={18} />,
        title: "Hôn Nhân Và Gia Đình",
        slug: "hon-nhan-va-gia-dinh",
        subCategories: [
            {
                title: "Tình Yêu",
                slug: "tinh-yeu",
                tags: [
                    { title: "Tình Yêu", slug: "tinh-yeu" },
                    { title: "Tán Gái", slug: "tan-gai" }
                ]
            },
            {
                title: "Đời Sống Vợ Chồng",
                slug: "doi-song-vo-chong",
                tags: [
                    { title: "Mang Thai", slug: "mang-thai" },
                    { title: "Ngoại Tình", slug: "ngoai-tinh" },
                    { title: "Hôn Nhân Gia Đình", slug: "hon-nhan-gia-dinh" },
                    { title: "Sinh Con", slug: "sinh-con" },
                    { title: "Trầm Cảm Trước Sinh", slug: "tram-cam-truoc-sinh" },
                    { title: "Trầm Cảm Sau Sinh", slug: "tram-cam-sau-sinh" }
                ]
            },
            {
                title: "Làm Cha Mẹ",
                slug: "lam-cha-me",
                tags: [
                    { title: "Nuôi Dạy Con", slug: "nuoi-day-con" },
                    { title: "Thai Giáo", slug: "thai-giao" },
                    { title: "Dinh Dưỡng Cho Con", slug: "dinh-duong-cho-con" },
                    { title: "Phát Triển Trí Tuệ", slug: "phat-trien-tri-tue" },
                    { title: "Ăn Dặm", slug: "an-dam" },
                    { title: "Phương Pháp Dạy Con", slug: "phuong-phap-day-con" },
                    { title: "Giáo Dục Giới Tính", slug: "giao-duc-gioi-tinh" }
                ]
            }
        ],
    },
    {
        icon: <FaRegMoneyBillAlt size={18} />,
        title: "Tài Chính Kế Toán",
        slug: "tai-chinh-ke-toan",
        subCategories: [
            {
                title: "Kế Toán",
                slug: "ke-toan",
                tags: [
                    { title: "Phần Mềm Kế Toán", slug: "phan-mem-ke-toan" },
                    { title: "Báo Cáo Tài Chính", slug: "bao-cao-tai-chinh" },
                    { title: "Kế Toán Thuế", slug: "ke-toan-thue" },
                    { title: "Kế Toán Tổng Hợp", slug: "ke-toan-tong-hop" }
                ]
            },
            {
                title: "Tài Chính",
                slug: "tai-chinh",
                tags: [
                    { title: "Tài Chính Cá Nhân", slug: "tai-chinh-ca-nhan" }
                ]
            },
            {
                title: "Đầu Tư",
                slug: "dau-tu",
                tags: [
                    { title: "Bitcoin", slug: "bitcoin" },
                    { title: "Đầu Tư Forex", slug: "dau-tu-forex" }
                ]
            }
        ],
    },
    {
        icon: <IoMusicalNotes size={18} />,
        title: "Âm Nhạc",
        slug: "am-nhac",
        subCategories: [
            {
                title: "Nhạc Cụ",
                slug: "nhac-cu",
                tags: [
                    { title: "Guitar", slug: "guitar" },
                    { title: "Piano", slug: "piano" },
                    { title: "Ukulele", slug: "ukulele" },
                    { title: "Sáo", slug: "sao" },
                    { title: "Harmonica", slug: "harmonica" },
                    { title: "Organ", slug: "organ" }
                ]
            },
            {
                title: "Thanh Nhạc",
                slug: "thanh-nhac",
                tags: [
                    { title: "Hát", slug: "hat" },
                    { title: "Luyện Giọng", slug: "luyen-giong" }
                ]
            },
            {
                title: "Sản Xuất Nhạc",
                slug: "san-xuat-nhac",
                tags: [
                    { title: "Sản Xuất Và Sáng Tác Nhạc", slug: "san-xuat-va-sang-tac-nhac" },
                    { title: "Viết Nhạc", slug: "viet-nhac" }
                ]
            },
            {
                title: "Âm Nhạc Khác",
                slug: "am-nhac-khac",
                tags: []
            }
        ],
    },
    {
        icon: <BsCameraFill size={18} />,
        title: "Nhiếp Ảnh Và Video",
        slug: "nhiep-anh-va-video",
        subCategories: [
            {
                title: "Chụp Ảnh",
                slug: "chup-anh",
                tags: [
                    { title: "Chỉnh Sửa Ảnh", slug: "chinh-sua-anh" },
                    { title: "Chụp Ảnh", slug: "chup-anh" }
                ]
            },
            {
                title: "Dựng Phim",
                slug: "dung-phim",
                tags: [
                    { title: "Biên Kịch", slug: "bien-kich" },
                    { title: "Dựng Phim", slug: "dung-phim" },
                    { title: "Làm Phim Hoạt Hình", slug: "lam-phim-hoat-hinh" },
                    { title: "Animation", slug: "animation" },
                    { title: "Sản Xuất Phim", slug: "san-xuat-phim" },
                    { title: "Blender", slug: "blender" },
                    { title: "Kỹ Xảo", slug: "ky-xao" }
                ]
            },
            {
                title: "Biên Tập Video",
                slug: "bien-tap-video",
                tags: [
                    { title: "Biên Tập Video", slug: "bien-tap-video" }
                ]
            }
        ],
    },
    {
        icon: <ImBooks size={18} />,
        title: "Sách Hay Nên Đọc",
        slug: "sach-hay-nen-doc",
        subCategories: [],
    },
];

export default categories