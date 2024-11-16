import React from "react";
import RestaurantImg from "../images/restaurantB.jpg";

const Hero = () => {
  return (
    <section className="bg-grey text-black h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-between px-6 md:px-12 lg:px-24 min-h-[160px]">
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
        <button className="bg-yellow text-green px-6 py-3 font-semibold rounded hover:bg-green hover:text-yellow transition-all">
          Reserve a Table
        </button>
      </div>

      {/* Right Content */}
      <div className="w-1/2 block relative">
        <div className="absolute -bottom-[24rem] right-0 w-[44rem] rounded-md shadow-lg">
          <img
            src={RestaurantImg}
            alt="Restaurant"
            height="auto"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
