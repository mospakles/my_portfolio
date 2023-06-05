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
    <div className="h-screen w-full text-black dark:text-white dark:bg-black bg-white">
      <div className="p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold dark:text-[#faed26] p-6 uppercase text-center tracking-widest">
          Motunrayo Odusina
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 uppercase text-center">
          Frontend Developer
        </h2>
        <p className="text-md md:text-lg text-center mb-8 mt-7 p-6 leading-loose w-full md:w-1/2 mx-auto">
          A result-driven Frontend Developer with 2 years of experience in
          developing and maintaining complex web applications using various
          frontend technologies. Proficient in Nextjs, Angularjs, React, and
          WordPress. Skilled in HTML, CSS, JavaScript, TypeScript, jQuery, and
          Bootstrap.
        </p>
        <div className="w-full md:w-1/3 mx-auto text-center p-5 mb-6 uppercase text-2xl font-semibold border-2 border-dashed flex flex-col md:flex-row justify-around items-center">
          <h1 className="mb-4 md:mb-0"> Have a look at my Resume</h1>
          <a
            href="https://drive.google.com/file/d/1SSansWxp3skKHOWKDiqfs31wUjIQmGrQ/view?usp=drive_link"
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
