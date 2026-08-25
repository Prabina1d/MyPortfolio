const BLOG_API =
  "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  const response = await fetch(
    `${BLOG_API}/posts?_limit=6`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};