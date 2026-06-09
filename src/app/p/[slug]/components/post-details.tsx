"use Client";

import { IBlogPost } from "@/app/posts/models/types";
import { DateTime } from "luxon";
import PostContentComponent from './post-content';
import Image from "next/image";
import Link from "next/link";

type PostDetailProp = {
  post: IBlogPost;
};

export default function PostDetailComponents({ post }: PostDetailProp) {
  return (
    <>
      {post && (
        <article className="post-details">
          <header className="post-details__header">
            <Link href="/blog" className="post-details__back-link">
              Back to writing
            </Link>
            {post.tags?.length > 0 && (
              <div className="post-details__header-tags">
                {post.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
              </div>
            )}
            <h1 className="post-details__header-title">{post.title}</h1>
            <p className="post-details__header-description">{post.excerpt}</p>
            <div className="post-details__header-author">
              <span>
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd, yyyy")}
              </span>
              <span>{`${post.author.first_name} ${post.author.last_name}`}</span>
            </div>
          </header>
          <div className="post-details__image">
            {post.featureImageUrl && (
              <Image
                src={`post_images/${post.featureImageUrl}`}
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  objectPosition: "center",
                }}
                alt={post.title}
                className="post-details__image-img"
                priority
              />
            )}
          </div>

          {/* <div className='post-details__actions'>

      </div> */}
          {post.content && <PostContentComponent content={post.content} />}
        </article>
      )}
    </>
  );
}
