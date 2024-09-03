"use server";

import { createServerAction } from "zsa";
import { createClient } from "@/lib/utils/supabase/server";
import { IBlogPost } from "@/app/posts/models/types";
import { z } from "zod";
import { BlogPostSchema } from "./models/shemas";

export const getAllPostsAction = createServerAction().handler(async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from("posts")
    .select(`*, tags (id, name), author:users (id, first_name, last_name)`)
    .returns<IBlogPost[]>();
  return data;
});

export const fetchPostsAction = createServerAction().handler(async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from("posts")
    .select(`*, tags (id, name), author:users (id, first_name, last_name)`)
    .filter("status", "eq", "published")
    .returns<IBlogPost[]>();
  return data;
});

export const getPostAction = createServerAction()
  .input(z.object({ slug: z.string() }))
  .handler(async ({ input }) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*, tags (id, name), author:users (id, first_name, last_name)")
      .filter("slug", "eq", input.slug)
      .maybeSingle<IBlogPost>();

    return data;
  });

export const updatePostContentAction = createServerAction()
  .input(z.object({ id: z.string(), content: z.string() }))
  .handler(async ({ input }) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .update({ content: input.content })
      .eq("id", input.id);

    return data;
  });
