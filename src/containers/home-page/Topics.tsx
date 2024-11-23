import React from "react"
import Link from "next/link"

import topics from "@/constants/topics"

const Topics = () => {
    return (
        <div id="category-home-suggest">
            <div className='max-w-8xl pt-12 mx-auto lg:px-20 md:px-10 px-4'>
                <h4 className='uppercase font-bold text-2xl'>Chủ đề có thể bạn quan tâm</h4>
                <div className='flex gap-3 flex-wrap font-semibold mt-6'>
                    {topics.map((topic, index) => (
                        <Link key={index} href={"/"} className="border border-black px-4 py-2 rounded hover:text-white hover:bg-[#003555]">
                            {topic}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Topics
