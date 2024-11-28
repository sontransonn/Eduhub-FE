import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
    return (
        <div className="flex flex-col gap-1.5">
            <Skeleton className="min-h-44 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <div className='flex w-full justify-between'>
                <div className='w-2/3 flex flex-col gap-1.5'>
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                <div className='flex w-1/3 flex-col gap-1.5'>
                    <Skeleton className="h-full w-full rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard