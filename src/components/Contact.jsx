function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6">Let’s build something amazing together!</p>
      <a
        href="mailto:aynal@example.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}

export default Contact;
