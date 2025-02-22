import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import profile from "../assets/profile.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      id="header"
      className={`fixed top-0 w-full flex justify-between items-center transition-all  duration-300 p-4 px-20 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent "
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold text-[#B48811] gap-4  flex justify-baseline text-center items-center">
        {/* <img className="rounded-full shadow-2xl bg-amber-100" width={80} src={profile} /> */}
        My Portfolio
      </h1>
      <div className="justify-around gap-6 hidden md:flex text-white text-lg">
        <a href="#header">Home</a>
        <a href="#">CV</a>
        <a href="#">Project</a>
        <a href="#footer">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Header;
