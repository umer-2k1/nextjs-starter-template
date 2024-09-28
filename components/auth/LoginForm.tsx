"use client";
import React from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/validation'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LoginForm = () => {

  const form  = useForm<z.infer <typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      name: "",
      email: "",
      password: ""
    }
  })

  return (
    <CardWrapper headerLabel=''>
 <Form {...form}>

 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
 </Form>
    </CardWrapper>
  )
}

export default LoginForm