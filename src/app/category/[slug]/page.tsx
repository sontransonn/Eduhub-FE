"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic';

const CategoryPage = dynamic(() => import("@/containers/category-page/CategoryPage"), { ssr: false });

export default function page() {
    return (
        <CategoryPage />
    )
}

