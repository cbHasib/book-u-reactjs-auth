import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import BlogCard from "../Blog/BlogCard";

const Home = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-12 bg-base-100 text-base-content py-20">
      <section>
        <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="text-primary">laborum doloribus</span>delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {user && user?.uid ? (
              <Link to="/profile" className="btn btn-primary">
                Profile
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
                <Link to="/login" className="btn btn-primary btn-outline">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
      <section className="p-6 bg-base-200">
        <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
            <p className="text-sm sm:text-base">TED talks</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12 mx-auto">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data &&
              data?.map((post) => <BlogCard key={post.id} post={post} />)}
          </div>
          <div className="flex justify-center">
            <button className="btn btn-secondary btn-outline">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
