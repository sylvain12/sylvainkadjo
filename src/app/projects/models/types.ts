import { ITag } from "@/lib/shared/interfaces";

export interface IProject {
  id: number;
  name: string;
  description: string;
  tags?: ITag[];
  githubLink?: string;
  projectLink?: string;
  category?: "package" | "data" | "software" | "design";
}
