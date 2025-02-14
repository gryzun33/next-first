'use client';

import { usePosts } from '@/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import useSWR from 'swr';
import { getAllPosts } from '@/app/services/getAllPosts';

// type Props = {
//   posts: any[];
// };

const Posts = () => {
  // const [posts, loading, getAllPosts] = usePosts(
  //   useShallow((state) => [state.posts, state.loading, state.getAllPosts])
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, []);

  const { data: posts, isLoading } = useSWR('posts', getAllPosts);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
