import React from "react";
import RestaurantImg from "../../images/restaurantB.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-green/30 mt-20 mb-[13rem] md:mt-6 md:mb-10 flex flex-col flex-row md:flex-row-reverse h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-between px-6 md:px-12 lg:px-24 min-h-[160px]">
      {/* Right Content */}
      <div className="md:w-1/2 block relative text-center mb-6">
        <div className="relative md:absolute md:-bottom-[24rem] md:right-0 w-full mt-2 md:w-[44rem] rounded-md shadow-lg">
          <img
            src={RestaurantImg}
            alt="Restaurant"
            height="auto"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Left Content */}
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-green mb-4">
          Little Lemon
        </h1>
        <p className="text-lg md:text-xl mb-6">Chicago</p>
        <p className="text-sm md:text-base mb-6 text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to="/bookings"
          className="bg-yellow text-green px-6 py-3 font-semibold rounded hover:bg-green hover:text-yellow transition-all"
        >
          Reserve a Table
        </Link>
      </div>
    </section>
  );
};

export default Hero;
