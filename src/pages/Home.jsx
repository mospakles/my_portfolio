import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="h-full md:h-screen w-full text-black dark:text-white dark:bg-black bg-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="p-10">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold dark:text-[#faed26] p-6 uppercase text-center tracking-widest text-[#797327]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Motunrayo Odusina
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl font-semibold mb-6 uppercase text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Frontend Developer
        </motion.h2>
        <motion.p
          className="text-md md:text-lg text-center mb-8 mt-7 p-6 leading-loose w-full md:w-1/2 mx-auto"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Dedicated and skilled Frontend Developer with over three years of
          hands-on experience creating and implementing innovative web designs
          and user experiences. Proficient in HTML, CSS, JavaScript, and modern
          frontend frameworks. Adept at collaborating with cross-functional
          teams and clients to drive project success. Proven track record of
          delivering high-quality code on time and within budget.
        </motion.p>
        <motion.div
          className="w-full md:w-1/3 mx-auto text-center p-5 mb-8 uppercase text-2xl font-semibold border-2 border-dashed border-s-8 flex flex-col md:flex-row justify-around items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <h1 className="mb-6 md:mb-0"> Have a look at my Resume</h1>
          <a
            href="https://drive.google.com/file/d/1KEmS9J7R1A0kpYLFcS4wLsJbcGSu3oR5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExitToAppIcon fontSize="large" />
          </a>
        </motion.div>
        <motion.ul
          className="flex space-x-6 justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.li whileHover={{ scale: 1.2 }}>
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
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
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
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
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
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
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
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
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
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Home;
