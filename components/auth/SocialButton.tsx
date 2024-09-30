"use client"
import React from 'react'
import { Flex } from '@/components/ui/flex'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialButton = () => {
  return (
    <Flex className='items-center w-full gap-x-2'>
        <Button size={"lg"} className='w-full' variant={"outline"} onClick={()=> {}}>
            <FcGoogle className="size-5"/>
        </Button>
        <Button size={"lg"} className='w-full' variant={"outline"} onClick={()=> {}}>
            <FaGithub className="size-5"/>
        </Button>
    </Flex>
  )
}

export default SocialButton