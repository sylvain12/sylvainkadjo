"use server";

import { createServerAction } from "zsa";
import { createClient } from "@/lib/utils/supabase/server";
import { IProject } from "./models/types";

export const fetchProjectsProcedure = createServerAction().handler(async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("projects")
    .select(`*, tags (id, name)`)
    .returns<IProject[]>();
  return data;
});
