import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  // if (!response.ok) {
  //   throw new Error("OH MY GOD!!!!");
  // }
  const data = await response.json();
  return data;
}

export default async function Blog() {
  const posts = await getData();
  return (
    <div>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
