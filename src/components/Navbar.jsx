import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLong from "../images/icon/Logo.svg";
import Hamburger from "../images/icon/icon_hamburger_menu.svg";
import { navRoutes } from "./helper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-green/50 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-yellow">
          <Link href="/">
            <img src={LogoLong} alt="Little lemon logo" />
          </Link>
        </h1>
        <button
          type="button"
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:text-yellow-500"
        >
          <img src={Hamburger} alt="hamburger icon" />
        </button>

        <ul className="hidden md:flex space-x-4 text-white">
          {navRoutes.map((route) => (
            <li
              key={route.title}
              className="hover:text-orange border-b-2 border-transparent hover:border-orange"
            >
              <Link
                to={route.path}
                className="font-heading hover:text-yellow-500"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for mobile devices */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-yellow-500"
            >
              Close
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center h-full text-white space-y-6">
            {navRoutes.map((route) => (
              <li key={route.title}>
                <Link
                  to={route.path}
                  className="text-xl hover:text-yellow-500"
                  onClick={toggleSidebar}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
