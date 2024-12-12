import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
    return (
        <div className="flex flex-col gap-1.5">
            <div className='rounded block relative w-full' style={{ paddingBottom: "56.25%" }}>
                <Skeleton className="rounded w-full h-full absolute inset-0" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
        </div>
    )
}
