import atm from "@/public/icons/atm.png"
import ck from "@/public/icons/ck.png"
import momo from "@/public/icons/momo.png"
import shoppe from "@/public/icons/shoppe.png"
import visa from "@/public/icons/visa.png"
import zalo from "@/public/icons/zalo.png"

const payment = [
    {
        title: "Chuyển khoản ngân hàng",
        img: ck,
        value: "ck"
    },
    {
        title: "Ví điện tử MoMo",
        img: momo,
        value: "momo"
    },
    {
        title: "Thẻ ATM/Internet Banking",
        img: atm,
        value: "atm"
    },
    {
        title: "Thẻ quốc tế Visa/Master",
        img: visa,
        value: "visa"
    },
    {
        title: "Ví điện tử ShopeePay",
        img: shoppe,
        value: "shopee"
    },
    {
        title: "Ví điện tử ZaloPay",
        img: zalo,
        value: "zalopay"
    }
]

export default payment