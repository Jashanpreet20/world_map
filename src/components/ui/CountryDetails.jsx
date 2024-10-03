import React, { useTransition, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountry } from "../../Api/PostApi";
import Loading from "./Loading";

export default function CountryDetails() {
  const params = useParams();

  const [isPending, startTranstion] = useTransition();

  const [country, setCoutnry] = useState([]);

  useEffect(() => {
    startTranstion(async () => {
      const res = await getCountry(params.id);

      setCoutnry(res.data);

      console.log(res.data);
    });
  }, []);

  if (isPending)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="lg:w-[960px] md:flex lg:flex mx-auto justify-between  gap-3 min-h-screen">
      <NavLink to="/country">
        <button className="text-white text-balance px-3 py-2 border-2 border-white rounded-full mt-5 hover:shadow-md shadow-blue-500">
          Go Back
        </button>
      </NavLink>
      {country.map((item) => {
        return (
          <div
            key={item.name.common}
            className="md:flex items-start px-4 py-4 mt-14 justify-between gap-5 mx-auto"
          >
            <div className="w-[300px] mt-11 ">
              <img
                src={item.flags.svg}
                alt="image text"
                style={{ height: 200, width: 250 }}
              />
            </div>
            <div className="w-[500px] mt-11 flex flex-col items-start gap-3">
              <p className="text-xl text-white font-bold ">
                {item.name.common}
              </p>
              <p className="lg:text-base text-gray-400">
                Native Name{" "}
                <span className="lg:text-base text-white">
                  {Object.keys(item.name.nativeName)
                    .map((key) => item.name.nativeName[key].common)
                    .join(", ")}
                </span>
              </p>
              <p className="text-base text-gray-400">
                Population:
                <span className="text-balance text-white">
                  {item.population.toLocaleString()}
                </span>
              </p>
              <p className="text-base text-gray-400">
                Region{" "}
                <span className="text-base text-white">{item.region}</span>
              </p>

              <p className="text-base text-gray-400">
                Capital{" "}
                <span className="text-base text-white">{item.capital}</span>
              </p>

              <p className="text-base text-gray-400">
                Currencies{" "}
                <span className="text-base text-white">
                  {Object.keys(item.currencies)
                    .map((curritem) => item.currencies[curritem].name)
                    .join(", ")}
                </span>
              </p>
              <p className="text-base text-gray-400">
                Language{" "}
                <span className="text-base text-white">
                  {Object.keys(item.languages)
                    .map((curr) => item.languages[curr])
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
