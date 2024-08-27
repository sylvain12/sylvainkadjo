"use client";

import { useServerAction } from "zsa-react";
import { fetchPosts } from "../actions";
import { useEffect, useState } from "react";
import { IBlogPost } from "../models/types";
import PostListComponent from "./post-list";
import PostLoaderComponent from "./post-loader";
import PostSpotlightComponent from "./post-spotlight";

export default function PostsContent() {
  const [posts, setPosts] = useState<IBlogPost[]>([]);
  const { isPending, execute, data } = useServerAction(fetchPosts, {
    onError: ({ err }) => console.log(err.message),
    onSuccess: () => console.log("success"),
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;
      setPosts(data);
    };
    fetchData();
  }, [setPosts]);

  return (
    <div className="posts__content">
      {isPending ? (
        <PostLoaderComponent />
      ) : (
        <>
          {<PostSpotlightComponent post={posts.slice(0, 1)[0]} />}
          <PostListComponent posts={posts.slice(1)} />
        </>
      )}
    </div>
  );
}
