import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center p-10"
    >
      <h1 className="text-4xl font-bold">
        Hi, I'm <span className="text-yellow-300">Your Name</span>
      </h1>
      <p className="text-lg mt-2">Web Developer | Designer | Freelancer</p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
      >
        Hire Me
      </motion.a>
    </motion.section>
  );
};

export default Hero;
