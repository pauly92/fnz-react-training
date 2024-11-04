import { useState } from "react";
import { Post } from "./Post";

export type PostData = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export const Blog = () => {
  const [currentPostId, setCurrentPostId] = useState(0);
  const [post, setPost] = useState<PostData | null>(null);

  const getPost = () => {
    // setCurrentPostId(currentPostId + 1); ?

    const abortController = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setPost(data));

    setCurrentPostId(currentPostId + 1);
    // setCurrentPostId(currentPostId + 1); ??
    // setCurrentPostId(currentPostId + 1); ??
    // setCurrentPostId(currentPostId + 1); ??
  };

  return (
    <>
      <h1>Blog</h1>
      <button onClick={getPost}>Get next Post</button>
      <Post title={post?.title} body={post?.body} />
    </>
  );
};
