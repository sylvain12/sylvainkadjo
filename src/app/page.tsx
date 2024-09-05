import Posts from "@/app/posts";

export const runtime ="edge"

export default function Home() {
  return (
    <>
      <Posts />
    </>
  );
}
