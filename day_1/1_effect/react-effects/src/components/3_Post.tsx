import React from "react";
import { PostData } from "./Blog";


export const Post: React.FC<PostData> = ({ title, body }) => {
  return (
    <>
      <h1>Post</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};
