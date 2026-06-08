import { IBlogPost } from "../models/types";
import { Icon } from "@iconify/react";
import { DateTime } from "luxon";
import Image from "next/image";
import { formatNumberWithK } from "@/lib/utils/utils";
import Link from "next/link";

export type PostListItemProp = {
  post: IBlogPost;
};

export default function PostListItemComponent({ post }: PostListItemProp) {
  const publishedDate = DateTime.fromISO(post.publishedDate).toFormat(
    "LLL dd, yyyy"
  );

  return (
    <article className="posts__list-item">
      <div className="posts__list-item__content">
        <div className="posts__list-item__meta">
          <span>{publishedDate}</span>
          <span>{`${post.author.first_name} ${post.author.last_name}`}</span>
        </div>
        <h3 className="posts__list-item__content-title">
          <Link href={`/p/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="posts__list-item__content-description">{post.excerpt}</p>
        {post.tags?.length > 0 && (
          <div className="posts__list-item__tags" aria-label="Post tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        )}

        <div className="posts__list-item__footer">
          <div className="posts__list-item__footer-left">
            <div className="posts__list-item__footer-left-reaction">
              <Icon icon="clarity:eye-show-line" width={16} />
              {formatNumberWithK(post.views)}
            </div>
            <div className="posts__list-item__footer-left-reaction">
              <Icon icon="circum:heart" width={16} />
              {formatNumberWithK(post.likes)}
            </div>
            {/* <div className="posts__list-item__footer-left-reaction">
              <Icon icon="iconamoon:comment-thin" width={14} />
              {formatNumberWithK(post.comments.length)}
            </div> */}
            {/* <div>{post.likes}</div> */}
          </div>
        </div>
      </div>

      <div className="posts__list-item__image">
        <Image
          src={post.featureImageUrl}
          width={150}
          height={150}
          alt={post.title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </article>
  );
}
