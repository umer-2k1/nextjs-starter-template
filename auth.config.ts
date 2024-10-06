import Credential from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { getUserByEmail } from "./utils/user"
import { LoginSchema } from "./validation"
import bcrypt from "bcryptjs";
 
export default { providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credential({
        async authorize(credentials, req) {
            const validateFields = LoginSchema.safeParse(credentials)
    if (validateFields.success) {
        const {email, password} = validateFields.data
        const user= await getUserByEmail(email)
        if (!user || !user.password) {
            return null 
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(isPasswordMatch) {
            return user
        }
    }    
    
    return null
        }
    })
] } satisfies NextAuthConfig