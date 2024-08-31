import { TagSchema, UserSchema } from "@/lib/shared/schemas";
import { z } from "zod";

export const CommentSchema = z.object({
  id: z.number(),
  postId: z.number(),
  author: z.string(),
  content: z.string(),
  publishedDate: z.string().date(),
  parentCommentId: z.optional(z.number()).nullable(),
  //   status: z.enum(["approved", "pending", "spam"]),
});

export const BlogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  author: UserSchema,
  content: z.string(),
  excerpt: z.string(),
  publishedDate: z.string(),
  updatedDate: z.string(),
  tags: TagSchema,
  featuredImageUrl: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  views: z.number(),
  commentsEnabled: z.boolean(),
  comments: CommentSchema,
  likes: z.number(),
});
