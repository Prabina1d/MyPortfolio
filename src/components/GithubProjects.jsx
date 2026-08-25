import { useEffect, useState } from "react";
import { getGithubProjects } from "../services/githubApi";

function GithubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getGithubProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p>FROM GITHUB</p>
        <h2>My Projects</h2>
      </div>

      {loading && <p>Loading projects...</p>}

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h3>{project.name}</h3>

            <p>
              {project.description ||
                "No description available."}
            </p>

            <div className="tech-list">
              <span>
                {project.language || "JavaScript"}
              </span>

              <span>⭐ {project.stargazers_count}</span>
            </div>

            <a
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GithubProjects;