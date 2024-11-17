import React from "react";
import { testimonials } from "../../components/helper";

function Testimonials() {
  return (
    <div
      className="bg-black min-h-[550px] h-full p-8 pt-[8%]"
      role="region"
      aria-labelledby="testimonials-section"
    >
      <div className="container mx-auto my-auto">
        <h2 id="testimonials-section" className="text-yellow font-bold mb-4">
          Testimonials
        </h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md"
              role="article"
              aria-labelledby={`testimonial-${index}`}
              aria-describedby={`testimonial-desc-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 bg-green bg-salad bg-center"></div>
                <div>
                  <h3 id={`testimonial-${index}`} className="text-xl font-bold">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img
                        width="14px"
                        key={i}
                        src={require("../../images/icons8-star-50.png")}
                        alt="rating"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p
                id={`testimonial-desc-${index}`}
                className="text-gray-600"
                role="contentinfo"
              >
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
