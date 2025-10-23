import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-6">

      {/* Heading Animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        I'm a React and Django developer who loves building modern web apps, 
        AI-integrated tools, and SaaS platforms. I enjoy turning ideas into 
        reality with clean, functional code.
      </motion.p>

      {/* Optional Button or CTA */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}

export default About;
