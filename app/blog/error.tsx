"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>oops!!! {error.message}</h1>;
}
