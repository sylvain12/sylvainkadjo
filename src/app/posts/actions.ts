"use server";

import { createServerAction } from "zsa";
import { createClient } from "@/lib/utils/supabase/server";
import { IBlogPost } from "@/app/posts/models/types";

export const fetchPostsAction = createServerAction().handler(async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from("posts")
    .select(`*, tags (id, name), author:users (id, first_name, last_name)`)
    .filter("status", "eq", "published")
    .returns<IBlogPost[]>();
  return data;
});
