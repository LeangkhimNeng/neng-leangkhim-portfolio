// import React, { useState, useEffect } from "react";

// const App: React.FC = () => {
// const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   setTimeout(() => {
//     setIsVisible(true); // Change visibility after 1 second
//   }, 100);
// }, []);

//   return (
//     <div>
//       <div
//         className="element"
//         style={{
//           opacity: isVisible ? 1 : 0,
//           backgroundColor: "lightblue",
//           height: "200px",
//           transition: "opacity 2s ease",
//         }}
//       >
//         <h1 style={{ color: "white", textAlign: "center" }}>Hello, World!</h1>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <AnimatePresence>
      <Navbar />
      <PageWrapper>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PageWrapper>
    </AnimatePresence>
  );
};

export default App;
