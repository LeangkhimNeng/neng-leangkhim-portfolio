import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", description: "Built with React and Tailwind." },
  { title: "E-commerce Store", description: "A full-stack e-commerce platform." },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <motion.div
        className="grid md:grid-cols-2 gap-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;


  
