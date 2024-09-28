import LoginForm from '@/components/auth/LoginForm'
import { Flex } from '@/components/ui/flex'
import React from 'react'

const Login = () => {
  return (
    <Flex className='flex-col items-center justify-center h-full border-2 border-red-500'>
 <LoginForm/>
    </Flex>
  )
}

export default Login