import React from 'react';
import { CircleCheck } from 'lucide-react';
import { Flex } from './flex';

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }
  return (
    <Flex className="items-center rounded-md gap-x-2 text-sm text-emerald-500 bg-emerald-500/15 p-3">
      <CircleCheck className="size-4" />

      <p>{message}</p>
    </Flex>
  );
};

export default FormSuccess;
