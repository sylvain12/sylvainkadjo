"use client";

import { useServerAction } from "zsa-react";
import { fetchPostsAction } from "../actions";
import { useEffect, useState } from "react";
import { IBlogPost } from "../models/types";
import PostListComponent from "./post-list";
import PostLoaderComponent from "./post-loader";
import PostSpotlightComponent from "./post-spotlight";

export default function PostsContent() {
  const [posts, setPosts] = useState<IBlogPost[]>([]);
  const [showCasepost, setShowcasepost] = useState<IBlogPost>();

  const { isPending, execute } = useServerAction(fetchPostsAction, {
    onError: ({ err }) => console.log(err.message),
    onSuccess: ({ data }) => console.log(`${data.length} posts loaded!`),
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;
      console.log(data);
      setPosts(data! || []);
      setShowcasepost(data?.filter((post) => post.isShowcase)[0]);
    };
    fetchData();
  }, [setPosts, execute]);

  return (
    <div className="posts__content">
      {isPending ? (
        <PostLoaderComponent />
      ) : (
        <>
          {<PostSpotlightComponent post={showCasepost!} />}
          <PostListComponent posts={posts.slice(1)} />
        </>
      )}
    </div>
  );
}
