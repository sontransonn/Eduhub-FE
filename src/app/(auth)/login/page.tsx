import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react"

const LoginPage = dynamic(() => import("@/containers/auth/LoginPage"), { ssr: false });

export default function page() {
    return (
        <LoginPage />
    )
}

