import React from "react";
import { testimonials } from "./helper";

function Testimonials() {
  return (
    <div className="bg-brown min-h-[550px] h-full p-8 pt-[8%]">
      <div className="container mx-auto my-auto">
        <h2 className=" font-bold mb-4">Testimonials</h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-green bg-salad bg-center"></div>
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img
                        width="14px"
                        key={i}
                        src={require("../images/icons8-star-50.png")}
                        alt="rating"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
