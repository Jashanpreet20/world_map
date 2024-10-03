import React from "react";

export default function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const filterChangeHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sort = [...countries].sort((a, b) => {
      if (value === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });

    setCountries(sort);
  };

  return (
    <div className="md:flex lg:flex items-center w-full justify-between gap-y-5 lg:gap-4">
      {/* search */}
      <div>
        <input
          className={`px-2 py-2 rounded-3xl outline-none bg-transparent text-white text-balance border-2 border-white
           
          }`}
          type="text"
          placeholder="Enter Country Name"
          autoComplete="false"
          value={search}
          onChange={handleInputChange}
        />
      </div>
      {/* asc dsc */}
      <div className="lg:flex md:flex items-center justify-center mt-4 mb-4 w-full md:gap-x-6 lg:gap-x-11">
        <button
          onClick={() => sortCountries("asc")}
          className="p-2 text-white   rounded-2xl px-5 py-2 border-2 border-white text-balance"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries("dsc")}
          className="p-2 text-white rounded-2xl px-5 py-2 border-2 border-white text-balance"
        >
          Dsc
        </button>
      </div>
      {/* filter */}
      <div>
        <select
          className="p-2 px-3 bg-black text-white border-white border-2 rounded-3xl"
          value={filter}
          onChange={filterChangeHandler}
        >
          <option className="p-2  text-white" value="all">
            All
          </option>
          <option className="p-2  text-white" value="Africa">
            Africa
          </option>
          <option className="p-2  text-white" value="America">
            America
          </option>
          <option className="p-2  text-white" value="Asia">
            Asia
          </option>
          <option className="p-2  text-white" value="Europe">
            Europe
          </option>
          <option className="p-2  text-white" value="Ocenia">
            Ocenia
          </option>
        </select>
      </div>
    </div>
  );
}
