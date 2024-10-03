import React, { useEffect, useState, useTransition } from "react";
import { getData } from "../Api/PostApi";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SearchFilter from "../components/ui/SearchFilter";
import Loading from "../components/ui/Loading";

export default function Country() {
  const [isPending, startTranstion] = useTransition();

  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // console.log(search, filter);

  useEffect(() => {
    startTranstion(async () => {
      const res = await getData();

      setCountries(res.data);
    });
  }, []);

  const filterHanlder = (country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };

  const regionHanlder = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountry = countries.filter(
    (country) => filterHanlder(country) && regionHanlder(country)
  );

  if (isPending)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center w-full  max-w-[960px] mx-auto p-4 mb-7">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mt-8">
        {filterCountry.map((item) => {
          const name =
            item.name.common.length > 15
              ? item.name.common.slice(0, 15) + "..."
              : item.name.common;

          return (
            <div
              className="w-[250px] h-full mt-3 px-3 py-3 border-[1px] border-gray-900 rounded-2xl text-white bg-gradient-to-tr to-slate-950 
               from-lightblack"
              key={item.name.common}
            >
              <div className="flex items-center justify-center w-full mx-auto">
                <img
                  src={item.flags.svg}
                  alt="image text"
                  style={{ height: 120, width: 250 }}
                />
              </div>

              <p className="text-xl text-white mt-2">{name}</p>
              <p className="text-base text-gray-400">
                Population:
                <span className="text-base text-white">
                  {item.population.toLocaleString()}
                </span>
              </p>
              <p className="text-base text-gray-400">
                Region
                <span className="text-base text-white">{item.region}</span>
              </p>
              <p className="text-base text-gray-400">
                Captial:
                <span className="text-base text-white">{item.capital[0]}</span>
              </p>
              <NavLink to={`/country/${item.name.common}`}>
                <button
                  className="flex text-balance items-center bg-gradient-to-tr to-slate-950 
               from-lightblack justify-center gap-x-2 mt-6  px-7 py-2  text-white
                   border-white border-2 rounded-full
            hover:shadow-md duration-300 transition-all hover:shadow-blue-400
          "
                >
                  Read More <FaArrowRight />
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
