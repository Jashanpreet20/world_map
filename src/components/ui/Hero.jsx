import React from "react";
import { FaArrowRight } from "react-icons/fa";

import Designer from "../../../public/Designer.jpeg";
export default function Hero() {
  return (
    <div className="lg:flex md:flex items-start justify-between mx-auto gap-5 lg:w-[960px] bg-black mt-16">
      <div className=" gap-5 lg:w-[450px] px-3 py-3">
        {/* first div  */}
        <div>
          <h1 className="text-white lg:text-3xl font-bold">
            Explore the World,one{" "}
            <span className="text-white lg:text-3xl font-bold">
              Country at a time
            </span>
          </h1>
          <p className="text-white mt-4 mb-4">
            Discover the history, culture, and beauty of every nation. Sort
            search and filter through countries to find the details you need.
          </p>

          <button
            className="flex items-center justify-center lg:gap-x-2 mt-6 md:px-7 md:py-3 lg:px-7 lg:py-3 text-white border-white border-2 rounded-full
            hover:shadow-md duration-300 transition-all hover:shadow-blue-400
          "
          >
            start exploring <FaArrowRight />
          </button>
        </div>
      </div>
      {/* second div for image */}
      <div>
        <img
          src={Designer}
          alt="world map image"
          className="lg:w-[400px] lg:h-[400px] md:w-[200px] md:h-[200px] sm-w-[100px] sm:h-[100px] rounded-full p-3"
        />
      </div>
    </div>
  );
}
