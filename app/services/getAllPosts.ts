export async function getAllPosts() {
  const response = await fetch('/api/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('OH MY GOD!!!!');
  }
  const data = await response.json();
  return data;
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};

// export default getAllPosts;
