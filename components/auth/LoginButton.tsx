"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "redirect" | "popup",
    asChild?: boolean
}

const LoginButton = ({children, mode="redirect", asChild}: LoginButtonProps) => {
    const router = useRouter()

    const clickHandler = ()=>{
        router.push("/auth/login")
    }
  return (
    <span onClick={clickHandler} className='cursor-pointer'>{children}</span>
  )
}

export default LoginButton