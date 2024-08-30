import { z } from "zod";
import { TagSchema } from "@/lib/shared/schemas";

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  tags: TagSchema,
  repository: z.optional(z.string()).nullable(),
  website: z.optional(z.string()).nullable(),
  category: z.enum(["package", "data", "software", "design"]),
});
