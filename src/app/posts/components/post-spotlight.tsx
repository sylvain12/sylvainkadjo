import Image from "next/image";
import { IBlogPost } from "../models/types";
import { DateTime } from "luxon";

export type PostSpotlightProp = {
  post: IBlogPost;
};

export default function PostSpotlightComponent({ post }: PostSpotlightProp) {
  return (
    <div className="posts__spotlight">
      {/* <h3 className="text-[4rem] mb-[2rem]">On the spotlight</h3> */}
      {post && (
        <div>
          <div className="w-full h-300 mb-[2rem]">
            <Image
              src={post.image}
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
          </div>
          <div>
            <h1 className="text-[3rem] mb-[1rem] font-semibold">
              {post.title}
            </h1>
            <p className="text-[1.8rem] mb-[1rem]">{post.excerpt}</p>
            <p className="posts__list-item__content-date">
              <span>
                {DateTime.fromISO(post.publishedDate).toFormat("LLL dd")}
              </span>{" "}
              - <span className="uppercase">{post.author}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
