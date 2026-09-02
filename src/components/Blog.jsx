import blogs from "../../blogs.json";

function Blog() {
  return (
    <section id= "blog" className="section">
       <div className="section-heading">
      <h1>MY BLOG</h1>
         </div>
   

    <div className="projects-grid">
      {blogs.map((blog) => (
        <article className="project-card" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <button>Read More. →</button>
        </article>
      ))}
     </div>
    </section>
  );
}

export default Blog;


