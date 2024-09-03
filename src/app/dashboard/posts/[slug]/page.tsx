"use client";

import Tiptap from "@/lib/utils/tiptap";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLastPath } from "@/lib/utils/utils";
import { useDashboardPostStore } from "../../store";
import { useServerAction } from "zsa-react";
import { getPostAction } from "@/app/posts/actions";
import { useEffect } from "react";

export default function DashboardPostEditComponent() {
  const pathname = usePathname();
  const { editPost, setEditPost } = useDashboardPostStore();
  const { isPending, execute, data } = useServerAction(getPostAction, {
    persistDataWhilePending: true,
    initialData: editPost!,
  });
  const slug = getLastPath(pathname);

  useEffect(() => {
    const fetchData = async () => {
      const [data, error] = await execute({ slug: slug });
      if (error) return;
      setEditPost(data!);
    };
    fetchData();
  }, [setEditPost, execute, slug]);

  console.log(editPost?.content);

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

      <section className="tiptap">
        <Tiptap content={editPost?.content || ""} />
      </section>
    </div>
  );
}
