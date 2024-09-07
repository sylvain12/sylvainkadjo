"use client";

import { useEffect } from "react";
import { useServerAction } from "zsa-react";
import { fetchPostsAction } from "../actions";
import { usePostStore } from "../store";
import PostListComponent from "./post-list";
import PostLoaderComponent from "./post-loader";
import PostSpotlightComponent from "./post-spotlight";

export default function PostsContent() {
  const setPosts = usePostStore((state) => state.setPosts);
  const setShowCasePost = usePostStore((state) => state.setShowCasePost);
  const posts = usePostStore((state) => state.posts);

  const { isPending, execute, data } = useServerAction(fetchPostsAction, {
    onError: ({ err }) => console.log(err.message),
    onSuccess: ({ data }) =>
      data && console.log(`${data.length} posts loaded!`),
    initialData: posts,
    persistDataWhilePending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;

      setPosts(data!);
      setShowCasePost(data?.filter((post) => post.isShowcase)[0]!);
    };
    fetchData();
  }, [execute, setPosts, setShowCasePost]);

  return (
    <div className="posts__content">
      {isPending && data?.length === 0 ? (
        <PostLoaderComponent />
      ) : (
        <>
          {<PostSpotlightComponent />}
          <PostListComponent />
        </>
      )}
    </div>
  );
}
