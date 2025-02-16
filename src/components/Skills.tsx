// import React from "react";

// const skills: string[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", "Node.js"];

// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="p-10 ml-[80px] md:ml-[250px]">
//       <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//         {skills.map((skill, index) => (
//           <div key={index} className="p-4 bg-gray-200 rounded-lg text-center">{skill}</div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

const Skills: React.FC = () => (
    <section className="bg-gray-700 py-12 px-8">
      <h2 className="text-3xl text-center font-semibold">Skills</h2>
      <div className="grid grid-cols-2 gap-8 mt-8 text-center">
        <div className="bg-gray-600 shadow-lg p-8 rounded-lg">React</div>
        <div className="bg-gray-600 shadow-lg p-8 rounded-lg">Node.js</div>
        <div className="bg-gray-600 shadow-lg p-8 rounded-lg">HTML</div>
        <div className="bg-gray-600 shadow-lg p-8 rounded-lg">CSS</div>
      </div>
    </section>
  );
  
  export default Skills;
  
