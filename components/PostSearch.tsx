'use client';

// import { getPostsBySearch } from '@/app/services/getAllPosts';
import { usePosts } from '@/store';
import { FormEventHandler, useState } from 'react';

// type Props = {
//   onSearch: (value: any[]) => void;
// };

const PostSearch = () => {
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);
    // onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
