import React from 'react';
import { TriangleAlert } from 'lucide-react';
import { Flex } from './flex';

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }
  return (
    <Flex className="items-center rounded-md gap-x-2 text-sm text-destructive bg-destructive/15 p-3">
      <TriangleAlert className="size-4" />

      <p>{message}</p>
    </Flex>
  );
};

export default FormError;
