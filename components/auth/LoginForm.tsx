"use client";
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/validation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FormError from '@/components/ui/form-error';
import FormSuccess from '@/components/ui/form-success';
import { login } from '@/actions/login';

const LoginForm = () => {
const [isPending, startTransition] = useTransition()
const [error, setError] = useState<string>("")
const [success, setSuccess] = useState<string>("")




  const form  = useForm<z.infer <typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email: "",
      password: "123456"
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  startTransition(() => {
    login(values).then((data: any)=>{
      setError(data?.error!)
      setSuccess(data?.success!)
    })

  })

  
  }



  return (
<CardWrapper headerLabel='Welcome back'
backButtonLabel={`Don't have an account?`}
backButtonhref='/auth/signup'
showSocial>
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>


              <FormControl>
                <Input placeholder="john.doe@gmail.com" type="email" {...field} 
                disabled={isPending}
                
                />
              </FormControl> 
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>


              <FormControl>
                <Input placeholder="*******" type="password" {...field}
                disabled={isPending}
                
                />
              </FormControl> 
              <FormMessage />
            </FormItem>
          )}
        />

<FormError message={error}/>
<FormSuccess message={success}/>

        <Button type="submit" className='w-full' size={"lg"}
                disabled={isPending}
        
        >Submit</Button>
      </form>
 </Form>
    </CardWrapper>
  )
}

export default LoginForm