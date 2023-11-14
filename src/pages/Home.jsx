import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
  return (
    <div className="h-screen w-full text-black dark:text-white dark:bg-black bg-gray-300">
      <div className="p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold dark:text-[#faed26] p-6 uppercase text-center tracking-widest text-[#797327]">
          Motunrayo Odusina
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 uppercase text-center">
          Frontend Developer
        </h2>
        <p className="text-md md:text-lg text-center mb-8 mt-7 p-6 leading-loose w-full md:w-1/2 mx-auto">
          Dedicated and skilled Frontend Developer with two years of hands-on
          experience creating and implementing innovative web designs and user
          experiences. Proficient in HTML, CSS, JavaScript, and modern frontend
          frameworks. Adept at collaborating with cross-functional teams and
          clients to drive project success. Proven track record of delivering
          high-quality code on time and within budget.
        </p>
        <div className="w-full md:w-1/3 mx-auto text-center p-5 mb-8 uppercase text-2xl font-semibold border-2 border-dashed border-s-8 flex flex-col md:flex-row justify-around items-center">
          <h1 className="mb-6 md:mb-0"> Have a look at my Resume</h1>
          <a
            href="https://drive.google.com/file/d/1YaHAA2THuryrnwBpenHN8HVTSnUe5tKs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExitToAppIcon fontSize="large" />
          </a>
        </div>
        <ul className="flex space-x-6 justify-center p-4">
          <li>
            <Tooltip title="Whatsapp">
              <IconButton
                href="https://wa.link/0lgbum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Github">
              <IconButton
                href="https://github.com/mospakles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Twitter">
              <IconButton
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/motunrayo-odusina-21a290168/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            {" "}
            <Tooltip title="Send me a mail!">
              <IconButton
                href="mailto:motunrayodusina@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <EmailIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
