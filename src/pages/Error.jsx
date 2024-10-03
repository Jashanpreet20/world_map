import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <h1>Error page</h1>
      <button className="px-2 py-2 text-white font-semibold bg-blue-700 rounded-md">
        <NavLink to="/">Go home</NavLink>
      </button>
    </div>
  );
}
