import React from "react";
import { FiLock } from "react-icons/fi";
import { BsUnlock } from "react-icons/bs";

const projects = [
  {
    title: "Fxiq",
    description:
      "A forex application majorly for businesses, for trading different currencies with other businesses",
    image: "/images/fxiq.png",
    demoLink: "https://example.com/project1",
    framework: "React",
  },
  {
    title: "Forex Exchange Admin Page",
    description:
      "An admin page that serves as the backend for the inputting real time exchange rates on a daily basis.",
    image: "/images/admin.png",
    demoLink: "https://example.com/project2",
    framework: "Next.js",
    isNDA: true,
  },
  {
    title: "Marginal Fields Landing Page",
    description:
      "A bidding platform that allows designated set of people to bid for highly rated resources",
    image: "/images/marginal.png",
    demoLink: "https://example.com/project2",
    framework: "Angular",
    isNDA: true,
  },
  {
    title: "Forex Exchange Rate Project",
    description:
      "A web application that provides a real-time exchange rate for all currencies",
    image: "/images/exchange.png",
    demoLink: "https://fx-exchange-lob8wkr5k-fxexchange.vercel.app/",
    framework: "Next.js",
  },
  {
    title: "Fxiq Landing Page",
    description:
      "A web application that provides a real-time exchange rate for all currencies",
    image: "/images/fxiqlanding.png",
    demoLink: "https://fxiq.ng/",
    framework: "React",
  },
  {
    title: "Todo Application",
    description: "An application that helps you organize your tasks",
    image: "/images/todo.png",
    demoLink: "https://legendary-croissant-056f58.netlify.app/",
    framework: "Next.js",
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
  // const ndaProjects = projects.filter((project) => project.isNDA);
  const publicProjects = projects.filter((project) => !project.isNDA);

  return (
    <div className="h-full w-full p-10 text-black dark:text-white dark:bg-black bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-2 p-3 text-center">
          My Projects
        </h2>
        {projects.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-2 p-2">
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black dark:text-white dark:bg-black bg-gray-200">
              {publicProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border-2"
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
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
