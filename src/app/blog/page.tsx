import Posts from "@/app/posts";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Blog - SK",
};

export default function BlogPage() {
  return <Posts />;
}
