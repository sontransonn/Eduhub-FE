import React from 'react'
import Image from 'next/image'

import e6Logo from "@/public/logo/E6.jpg"

export default function LoadingPage() {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Image width={120} height={120} src={e6Logo} alt='' className='rounded-2xl' />
        </div>
    )
}
