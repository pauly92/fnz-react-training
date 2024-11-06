import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient({});

export const ReactQueryExample = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <button onClick={() => setCount(count === 1 ? 2 : 1)}>
          PostID: {count}
        </button>
        <FetchExample postID={count} />
      </QueryClientProvider>
    </>
  );
};

const Example = ({ postID }: { postID: number }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["tanStackQuery", postID],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(
        (res) => res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <strong>👀 {data?.title}</strong> <strong>✨ {data?.body}</strong>{" "}
      <strong>🍴 {data?.id}</strong>
    </div>
  );
};

type PostData = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

const FetchExample = ({ postID }: { postID: number }) => {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.log("Error:", error);
        }
      });
  }, [postID]);

  return (
    <div>
      <strong>👀 {data?.title}</strong> <strong>✨ {data?.body}</strong>{" "}
      <strong>🍴 {data?.id}</strong>
    </div>
  );
};
