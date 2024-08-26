import React from "react";
import { IBlogPost } from "../models/types";
import PostListItemComponent from "./post-list-item";
import PostLoaderComponent from "./post-loader";

export type PostProops = {
  posts: IBlogPost[];
};

export default function PostListComponent({ posts }: PostProops) {
  return (
    <div className="posts__list">
      {posts &&
        posts.map((post) => (
          <PostListItemComponent key={post.id} post={post} />
        ))}
    </div>
  );
}
