import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../Hooks/Switcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#9d8d8f] via-[#5a5560] to-[#46344e] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            activeClassName="text-[#DA7B93]"
            className="text-[#faed26] font-extrabold uppercase underline underline-offset-4 decoration-double text-2xl tracking-widest"
          >
            Mo
          </NavLink>

          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#EDDCD9] hover:text-[#31320c] focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:space-x-6">
            <NavLinkItem to="/" activeClassName="text-[#DA7B93]">
              Home
            </NavLinkItem>
            <NavLinkItem to="/about" activeClassName="text-[#DA7B93]">
              About Me
            </NavLinkItem>
            <NavLinkItem to="/stack" activeClassName="text-[#DA7B93]">
              Tech Stack
            </NavLinkItem>
            <NavLinkItem to="/project" activeClassName="text-[#DA7B93]">
              Projects
            </NavLinkItem>
            <NavLinkItem to="/contact" activeClassName="text-[#DA7B93]">
              Contact
            </NavLinkItem>
          </div>

          <div className="hidden lg:block">
            <Switcher />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-x-4 lg:hidden flex justify-between items-center">
            <NavLinkItem to="/" activeClassName="text-[#DA7B93]">
              Home
            </NavLinkItem>
            <NavLinkItem to="/about" activeClassName="text-[#DA7B93]">
              About
            </NavLinkItem>
            <NavLinkItem to="/stack" activeClassName="text-[#DA7B93]">
              Stack
            </NavLinkItem>
            <NavLinkItem to="/project" activeClassName="text-[#DA7B93]">
              Projects
            </NavLinkItem>
            <NavLinkItem to="/contact" activeClassName="text-[#DA7B93]">
              Contact
            </NavLinkItem>
            <div className="justify-end ">
              <Switcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinkItem = ({ to, activeClassName, children }) => (
  <NavLink
    to={to}
    activeClassName={activeClassName}
    className="text-[#EDDCD9] hover:text-white focus:text-[#31320c] focus:outline-none transition-colors duration-300 text-lg font-bold"
  >
    {children}
  </NavLink>
);

export default Navbar;
