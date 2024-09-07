import Image from "next/image";
import { IBlogPost } from "../models/types";
import { DateTime } from "luxon";
import { Icon } from "@iconify/react";
import { formatNumberWithK } from "@/lib/utils/utils";
import Link from "next/link";
import {usePostStore} from '../store'


export default function PostSpotlightComponent() {
const post = usePostStore(state => state.showCasePost)

  return (
    <div className="posts__spotlight">
      {post && (
        <div>
          <div className="w-full h-300 mb-[2rem]">
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
                className='h-[300px] max-md:h-[150px]'
              />
            )}
          </div>
          <Link href={`p/${post.slug}`} className="posts__spotlight-content">
            <h1 className="posts__spotlight-title">{post.title}</h1>
            <p className="posts_spotlight-description">{post.excerpt}</p>
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
