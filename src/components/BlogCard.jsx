import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <div className="relative border-2 transition hover:scale-105 hover:border-opacity-50 max-w-sm mx-auto group hover:no-underline focus:no-underline hover:border-[#8c7ae6]">
      <Link rel="noopener noreferrer" to={`/blog/${id}`}>
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-black-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-[#8c7ae6] p-3 -top-3 -right-5 rounded-full hover:scale-105"
        >
          <MdDelete size={25} className="" />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
