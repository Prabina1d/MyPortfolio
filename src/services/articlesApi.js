export const getArticles = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_DEV_API}/articles?username=${import.meta.env.VITE_DEV_USERNAME}&per_page=6`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
};