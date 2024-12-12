import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const UserDashboard = dynamic(() => import('@/containers/dashboard/UserDashboard'), { ssr: false });

export default function page() {
    return (
        <UserDashboard />
    )
}
