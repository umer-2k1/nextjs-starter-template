import React from 'react'
import SignupForm from '@/components/auth/SignupForm'
import { Flex } from '@/components/ui/flex'

const Signup = () => {
  return (
    <Flex className='flex-col items-center justify-center h-screen'>
    <SignupForm/>
    </Flex>

  )
}

export default Signup