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
                    { title: "Kinh Doanh Quán Ăn", slug: "kinh-doanh-quan-an" },
                    { title: "Kinh Doanh Nhà Thuốc", slug: "kinh-doanh-nha-thuoc" },
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
                    { title: "Photoshop", slug: "photoshop" },
                    { title: "InDesign", slug: "indesign" },
                    { title: "Capcut", slug: "capcut" },
                    { title: "Canva", slug: "canva" },
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
                title: "Kỹ Năng Khác",
                slug: "ky-nang-khac",
                tags: [
                    { title: "Phát Triển Đội Nhóm", slug: "phat-trien-doi-nhom" },
                    { title: "Kỹ Năng Tổ Chức", slug: "ky-nang-to-chuc" },
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
                title: "Ngôn Ngữ Lập Trình",
                slug: "ngon-ngu-lap-trinh",
                tags: [
                    { title: "Lập Trình C", slug: "lap-trinh-c" },
                    { title: "Javascript", slug: "javascript" },
                    { title: "Nodejs", slug: "nodejs" },
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
                title: "Phát Triển Web",
                slug: "phat-trien-web",
                tags: [
                    { title: "Angular", slug: "angular" }
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
        subCategories: [],
    },
    {
        icon: <BsGraphUpArrow size={18} />,
        title: "Marketing",
        slug: "marketing",
        subCategories: [],
    },
    {
        icon: <HiComputerDesktop size={18} />,
        title: "Tin Học Văn Phòng",
        slug: "tin-hoc-van-phong",
        subCategories: [],
    },
    {
        icon: <ImSpoonKnife size={18} />,
        title: "Phong Cách Sống",
        slug: "phong-cach-song",
        subCategories: [],
    },
    {
        icon: <HiMiniUserGroup size={18} />,
        title: "Hôn Nhân Và Gia Đình",
        slug: "hon-nhan-va-gia-dinh",
        subCategories: [],
    },
    {
        icon: <FaRegMoneyBillAlt size={18} />,
        title: "Tài Chính Kế Toán",
        slug: "tai-chinh-ke-toan",
        subCategories: [],
    },
    {
        icon: <IoMusicalNotes size={18} />,
        title: "Âm Nhạc",
        slug: "am-nhac",
        subCategories: [],
    },
    {
        icon: <BsCameraFill size={18} />,
        title: "Nhiếp Ảnh Và Video",
        slug: "nhiep-anh-va-video",
        subCategories: [],
    },
    {
        icon: <ImBooks size={18} />,
        title: "Sách Hay Nên Đọc",
        slug: "sach-hay-nen-doc",
        subCategories: [],
    },
];

export default categories