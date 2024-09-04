"use client";

import { useServerAction } from "zsa-react";
import { fetchPostsAction } from "../actions";
import { useEffect, useState } from "react";
import { IBlogPost } from "../models/types";
import PostListComponent from "./post-list";
import PostLoaderComponent from "./post-loader";
import PostSpotlightComponent from "./post-spotlight";
import { usePostStore } from "../store";

export default function PostsContent() {
  const { posts, setPosts, showCasePost, setShowCasePost } = usePostStore();

  const { isPending, execute, data } = useServerAction(fetchPostsAction, {
    onError: ({ err }) => console.log(err.message),
    onSuccess: ({ data }) => data && console.log(`${data.length} posts loaded!`),
    initialData: posts,
    persistDataWhilePending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;
      setPosts(data! || []);
      setShowCasePost(data?.filter((post) => post.isShowcase)[0]!);
    };
    fetchData();
  }, [setPosts, execute, setShowCasePost]);

  return (
    <div className="posts__content">
      {isPending && data?.length === 0 ? (
        <PostLoaderComponent />
      ) : (
        <>
          {<PostSpotlightComponent post={showCasePost!} />}
          <PostListComponent posts={posts.slice(1)} />
        </>
      )}
    </div>
  );
}
