"use Client";

import { IBlogPost } from "@/app/posts/models/types";
import { DateTime } from "luxon";
import PostContentComponent from './post-content';

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

          {/* <div className='post-details__actions'>

      </div> */}
          {post.content && (
            <PostContentComponent content={post.content} />
          )}
        </div>
      )}
    </>
  );
}
