import { useEffect, useState } from "react";
import { getPosts } from "../services/blogApi";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadPosts();
  }, []);

  return (
    <section id="blog" className="section">
      <div className="section-heading">
        <p>MY BLOG</p>
        <h2>Latest Posts</h2>
      </div>

      <div className="projects-grid">
        {posts.map((post) => (
          <article className="project-card" key={post.id}>
            <h3>{post.title}</h3>

            <p>{post.body}</p>

            <a
              href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;