import Link from "next/link"

export default function InterestTopics() {
    return (
        <div className='max-w-8xl pt-12 mx-auto lg:px-20 md:px-10 px-4 pb-4'>
            <h4 className='uppercase font-bold text-2xl mt-2.5 mb-6'>Chủ đề có thể bạn quan tâm</h4>
            <div className='flex gap-4 flex-wrap font-semibold'>
                <Link href={"/"} className="border border-black px-4 py-2 rounded hover:text-white hover:bg-[#003555]">
                    Facebook Marketing
                </Link>
            </div>
        </div>
    )
}
