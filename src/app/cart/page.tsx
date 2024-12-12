import React, { useState } from "react"
import dynamic from 'next/dynamic';

const CartPage = dynamic(() => import('@/containers/cart-page/CartPage'), { ssr: false });

export default function page() {
    return (
        <CartPage />
    )
}
