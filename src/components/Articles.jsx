import { useEffect, useState } from "react";
import { getArticles } from "../services/articlesApi";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadArticles();
  }, []);

  return (
    <section className="section">
      <div className="section-heading">
        <p>DEVELOPER CONTENT</p>
        <h2>Articles</h2>
      </div>

      <div className="projects-grid">
        {articles.map((article) => (
          <article
            className="project-card"
            key={article.id}
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                className="article-image"
              />
            )}

            <h3>{article.title}</h3>

            <p>{article.description}</p>

            <div className="tech-list">
              {article.tag_list
                ?.slice(0, 3)
                .map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
            </div>

            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Read Article →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;