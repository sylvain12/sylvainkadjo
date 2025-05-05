import PostsContent from "./components/posts-content";
import PostsHeaderComponent from "./components/posts-header";

export const runtime = "edge";

export default function Posts() {
  return (
    <div className="posts">
      <PostsHeaderComponent />
      <PostsContent />
    </div>
  );
}
