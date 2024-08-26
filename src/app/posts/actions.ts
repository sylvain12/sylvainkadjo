"use server";

import fakePosts from "@/lib/fake-data";
import { createServerAction } from "zsa";
import { BlogPostSchema } from "@/app/posts/models/shemas";
import { z } from "zod";
import { IBlogPost } from "@/app/posts/models/types";

export const fetchPosts = createServerAction().handler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakePosts;
});
