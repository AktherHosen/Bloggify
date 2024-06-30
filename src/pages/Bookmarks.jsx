import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import Empty from "../components/Empty";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1)
    return (
      <Empty
        message={"No Bookmarks Available"}
        label={"Read Blogs"}
        address={"/blogs"}
      ></Empty>
    );
  return (
    <div className="container  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            handleDelete={handleDelete}
            deletable={true}
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
