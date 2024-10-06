"use server"
import * as z from "zod"
import { LoginSchema } from '@/validation'
import { signIn, signOut } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const login = async(values: z.infer<typeof LoginSchema>) => {
    const  validateField = LoginSchema.safeParse(values)
    console.log( "Login Values" , values);
    if(!validateField.success){ 
        return {error: "Invalid fields!"}
    }

    const {email, password} = validateField.data
    try {
        await signIn("credentials", {email, password, redirectTo: DEFAULT_LOGIN_REDIRECT})
    } catch (error) {

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials!"}
                default:
                    return {error: "Something went wrong!"}
            }
        }
        throw error
        
    }

 
}   


export const logout = async() => {
    await signOut({redirectTo: "/"})
}