import React from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md';

import {
    Accordion,
    AccordionItem,
    AccordionTrigger, AccordionContent
} from "@/components/ui/accordion";

const chapters = [
    { title: "Chương 1: Giới thiệu", content: "Nội dung chi tiết của Chương 1..." },
    { title: "Chương 2: Các món ăn vặt", content: "Nội dung chi tiết của Chương 2..." },
    { title: "Chương 3: Kinh doanh hiệu quả", content: "Nội dung chi tiết của Chương 3..." },
    { title: "Chương 4: Kinh doanh hiệu quả", content: "Nội dung chi tiết của Chương 3..." },
    { title: "Chương 5: Kinh doanh hiệu quả", content: "Nội dung chi tiết của Chương 3..." },
    { title: "Chương 6: Kinh doanh hiệu quả", content: "Nội dung chi tiết của Chương 3..." },
];

const CourseContent = () => {
    return (
        <div className='rounded border border-gray-400 border-t-0 overflow-hidden'>
            <Accordion type="multiple">
                {chapters.map((chapter, index) => (
                    <AccordionItem key={index} value={`chapter-${index}`}>
                        <AccordionTrigger className="accordion-trigger text-base p-4 flex bg-[#E3F3FD] hover:no-underline border-t border-gray-400 items-center cursor-pointer">
                            <div className='flex items-center gap-2'>
                                <MdKeyboardArrowDown size={24} />
                                <h3 className="flex-auto font-medium">{chapter.title}</h3>
                            </div>
                            <p className="flex-none font-light hidden md:block">
                                {13} bài giảng - 2 giờ 07 phút
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className='bg-[#f1f5f8] border-t border-gray-400'>{chapter.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default CourseContent