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
    isNDA: true,
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
    title: "Marginal Fields Login Page",
    description:
      "A private application for all vetted bidders for trade and dispensing sensitive information",
    image: "/images/client.png",
    demoLink: "https://example.com/project2",
    framework: "Angular",
    isNDA: true,
  },
  {
    title: "Iq Pay",
    description:
      "A forex application majorly for individuals, for trading different currencies with other people",
    image: "/images/iqpay.png",
    demoLink: "https://example.com/project2",
    framework: "Next.js",
    isNDA: true,
  },
  {
    title: "Forex Exchange Rate Project",
    description:
      "A web application that provides a real-time exchange rate for all currencies",
    image: "/images/exchange.png",
    demoLink: "https://fx-exchange-lob8wkr5k-fxexchange.vercel.app/",
    framework: "Next.js",
    isNDA: false,
  },
  {
    title: "Fxiq Landing Page",
    description:
      "A web application that provides a real-time exchange rate for all currencies",
    image: "/images/fxiqlanding.png",
    demoLink: "https://fxiq.ng/",
    framework: "React",
    isNDA: false,
  },
  {
    title: "Google-Clone",
    description: "A demo google-clone",
    image: "/images/google.png",
    demoLink: "https://google-clone-thecreativist.vercel.app/",
    framework: "Next.js",
    isNDA: false,
  },
];

const Projects = () => {
  const ndaProjects = projects.filter((project) => project.isNDA);
  const publicProjects = projects.filter((project) => !project.isNDA);

  return (
    <div className="h-full w-full p-10 text-black dark:text-white dark:bg-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-2 p-3 text-center">
          My Projects
        </h2>
        {ndaProjects.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-2 p-2">
              <div className="flex items-center justify-center text-red-600">
                <FiLock className="mr-2" />
                <p className="text-lg">
                  These projects are subject to a non-disclosure agreement.
                </p>
              </div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black dark:text-white dark:bg-black bg-white mb-3">
              {ndaProjects.map((project, index) => (
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
                  </div>
                  <div className="text-blue-800 hover:opacity-80 font-bold text-lg text-center mb-3 italic">
                    {project.framework}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {publicProjects.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-2 p-2">
              <div className="flex items-center justify-center text-black dark:text-white dark:bg-black bg-white">
                <BsUnlock className="mr-2" />
                <p className="text-lg">Public Projects</p>
              </div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black dark:text-white dark:bg-black bg-white">
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
