import Link from 'next/link'

export default function CourseCard() {
    return (
        <Link href={"/"}>
            <img
                className='max-w-full rounded h-auto object-cover'
                src="https://i.imgur.com/kFLuGCR.jpeg"
                alt="" />
            <h3 className='font-medium my-4 line-clamp-2'>Học nhiếp ảnh từ cơ bản đến nâng cao</h3>
            <div className='text-sm mb-2 font-light'>Hoàng Viết Thắng</div>
            <div className='flex items-center gap-1 mb-2'>
                <div className='text-sm font-medium'>4.5</div>
                <div className='text-[#F77321] flex gap-0.5'>
                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                    <i className="fa fa-star co-or" aria-hidden="true"></i>
                </div>
                <div className='text-xs text-[#5C5C5C]'>(107)</div>
            </div>
            <div className='flex gap-1.5 items-center mb-2'>
                <div className='text-xl font-medium'>
                    299.000
                    <sup>đ</sup>
                </div>
                <div className='text-sm line-through text-[#929292]'>
                    800.000
                    <sup>đ</sup>
                </div>
            </div>
            <div className='px-2 py-1.5 bg-[#FFDB5B] w-fit text-xs'> Bestseller</div>
        </Link>
    )
}
