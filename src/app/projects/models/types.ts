import { ITag } from "@/lib/shared/interfaces";
import { z } from "zod";
import { ProjectSchema } from "./schemas";

export interface IProject {
  id: number;
  name: string;
  description: string;
  tags?: ITag[];
  repository?: string;
  website?: string;
  category?: "package" | "data & ai" | "software" | "design";
}

export type ProjectType = z.infer<typeof ProjectSchema>;
