import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { UserRole } from "@prisma/client";
import { getUserById } from "@/utils/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  events:{
    async linkAccount({user}){
      await prisma.user.update({
        where: {id: user.id},
        data: {emailVerified: true}
      })
    }
  },
  
  callbacks:{

    //? Check for email verification if required
    // async signIn({user}) {
    //   const exUser = user.id ?  await getUserById(user.id as string)  : null
    //   if (!exUser || !exUser.emailVerified) {
    //     return false
    //   }
    //   return true
    // },
    async session({token, session}){
      if (session.user, token.sub) {
        console.log({token, session});
        
        session.user.id = token.sub;
        session.user.role = token.role as UserRole;
      }
      console.log({token, session});
      

      return session

    },
    async jwt({token}){
      console.log({token});
      if (!token.sub) {
        return token
      }
      const exUser = await getUserById(token.sub)
      if (exUser) {
        token.role = exUser.role
      }
      return token
      
    }
  },
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
  ...authConfig,
})