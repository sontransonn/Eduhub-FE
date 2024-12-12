import React from 'react'

import { FaPlusSquare } from 'react-icons/fa';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function LessonsTab() {
    return (
        <div className='flex flex-col gap-2.5 bg-white p-4 rounded-sm border border-solid border-[#3333]'>
            <h3 className='text-base font-semibold'>Nội dung khóa học</h3>
            <Accordion type="single" className="w-full" defaultValue="item">
                {Array.from({ length: 6 }).map((_, index) => (
                    <AccordionItem value="item" key={index}>
                        <AccordionTrigger className='accordion-trigger w-full py-3 pr-7 hover:no-underline border-none text-sm'>
                            <div className='w-full flex items-center gap-2'>
                                <FaPlusSquare size={18} />
                                <h3 className='font-semibold text-lg'>Phần 1: SEO Nền Tảng dành cho người mới</h3>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='bg-white pb-3 px-6' >
                            Yes. It adheres to the WAI-ARIA design pattern.
                            Yes. It adheres to the WAI-ARIA design pattern.
                            Yes. It adheres to the WAI-ARIA design pattern.
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
