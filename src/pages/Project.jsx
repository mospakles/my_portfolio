import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "iqPAY",
    description:
      "A forex application majorly for businesses, for trading different currencies with other businesses",
    image: "/images/iqpay.png",
    demoLink: "https://iqpay-v2.vercel.app/",
    framework: "Next.js",
  },
  {
    title: "GranulaX Landing Page",
    description:
      "A landing page for granula X, a startup for tokenization for wealth creation",
    image: "/images/granulax.png",
    demoLink: "https://granulax.com/",
    framework: "Next.js",
  },
  // {
  //   title: "Waist beads by Nora",
  //   description: "An ecommerce page for selling waistbeads",
  //   image: "/images/waistbead.png",
  //   demoLink: "https://www.waistbeadsbynora.com/",
  //   framework: "React",
  // },
  {
    title: "Todo Application",
    description: "An application that helps you organize your tasks",
    image: "/images/todo.png",
    demoLink: "https://legendary-croissant-056f58.netlify.app/",
    framework: "Next.js",
  },
  {
    title: "Weather Forecast App",
    description:
      "A local weather app that allows you to track the current and future weather of cities of your choosing.",
    image: "/images/vue.png",
    demoLink: "https://vueeweather.netlify.app/",
    framework: "Vue Js",
  },
  {
    title: "Coworkstyle",
    description:
      "Coworkstyle official website for booking work spaces and offices",
    image: "/images/cowork.png",
    demoLink: "https://www.coworkstyle.com/",
    framework: "WordPress",
  },
  {
    title: "Crane Schools",
    description: "Crane School official website",
    image: "/images/crane.png",
    demoLink: "https://craneschoolsng.com/",
    framework: "WordPress",
  },
];

const Projects = () => {
  return (
    <motion.div
      className="h-full w-full p-10 text-black dark:text-white dark:bg-black bg-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold mb-2 p-3 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        {projects.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-2 p-2"></h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black dark:text-white dark:bg-black bg-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-auto w-full object-contain"
                  />
                  <div className="p-4">
                    <h3 className="text-gray-700 text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:opacity-80 text-lg font-bold"
                      >
                        View Demo
                      </a>
                      <div className="text-blue-800 hover:opacity-80 font-bold text-lg text-center mb-3 italic">
                        {project.framework}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
