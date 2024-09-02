"use client";

import { useEffect } from "react";
import { getPostAction } from "../posts/actions";
import { usePostStore } from "../posts/store";
import { usePathname } from "next/navigation";
import { useServerAction } from "zsa-react";
import PostDetailsComponent from "./components/post-details";
import PostDetailsLoaderComponent from "./components/post-details-loader";

export default function PostViewComponent() {
  const { showedPost, setShowedPost } = usePostStore();
  const { isPending, execute } = useServerAction(getPostAction);
  const pathname = usePathname();
  const slug = pathname.replace("/", "");

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await execute({ slug: slug });
      if (error) return;
      setShowedPost(data!);
    };
    fetchData();
  }, [setShowedPost, execute]);

  return (
    <div className="post-details__container">
      {isPending ? (
        <PostDetailsLoaderComponent />
      ) : (
        <PostDetailsComponent post={showedPost!} />
      )}
    </div>
  );
}
