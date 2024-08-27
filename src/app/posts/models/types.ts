import { ITag } from "@/lib/shared/interfaces";
import { z } from "zod";

// Interface for a single Comment
export interface IComment {
  id: number;
  postId: number;
  author: string;
  content: string;
  publishedDate: string;
  parentCommentId?: number | null;
  status: "approved" | "pending" | "spam";
}

// Interface for a BlogPost
export interface IBlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  tags: ITag[];
  featuredImageUrl: string;
  status: "draft" | "published" | "archived";
  views: number;
  commentsEnabled: boolean;
  comments: IComment[];
  likes: number;
  image: string;
}
