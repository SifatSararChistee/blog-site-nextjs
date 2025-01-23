import React from "react";
import PostCard from "./components/PostCard";

const page = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?limit=12"
  );
  const data = await res.json();
  return (
    <div className="mx-auto container w-11/12">
      <h1 className="text-2xl font-bold text-center my-8">Blogs</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.slice(0, 12).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default page;
