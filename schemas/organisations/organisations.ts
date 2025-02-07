import { z } from "zod";

export const OrganisationCreateSchema = z.object({
    name: z.string().min(4),
    description: z.any(),
    taskPrefix: z.any(),
})
export type OrganisationCreateType = z.infer<typeof OrganisationCreateSchema>