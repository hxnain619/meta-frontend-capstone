import React from "react";
import RestaurantImg from "../../images/restaurantB.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-green/30 mt-20 mb-[13rem] md:mt-6 md:mb-10 flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-24"
      role="region"
      aria-labelledby="hero-section"
    >
      {/* Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        role="img"
        aria-label="Restaurant interior"
      >
        <img
          src={RestaurantImg}
          alt="Restaurant"
          className="rounded-md shadow-lg max-w-full md:max-w-lg"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
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
