/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/icon/Logo.svg";
import { FooterLinks } from "./helper";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-grey p-8 relative h-[300px]"
      aria-label="Footer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <img
          src={Logo}
          alt="Little Lemon Logo"
          className="w-3/4 h-34 mx-0 my-auto"
          aria-hidden="true"
        />
        {FooterLinks.map((linkGroup) => (
          <div key={linkGroup.title}>
            <h3
              className="text-2xl font-bold mb-2 text-green"
              data-testid="heading"
              aria-label={`Footer Section: ${linkGroup.title}`}
            >
              {linkGroup.title}
            </h3>
            <ul aria-labelledby={`heading-${linkGroup.title}`}>
              {linkGroup.items.map((item) => (
                <li key={item} className="text-gray-600">
                  <a href="#" aria-label={`Navigate to ${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="bg-green absolute left-0 bottom-0 w-full text-white font-body text-sm text-center p-2"
        role="contentinfo"
        aria-label="Copyright Notice"
      >
        © 2023 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
