import Image from "next/image";
import { IBlogPost } from "../models/types";
import { DateTime } from "luxon";
import { Icon } from "@iconify/react";
import { formatNumberWithK } from "@/lib/utils/utils";
import Link from "next/link";

export type PostSpotlightProp = {
  post: IBlogPost;
};

export default function PostSpotlightComponent({ post }: PostSpotlightProp) {
  return (
    <div className="posts__spotlight">
      {post && (
        <div>
          <div className="w-full h-300 mb-[2rem]">
            {post.featuredImageUrl && (
              <Image
                src={post.featuredImageUrl}
                width={500}
                height={300}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px",
                  objectPosition: "center",
                }}
                alt={post.title}
              />
            )}
          </div>
          <Link href={`p/${post.slug}`} className="posts__spotlight-content">
            <h1 className="posts__spotlight-title">{post.title}</h1>
            <p className="text-[1.8rem] mb-[1rem]">{post.excerpt}</p>
            <p className="posts__list-item__content-date">
              <span>
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd")}
              </span>{" "}
              -{" "}
              <span className="uppercase font-normal">{`${post.author.first_name} ${post.author.last_name}`}</span>
            </p>
          </Link>
          <div className="posts__spotlight-footer">
            <div className="flex gap-4 item-center">
              <div className="posts__list-item__footer-left-reaction">
                <Icon icon="clarity:eye-show-line" width={16} />
                {formatNumberWithK(post.views)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
