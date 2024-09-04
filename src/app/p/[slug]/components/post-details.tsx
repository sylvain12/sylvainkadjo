"use Client";

import { IBlogPost } from "@/app/posts/models/types";
import { DateTime } from "luxon";
import PostContentComponent from './post-content';
import Image from "next/image";

type PostDetailProp = {
  post: IBlogPost;
};

export default function PostDetailComponents({ post }: PostDetailProp) {
  return (
    <>
      {post && (
        <div className="post-details">
          <div className="post-details__header">
            <h1 className="post-details__header-title">{post.title}</h1>
            <p className="post-details__header-description">{post.excerpt}</p>
            <p className="post-details__header-author">
              <span>
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd, yyyy")}
              </span>{" "}
              -{" "}
              <span className="uppercase font-normal">{`${post.author.first_name} ${post.author.last_name}`}</span>
            </p>
            <div className="post-details__header-tags">
              {post.tags &&
                post.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
            </div>
          </div>
          <div className="w-full h-300 mb-[4rem]">
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
                className='h-[300px] max-md:h-[200px]'
              />
            )}
          </div>

          {/* <div className='post-details__actions'>

      </div> */}
          {post.content && <PostContentComponent content={post.content} />}
        </div>
      )}
    </>
  );
}
