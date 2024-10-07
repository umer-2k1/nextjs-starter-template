'use server';
import * as z from 'zod';
import { RegisterSchema } from '@/validation';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/utils/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { name, email, password } = validateFields.data;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //! Existing user check
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //? TODO: Send email verification

  return { success: 'User created!' };
};
