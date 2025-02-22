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
import Header from "./components/Header";
import PageWrapper from "./components/PageWrapper";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <AnimatePresence>
      <PageWrapper >
        <Header/>
        <Hero />
        <Skills />
        <Projects />   
        <Footer />
      </PageWrapper>
    </AnimatePresence>
  );
};

export default App;
