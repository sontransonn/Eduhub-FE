import React from 'react'

type InstructorCardProps = {
    name: string,
    title: string
};

export default function InstructorCard({ name, title }: InstructorCardProps) {
    return (
        <div className='w-full h-full flex flex-col gap-5 items-center'>
            <img
                src={"https://i.imgur.com/kFLuGCR.jpeg"}
                alt=""
                className='rounded-full w-[150px] h-[150px]'
            />
            <div className='flex flex-col gap-2.5 text-center'>
                <span className='text-lg text-[#273167] md:text-xl font-semibold block'>{name}</span>
                <div className='text-sm break-words'>{title}</div>
            </div>
        </div>
    )
}