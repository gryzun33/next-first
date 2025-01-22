"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/getAllPosts";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("OH MY GOD!!!!");
//   }
//   const data = await response.json();
//   return data;
// }

export default function Blog() {
  // const posts = await getData();

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
}
