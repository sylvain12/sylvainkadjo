import { z } from "zod";

export const TagSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.nullable(z.string()).optional(),
});

export const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});
