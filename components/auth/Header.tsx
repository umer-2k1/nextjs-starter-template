import React from 'react'
import {Box} from "@/components/ui/box" 


interface HeaderProps {
label: string
}

const Header = ({label}: HeaderProps) => {
  return (
    <Box className='flex flex-col gap-y-4 items-center justify-center'>

      <h1 className="text-3xl font-semibold text-black drop-shadow-md">🔐 Auth</h1>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </Box>
  )
}

export default Header