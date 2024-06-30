import React from "react";
import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, url, tags, body_html } = blog;
  return (
    <div>
      <div
        rel="noopener noreferrer"
        className="w-full overflow-hidden p-2 mx-auto group hover:no-underline focus:no-underline border border-gray-500  border-opacity-30 hover:border-[#8c7ae6] "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image}
        />
        <div className="flex flex-wrap py-3 gap-2 border-t mt-3 border-dashed border-gray-400">
          {tags.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-[#8c7ae6] text-white"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className="px-0 py-3 space-y-2">
          <a
            href={url}
            target="_blank"
            className="hover:underline text-2xl font-semibold "
          >
            {title}
          </a>

          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
