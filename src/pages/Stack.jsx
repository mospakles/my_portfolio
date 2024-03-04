import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Vue.js",
  "Unit Testing",
  "API Integration",
  "Version Control",
  "Responsive Design",
  "WordPress",
  "Redux",
  "GraphQL",
  // Add more skills as needed
];

const Skills = () => {
  return (
    <motion.div
      className="h-full md:h-screen w-full text-black dark:text-white dark:bg-black bg-gray-200 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <motion.h2
          className="text-xl md:text-3xl font-extrabold mb-10 p-5 border-2 border-dashed flex md:w-1/4 mx-auto text-center border-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Tech Stacks
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center transform transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-[#faed26] hover:shadow-lg text-lg font-bold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-900">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
