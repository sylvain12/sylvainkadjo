"use client";

import React from "react";
import { IBlogPost } from "../models/types";
import PostListItemComponent from "./post-list-item";
import { usePostStore } from "../store";
import {useMemo} from 'react';

export default function PostListComponent() {
  const posts = usePostStore(state => state.posts)
  const notShowcasePosts = useMemo(() => posts.filter(post => !post.isShowcase), [posts])

  return (
    <>
      {notShowcasePosts.length === 0 ? (
        <div className="posts__empty">
          <p>No additional posts are available yet.</p>
        </div>
      ) : (
        <div className="posts__list">
          {notShowcasePosts.map((post) => (
            <PostListItemComponent key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
