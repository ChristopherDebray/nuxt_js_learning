import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
    passwordConfirmation: z.string().min(8, "Must be at least 8 characters"),
    firstname: z.string(),
    lastname: z.string(),
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password confirmation must match password.",
    path: ["passwordConfirmation"], // This ensures the error is attached to `passwordConfirmation`
});
export type RegisterType = z.infer<typeof RegisterSchema>;