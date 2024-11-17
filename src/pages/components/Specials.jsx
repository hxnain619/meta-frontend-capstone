/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import cartIcon from "../../images/icon/basket.svg";
import { specialsData } from "../../components/helper";
import clsx from "clsx"; // You can install clsx for conditional class handling

function Specials() {
  return (
    <div className="bg-gray min-h-[550px] h-full p-8">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between mb-6">
          <h2 className="font-bold mb-4 text-orange">Specials</h2>
          <button
            aria-label="Order online"
            className="my-auto bg-yellow hover:bg-orange text-black font-bold py-2 px-4 rounded max-w-[160px]"
          >
            Order online
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
          {specialsData.map((special) => (
            <div
              key={special.id}
              className="bg-white rounded-lg p-4 shadow-md"
              role="listitem"
              aria-labelledby={`special-title-${special.id}`}
              aria-describedby={`special-description-${special.id}`}
            >
              {/* Image Section */}
              <div
                className={clsx(
                  "w-full h-[17rem] mb-2 shadow-md rounded-md bg-cover bg-center",
                  {
                    "bg-salad": special.id === 1,
                    "bg-bruchetta": special.id === 2,
                    "bg-dessert": special.id === 3,
                  }
                )}
                alt={`${special.title} image`}
                role="img"
                aria-label={`Image of ${special.title}`}
              ></div>

              {/* Special Title and Description */}
              <h3
                id={`special-title-${special.id}`}
                className="text-xl font-bold mb-2 text-green"
              >
                {special.title}
              </h3>
              <p className="text-gray-700 mb-2 text-orange">{special.price}</p>
              <p
                id={`special-description-${special.id}`}
                className="text-md text-gray-600 text-brown h-[100px] overflow-hidden"
              >
                {special.description}
              </p>

              {/* Order Button */}
              <button
                aria-label="Order delivery"
                className="flex items-center justify-between gap-2 bg-yellow hover:bg-orange text-black font-bold py-2 px-4 rounded mt-4"
                role="button"
              >
                <span>Order a delivery</span>
                <img width="20px" src={cartIcon} alt="Cart icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specials;
