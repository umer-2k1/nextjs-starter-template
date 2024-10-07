"use client"
import React from 'react'
import { Flex } from '@/components/ui/flex'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';


const SocialButton = () => {

  const onClickHandler =  (provider: "google" | "github" ) => {
signIn(provider, {callbackUrl: DEFAULT_LOGIN_REDIRECT})

  }















  
  return (
    <Flex className='items-center w-full gap-x-2'>
        <Button size={"lg"} className='w-full' variant={"outline"} onClick={()=> onClickHandler("google")}>
            <FcGoogle className="size-5"/>
        </Button>
        <Button size={"lg"} className='w-full' variant={"outline"} onClick={()=> onClickHandler("github")}>
            <FaGithub className="size-5"/>
        </Button>
    </Flex>
  )
}

export default SocialButton