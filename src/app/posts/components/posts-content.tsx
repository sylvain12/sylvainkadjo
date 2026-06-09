"use client";

import { useEffect } from "react";
import { useServerAction } from "zsa-react";
import { fetchPostsAction } from "../actions";
import { usePostStore } from "../store";
import PostListComponent from "./post-list";
import PostLoaderComponent from "./post-loader";
import PostSpotlightComponent from "./post-spotlight";
import { toast }  from 'sonner'

export default function PostsContent() {
  const setPosts = usePostStore((state) => state.setPosts);
  const setShowCasePost = usePostStore((state) => state.setShowCasePost);
  const posts = usePostStore((state) => state.posts);

  const { isPending, execute, data } = useServerAction(fetchPostsAction, {
    onError: ({ err }) => {
      console.log(err)
    },
    onSuccess: ({ data }) =>
      data && console.log(`${data.length} posts loaded!`),
    initialData: posts,
    persistDataWhilePending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) {
        toast.error('Error while fetching posts...')
      }

      if (data && data.length !== 0) {
        setPosts(data);
        setShowCasePost(data.filter((post) => post.isShowcase)[0]!);
      }
    };

    fetchData();
  }, [execute, setPosts, setShowCasePost]);

  return (
    <section className="posts__content" id="latest-writing" aria-label="Latest writing">
      {isPending && data?.length === 0 ? (
        <PostLoaderComponent />
      ) : (
        <>
          <div className="posts__section-header">
            <p className="posts__section-kicker">Latest writing</p>
            <div>
              <h2>Notes on software, systems, and product craft.</h2>
              <p>
                A focused collection of technical articles, implementation
                notes, and lessons from building software products.
              </p>
            </div>
          </div>
          {<PostSpotlightComponent />}
          <PostListComponent />
        </>
      )}
    </section>
  );
}
