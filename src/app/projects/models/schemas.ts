import { z } from "zod";
import { TagSchema } from "@/lib/shared/schemas";

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  tags: TagSchema,
  githubLink: z.optional(z.string()).nullable(),
  projectLink: z.optional(z.string()).nullable(),
  category: z.enum(["package", "data", "software", "design"]),
});
