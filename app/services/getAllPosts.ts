async function getAllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("OH MY GOD!!!!");
  }
  const data = await response.json();
  return data;
}

export default getAllPosts;
