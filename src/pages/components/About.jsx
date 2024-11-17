import React from "react";
import MarioA from "../../images/MarioA.jpg";
import MarioB from "../../images/MarioB.jpg";

function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="bg-orange/50 p-8 pt-10 min-h-[550px]"
    >
      <div className="container mx-auto my-0">
        <h2 id="about-title" className="font-bold mb-4">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article>
            <h3 className="font-bold mb-2">Little Lemon</h3>
            <h4 className="text-gray-600">Chicago</h4>
            <p className="text-gray-600 max-w-[90%] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p className="text-gray-600 max-w-[90%] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
          <div className="relative">
            <img
              src={MarioA}
              alt="Mario and Adrian enjoying a meal"
              className="max-w-[32rem] w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={MarioB}
              alt="Mario and Adrian preparing food"
              className="absolute max-w-[32rem] bottom-14 -right-1 z-2 w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
