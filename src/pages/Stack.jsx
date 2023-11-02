import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Angular",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "BootStrap",
  "Material-UI",
  "Version Control",
  "Responsive Design",
  "WordPress",
  "Redux",
  "GraphQL",
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="h-full md:h-screen w-full text-black dark:text-white dark:bg-black bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl md:text-3xl font-extrabold mb-10 p-5 border-2 border-dashed flex w-1/4 mx-auto border-white">
          Tech Stacks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center transform transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-[#faed26] hover:shadow-lg text-lg font-bold"
            >
              <span className="text-gray-900">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
