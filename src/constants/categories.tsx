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
        subCategories: [],
    },
    {
        icon: <FaPaintBrush size={18} />,
        title: "Thiết Kế",
        slug: "thiet-ke",
        subCategories: [],
    },
    {
        icon: <FaRegLightbulb size={18} />,
        title: "Kỹ Năng",
        slug: "ky-nang",
        subCategories: [],
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