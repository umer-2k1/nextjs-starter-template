import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface BackButtonProps {
    label: string,
    to: string
}
const BackButton = ({label, to}: BackButtonProps) => {
  return (
    <Button
    variant={"link"}
    className='text-normal w-full'
    size={"sm"}
    asChild
    >

        <Link href={to}>
        {label}
        </Link>
    </Button>
  )
}

export default BackButton