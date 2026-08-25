const GITHUB_API = "https://api.github.com";

export const getGithubProjects = async () => {
  const response = await fetch(
    `${GITHUB_API}/users/Prabina1d/repos?sort=updated&per_page=10`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
};
