import React, { useState } from "react";
import { motion } from "framer-motion";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: open ? 250 : 80 }}
      className="h-screen bg-gray-900 text-white fixed flex flex-col items-center p-4 transition-all"
    >
      <button onClick={() => setOpen(!open)} className="mb-6">
        {open ? "➖" : "➕"}
      </button>
      <ul className="space-y-4">
        <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
