function Projects() {
  const projects = [
    {
      title: "AI Code Review System",
      desc: "An AI-powered platform to analyze and improve code quality.",
      link: "#",
    },
    {
      title: "E-learning Platform",
      desc: "Online course website with quiz, progress tracking & payments.",
      link: "#",
    },
    {
      title: "Multi-Tenant CRM",
      desc: "SaaS-based CRM for managing clients & invoices.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <a href={p.link} className="text-blue-600 font-medium hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
