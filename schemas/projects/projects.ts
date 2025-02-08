import { z } from "zod";

export const ProjectCreateSchema = z.object({
    name: z.string().min(4),
    description: z.string().optional(),
})
export type ProjectCreateType = z.infer<typeof ProjectCreateSchema>