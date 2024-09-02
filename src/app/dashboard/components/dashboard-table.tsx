import { IBlogPost } from "@/app/posts/models/types";
import { DateTime } from "luxon";
import { Icon } from "@iconify/react";

type DashboardTableProps = {
  posts: IBlogPost[];
};

export default function DashboardTableComponent({
  posts,
}: DashboardTableProps) {
  // const

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 ">
          <thead className="text-gray-700 uppercase bg-gray-50 text-second">
            <tr className="">
              <th scope="col" className="px-6 py-6">
                Title
              </th>
              <th scope="col" className="px-6 py-6">
                Author
              </th>
              <th scope="col" className="px-6 py-6">
                Published Date
              </th>
              <th scope="col" className="px-6 py-6">
                Showcase
              </th>

              <th scope="col" className="px-6 py-6">
                Status
              </th>

              <th scope="col" className="px-6 py-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr
                  key={post.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {post.title}
                  </th>
                  <td className="px-6 py-4 uppercase">{`${post.author.first_name} ${post.author.last_name}`}</td>
                  <td className="px-6 py-4">
                    {DateTime.fromISO(post.publishedDate).toFormat(
                      "LLL dd, yyyy"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {post.isShowcase ? (
                      <Icon icon="bi:toggle-on" width={30} />
                    ) : (
                      <Icon icon="bi:toggle-off" width={30} />
                    )}
                  </td>
                  <td className={`px-6 py-4 font-bold`}>
                    <span
                      className={`py-2 px-4 rounded-[5px] text-[1.2rem] uppercase ${
                        post.status === "published" ? "bg-green-200" : ""
                      } ${post.status === "draft" ? "bg-orange-200" : ""} ${
                        post.status === "archived" ? "bg-red-200" : ""
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-[1.8rem] text-second hover:underline flex items-center gap-3 uppercase"
                    >
                      <Icon
                        icon="fluent:edit-line-horizontal-3-20-regular"
                        width={20}
                      />
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
