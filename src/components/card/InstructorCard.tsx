import React from 'react'

type InstructorCardProps = {
    name: string,
    avatar: string
    title: string
};

export default function InstructorCard({ name, avatar, title }: InstructorCardProps) {
    return (
        <div className='w-full h-full flex flex-col gap-5 items-center'>
            <div className='mx-auto'>
                <img
                    src={avatar}
                    alt=""
                    className='rounded-full object-cover w-[140px] h-[140px]'
                />
            </div>
            <div className='flex flex-col gap-2.5 text-center'>
                <span className='text-lg text-[#273167] md:text-xl font-semibold block'>{name}</span>
                <div className='text-sm break-words'>{title}</div>
            </div>
        </div>
    )
}