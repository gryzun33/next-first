'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/getAllPosts';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import { UsePosts, usePosts } from '@/store';
import { useShallow } from 'zustand/react/shallow';

export default function Blog() {
  const [posts, loading, getAllPosts] = usePosts(
    useShallow((state) => [state.posts, state.loading, state.getAllPosts])
  );

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
}
