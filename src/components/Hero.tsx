import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png"

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex justify-between items-center bg-gradient-to-r from-black from-70% to-[#B48811]  text-white text-center p-10 px-36"
    >
      <div className="gap-x-5">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-[#B48811]">Neng Leangkhim</span>
        </h1>
        <p className="text-lg mt-2">Frontend Developer</p>
        <br />
        <motion.a
          href="#footer"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2  bg-white text-black rounded-lg hover:bg-[#B48811] hover:text-white"
        >
          Hire Me
        </motion.a>
      </div>
      {/* <div><img className="rounded-full shadow-2xl" width={400} src={profile}/></div> */}
    </motion.section>
  );
};

export default Hero;
