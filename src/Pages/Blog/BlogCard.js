import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { id, title, postBody, img, price } = post;
  return (
    <Link
      to={`/post/${id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-base-200 shadow-md rounded-xl overflow-hidden"
    >
      <img
        alt="presentation"
        className="object-cover w-full rounded h-44 bg-base-200"
        src={img}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs">{'Price: $' + price }</span>
        <p>{postBody.slice(0, 100) + "..."}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
