import * as z from "zod"
import Login from './../app/auth/login/page';

export const LoginSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().min(6),
})