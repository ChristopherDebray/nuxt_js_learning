import { z } from "zod";

export const OrganisationCreateSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
    taskPrefix: z.string().optional(),
})
export type OrganisationCreateType = z.infer<typeof OrganisationCreateSchema>