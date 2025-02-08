import { z } from "zod";

export const DeleteProfileSchema = z.object({
    password: z.string(),
})
export type DeleteProfileType = z.infer<typeof DeleteProfileSchema>

export const UpdatePasswordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    passwordConfirmation: z.string(),
}).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password confirmation must match password.",
    path: ["passwordConfirmation"], // This ensures the error is attached to `passwordConfirmation`
});
export type UpdatePasswordType = z.infer<typeof UpdatePasswordSchema>;

export const UpdateProfileSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
});
export type UpdateProfileType = z.infer<typeof UpdateProfileSchema>