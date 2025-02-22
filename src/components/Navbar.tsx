import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.nav
      className={`fixed top-0 w-full p-4 flex justify-between items-center transition-all 
        ${
        darkMode ? "bg-[#0D1117] text-white" : "bg-[#F9FAFB] text-black"
      }
        `}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold dark:text-red-400">My Portfolio</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </motion.nav>
  );
};

export default Navbar;
