import { motion } from "framer-motion";
import profile from "../assets/aynal.jpg";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 overflow-hidden">

      {/* Profile Picture Animation */}
      <motion.img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Name Animation */}
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hi, I’m <span className="text-yellow-300">Aynal</span> 👋
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-xl mb-6 max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        A passionate <span className="font-semibold">React & Django Developer</span> from Bangladesh — 
        I love building modern, fast, and elegant web applications.
      </motion.p>

      {/* Button Animation */}
      <motion.a
        href="#projects"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;
