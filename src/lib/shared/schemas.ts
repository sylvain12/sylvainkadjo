import { z } from "zod";

export const TagSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.nullable(z.string()).optional(),
});
