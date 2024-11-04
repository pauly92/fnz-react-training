import React, { useEffect } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostList = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


// https://react.dev/learn/you-might-not-need-an-effect