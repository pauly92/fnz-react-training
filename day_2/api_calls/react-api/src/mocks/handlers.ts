import { http, HttpResponse } from "msw";

const posts = [
  {
    userId: 1,
    id: 1,
    title: "hello MSW",
    body: "body MSW",
  },
  {
    userId: 1,
    id: 2,
    title: "hello MSW With ID 2",
    body: "body MSW With ID 2",
  },
];

export const handlers = [
  // An example handler
  http.get("/user", () => {
    return HttpResponse.json({ name: "John Maverick" });
  }),
  http.get("https://jsonplaceholder.typicode.com/posts/*", ({ params }) => {
    const post = posts.find((post) => post.id === Number(params[0]));
    return HttpResponse.json(post);
  }),
];

