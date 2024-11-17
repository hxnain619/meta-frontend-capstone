import React from "react";
import RestaurantImg from "../../images/restaurantB.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-green/50 mt-0 mb-[13rem] md:m-0 pt-12 mb-0 md:mb-10 flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-24"
      aria-labelledby="hero-section"
    >
      {/* Image Section */}
      <div
        className="relative w-full md:w-1/2 flex justify-center min-h-[20em]"
        role="img"
        aria-label="Restaurant interior"
      >
        <div className="mt-10 md:mt-0 md:absolute md:top-16 md:right-0">
          <img
            src={RestaurantImg}
            alt="Restaurant"
            className="rounded-md shadow-lg min-h-60 max-w-full md:max-w-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full mb-5 md:w-1/2 text-center md:text-left">
        <h1
          id="hero-section"
          className="text-4xl md:text-5xl font-bold text-green mb-4"
        >
          Little Lemon
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">Chicago</p>
        <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to="/bookings"
          className="inline-block bg-yellow text-green px-6 py-3 font-semibold rounded hover:bg-green hover:text-yellow transition-all"
          aria-label="Reserve a table"
        >
          Reserve a Table
        </Link>
      </div>
    </section>
  );
};

export default Hero;
