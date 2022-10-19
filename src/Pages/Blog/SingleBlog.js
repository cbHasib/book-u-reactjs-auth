import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const post = useLoaderData();

  const { img, title, postBody, price } = post;
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-base-100 text-base-content">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img src={img} alt="" className="w-full h-60 sm:h-96" />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-neutral text-neutral-content">
          <div className="space-y-2 text-4xl">
            {title}

            <p className="text-xs dark:text-gray-400">
              Price
              {" $" + price}
            </p>
          </div>
          <div className="dark:text-gray-100">
            <p>{postBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
