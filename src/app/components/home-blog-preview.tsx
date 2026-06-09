"use client";

import { DateTime } from "luxon";
import Link from "next/link";
import { useEffect } from "react";
import { useServerAction } from "zsa-react";
import { fetchPostsAction } from "../posts/actions";

export default function HomeBlogPreview() {
  const { isPending, execute, data } = useServerAction(fetchPostsAction, {
    initialData: [],
    persistDataWhilePending: true,
  });

  useEffect(() => {
    execute();
  }, [execute]);

  const previewPosts = data?.slice(0, 3) || [];

  return (
    <section className="home__section home__blog-preview">
      <div className="home__section-heading">
        <p className="home__section-kicker">Engineering notes</p>
        <h2>Short field notes from product engineering work.</h2>
      </div>

      {isPending && previewPosts.length === 0 ? (
        <div className="home__blog-loading" aria-live="polite">
          Loading recent articles...
        </div>
      ) : previewPosts.length > 0 ? (
        <div className="home__blog-grid">
          {previewPosts.map((post) => (
            <article className="home__blog-card" key={post.id}>
              <p className="home__blog-meta">
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd, yyyy")}
              </p>
              <h3>
                <Link href={`/p/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="home__blog-loading">
          Articles will appear here as they are published.
        </div>
      )}

      <Link href="/blog" className="home__text-link">
        Visit the blog
      </Link>
    </section>
  );
}
