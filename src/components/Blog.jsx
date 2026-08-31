import blogs from "../data/blogs.json";

function Blog() {
  return (
    <section>
      <h1>MY BLOG</h1>

      {blogs.map((blog) => (
        <article key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <button>Read More →</button>
        </article>
      ))}
    </section>
  );
}

export default Blog;


