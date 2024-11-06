import { useEffect, useState } from "react";

type PostData = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export const FetchExample = () => {
  const [postID, setPostID] = useState(0);
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Request aborted');
        } else {
            console.log('Error:', error);
        }
    });

    return () => {
      controller.abort();
    };
  }, [postID]);

  return (
    <>
      <button onClick={() => setPostID(postID + 1)}>
        Next PostID: {postID}
      </button>
      <h1>Post</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
};
