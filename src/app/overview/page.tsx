import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const OverviewPage = dynamic(() => import('@/containers/overview-page/OverviewPage'), { ssr: false });

export default function page() {
    return (
        <OverviewPage />
    )
}
