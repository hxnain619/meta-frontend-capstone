import React from "react";
import cartIcon from "../images/icon/basket.svg";
import { specialsData } from "./helper";

function Specials() {
  return (
    <div className="bg-gray-100 min-h-[550px] h-full p-8">
      <div className="container mx-auto my-0">
        <div className="flex flex-row align-center justify-between mb-6">
          <h2 className="font-bold mb-4 text-black">Specials</h2>
          <button className="my-auto mx-0 bg-yellow max-h-12 max-w-[160px] hover:bg-orange text-black font-bold py-2 px-4 rounded">
            Order online
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specialsData.map((special) => (
            <div key={special.id} className="bg-white rounded-lg p-4 shadow-md">
              <div
                className={`w-full h-[17rem] mb-2 shadow-md rounded-md ${
                  special.id === 1
                    ? "bg-salad"
                    : special.id === 2
                    ? "bg-bruchetta"
                    : "bg-dessert"
                } bg-cover bg-center`}
              ></div>
              <h3 className="text-xl font-bold mb-2 text-green">
                {special.title}
              </h3>
              <p className="text-gray-700 mb-2 text-orange">{special.price}</p>
              <p className="text-md text-gray-600 text-brown h-[100px] overflow-hidden">
                {special.description}
              </p>
              <button className="flex flex-row justify-between align-bottom gap-2 bg-yellow hover:bg-orange text-black font-bold py-2 px-4 rounded mt-4">
                <p>Order a delivery </p>{" "}
                <img width="20px" src={cartIcon} alt="cart" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specials;
