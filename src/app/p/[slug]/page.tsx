"use client";

import { useEffect } from "react";
import { getPostAction } from "../../posts/actions";
import { usePostStore } from "../../posts/store";
import { usePathname } from "next/navigation";
import { useServerAction } from "zsa-react";
import PostDetailsComponent from "./components/post-details";
import PostDetailsLoaderComponent from "./components/post-details-loader";
import { getLastPath } from "@/lib/utils/utils";

export const runtime="edge"

export default function PostViewComponent() {
  const { showedPost, setShowedPost } = usePostStore();
  const { isPending, execute, data } = useServerAction(getPostAction, {
    persistDataWhilePending: true,
    initialData: showedPost!,
  });
  const pathname = usePathname();
  const slug = getLastPath(pathname);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await execute({ slug: slug });
      if (error) return;
      setShowedPost(data!);
    };
    fetchData();
  }, [setShowedPost, execute, slug]);

  return (
    <div className="post-details__container">
      {isPending && data === null ? (
        <PostDetailsLoaderComponent />
      ) : (
        <PostDetailsComponent post={showedPost!} />
      )}
    </div>
  );
}
