import { ITag, IUser } from "@/lib/shared/interfaces";
import { z } from "zod";

// Interface for a single Comment
export interface IComment {
  id: string;
  postId: number;
  author: string;
  content: string;
  publishedDate: string;
  parentCommentId?: number | null;
  status: "approved" | "pending" | "spam";
}

// Interface for a BlogPost
export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  author: IUser;
  content: string;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  tags: ITag[];
  featureImageUrl: string;
  status: "draft" | "published" | "archived";
  views: number;
  // commentsEnabled: boolean;
  // comments: IComment[];
  likes: number;
  isShowcase?: boolean;
}
