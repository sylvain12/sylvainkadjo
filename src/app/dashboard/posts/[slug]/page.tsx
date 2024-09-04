"use client";

import Tiptap from "@/lib/utils/tiptap";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLastPath } from "@/lib/utils/utils";
import { useDashboardPostStore } from "../../store";
import { useServerAction } from "zsa-react";
import { getPostAction, updatePostContentAction } from "@/app/posts/actions";
import { useEffect } from "react";
import Button from "@/components/ui/buttons";
import { useTiptapStore } from "@/lib/utils/tiptap/store";

export default function DashboardPostEditComponent() {
  const pathname = usePathname();
  const { editPost, setEditPost } = useDashboardPostStore();
  const { content, setContent } = useTiptapStore();
  const { isPending, execute, data } = useServerAction(getPostAction, {initialData: editPost!, persistDataWhilePending: true});
  const slug = getLastPath(pathname);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await execute({ slug: slug });
      if (error) return;
      setEditPost(data!);
      setContent(data?.content!);
    };
    fetchData();
  }, [setEditPost, execute, slug, setContent]);

  const handleSaveContent = async () => {
    const [data, error] = await updatePostContentAction({
      id: editPost?.id!,
      content: content,
    });
    if (error) console.log(error);
    console.log(data);
  };

  return (
    <div className="dashboard__post-edit">
      <div className="dashboard__post-edit__header"></div>
      <section className="dashboard__section">
        <div className="dashboard__section-header">
          <h1 className="dashboard__section-tilte order-2">Post Edit</h1>
          <div className="dashboard__section-actions order-1">
            <Link
              href={"/dashboard"}
              className="dashboard__post-edit__header-back"
            >
              <Icon icon="iwwa:arrow-left" width={30} /> Back
            </Link>
          </div>
        </div>
      </section>

      <div className="mb-[3rem] text-right">
        <Button
          disabled={content === "" || content === null}
          label="Save"
          variant="second"
          onClick={handleSaveContent}
        />
      </div>
      <section className="tiptap">
      <Tiptap content={content!} isLoading={isPending && (data === null || data === undefined)}/>
      </section>
    </div>
  );
}
