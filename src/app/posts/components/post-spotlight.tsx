"use client";

import Image from "next/image";
import { DateTime } from "luxon";
import { Icon } from "@iconify/react";
import { formatNumberWithK } from "@/lib/utils/utils";
import Link from "next/link";
import { usePostStore } from "../store";

export default function PostSpotlightComponent() {
  const post = usePostStore((state) => state.showCasePost);

  return (
    <div className="posts__spotlight">
      {post && (
        <article className="posts__spotlight-inner">
          <div className="posts__spotlight-image">
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
                className="posts__spotlight-img"
              />
            )}
          </div>
          <Link href={`/p/${post.slug}`} className="posts__spotlight-content">
            <p className="posts__spotlight-label">Featured essay</p>
            <h3 className="posts__spotlight-title">{post.title}</h3>
            <p className="posts_spotlight-description">{post.excerpt}</p>
            {post.tags?.length > 0 && (
              <div className="posts__spotlight-tags" aria-label="Post tags">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </div>
            )}
            <div className="posts__spotlight-meta">
              <span>
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd, yyyy")}
              </span>
              <span>{`${post.author.first_name} ${post.author.last_name}`}</span>
            </div>
          </Link>
          <div className="posts__spotlight-footer">
            <div className="flex gap-4 item-center">
              <div className="posts__list-item__footer-left-reaction">
                <Icon icon="clarity:eye-show-line" width={16} />
                {formatNumberWithK(post.views)}
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
