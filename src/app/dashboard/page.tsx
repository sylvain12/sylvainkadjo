"use client";

import { getAllPostsAction } from "../posts/actions";
import DashboardTableComponent from "./components/dashboard-table";
import { useServerAction } from "zsa-react";
import { useDashboardPostStore } from "./store";
import { useEffect } from "react";
import Button from "@/components/ui/buttons";

export default function Dashboard() {
  const { posts, setPosts } = useDashboardPostStore();
  const { isPending, execute, data } = useServerAction(getAllPostsAction, {
    initialData: posts,
    persistDataWhilePending: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [data, err] = await execute();
      if (err) return;
      setPosts(data! || []);
      //   setShowCasePost(data?.filter((post) => post.isShowcase)[0]!);
    };
    fetchData();
  }, [setPosts, execute]);

  return (
    <>
      <section className="dashboard__section">
        <div className="dashboard__section-header">
          <h1 className="dashboard__section-tilte">All Posts</h1>
          <div className="dashboard__section-actions">
            <Button
              label="New post"
              transparent={false}
              variant="second"
              icon=""
              onClick={() => console.log("New Post")}
            />
          </div>
        </div>
        <DashboardTableComponent posts={posts} />
      </section>
    </>
  );
}
