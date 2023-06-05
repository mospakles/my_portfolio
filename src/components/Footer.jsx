import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#9d8d8f] via-[#5a5560] to-[#46344e] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Motunrayo Odusina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
