import LoginForm from '@/components/auth/LoginForm';
import { Flex } from '@/components/ui/flex';
import React from 'react';

const Login = () => {
  return (
    <Flex className="flex-col items-center justify-center h-screen">
      <LoginForm />
    </Flex>
  );
};

export default Login;
