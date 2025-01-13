import { Metadata } from "next";

// type Props = {
//   params: {
//     id: string;
//   };
// };

type paramsType = Promise<{ id: string }>;

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: paramsType;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Post ${id}`,
  };
}

export default async function Post({ params }: { params: paramsType }) {
  const { id } = await params;
  const post = await getData(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
