import React from "react";
import Logo from "../images/icon/Logo-long.svg";

function Footer() {
  return (
    <footer className="bg-grey p-8 relative h-[300px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <img
          src={Logo}
          alt="Little Lemon Logo"
          className="w-3/4 h-34 mx-0 my-auto"
        />
        <div>
          <h3 className="text-2xl font-bold mb-2 text-green">Contact Info</h3>
          <ul>
            <li className="text-gray-600">Phone Number: (123) 456-7890</li>
            <li className="text-gray-600">Email: example@email.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-green">About</h3>
          <ul>
            <li className="text-gray-600">About Us</li>
            <li className="text-gray-600">Menu</li>
            <li className="text-gray-600">Reservations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-green">
            Social Media Links
          </h3>
          <ul>
            <li className="text-gray-600">Facebook</li>
            <li className="text-gray-600">Instagram</li>
            <li className="text-gray-600">Twitter</li>
          </ul>
        </div>
      </div>
      <div className="bg-green absolute left-0 bottom-0 w-full text-white font-body text-sm text-center p-2">
        © 2023 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
