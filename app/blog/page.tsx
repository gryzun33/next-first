import Link from 'next/link';
// import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/getAllPosts';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import { UsePosts, usePosts } from '@/store';
import { useShallow } from 'zustand/react/shallow';

export default function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </div>
  );
}
