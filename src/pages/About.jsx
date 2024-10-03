import React from "react";

import CountryData from "../Api/CountryData.json";

export default function About() {
  return (
    <div>
      <div className="flex items-center justify-center w-full mx-auto mt-10">
        <h1 className="font-semibold text-white text-xl">
          Here are interesting facts
          <p className="text-center font-semibold text-white text-xl">
            we're proud of
          </p>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[960px] mx-auto p-4 mb-7">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CountryData.map((item) => {
            return (
              <div
                className="lg:w-[300px] h-full mt-3 px-3 py-3 border-[1px] border-gray-900 rounded-2xl text-white bg-gradient-to-tr to-slate-950 
               from-lightblack"
                key={item.id}
              >
                <p className="text-white text-xl">{item.countryName}</p>
                <p className="text-base text-gray-400">
                  capital{" "}
                  <span className="text-base text-white">{item.capital}</span>
                </p>
                <p className="text-base text-gray-400">
                  population{" "}
                  <span className="text-base text-white">
                    {item.population}
                  </span>
                </p>
                <p className="text-base text-gray-400">
                  interestingFact{" "}
                  <span className="text-base text-white">
                    {item.interestingFact}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
