import authConfig from "@/auth.config"
import NextAuth from "next-auth"
import { DEFAULT_LOGIN_REDIRECT,authRoute,apiAuthPrefix, publicRoute } from "@/routes"



const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const {nextUrl} = req
    const isLoggedIn =!!req.auth
    console.log("req...", req);
    console.log("req.auth...", req.auth);

    
    console.log("ROUTE...", req.nextUrl.pathname)
    
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoute.includes(nextUrl.pathname)
    const isAuthRoute = authRoute.includes(nextUrl.pathname)
    console.log("isAuthRoute...", isAuthRoute);
    

    if (isApiAuthRoute) {
        return null
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
    return null;
    }

    if (!isPublicRoute && !isLoggedIn) {
        return Response.redirect(new URL(authRoute[0], nextUrl))

    }

    return null;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}