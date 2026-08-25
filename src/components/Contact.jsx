function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <form
        className="contact-form"
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />

        <button
          type="submit"
          className="btn primary"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;