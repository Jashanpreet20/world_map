import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 3,
      link: "country",
    },
    {
      id: 4,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" w-full bg-navbar mx-auto py-4">
      {/* heading  */}

      <div className="max-w-[900px] flex mx-auto md:flex sm:flex lg:flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-white">WorldAtlas</h1>
        </div>

        <nav>
          <ul className="hidden md:flex gap-x-6 text-white">
            <li className="hover:scale-125 hover:border-b-2 inline-block border-b-blue-700">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:scale-125 hover:border-b-2 inline-block border-b-blue-700">
              <NavLink to="country">Country</NavLink>
            </li>
            <li className="hover:scale-125 hover:border-b-2 inline-block border-b-blue-700">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:scale-125 hover:border-b-2 inline-block border-b-blue-700">
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 text-gray-500 md:hidden flex left-0"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div
            className="flex flex-col items-center justify-center absolute w-full
       h-screen top-0 left-0 text-white bg-gradient-to-tr to-slate-950 
               from-lightblack"
          >
            <a href="/" className="block px-2 py-1 text-white">
              Home
            </a>
            <a href="/about" className="block px-2 py-1 text-white">
              About
            </a>
            <a href="/country" className="block px-2 py-1 text-white">
              Country
            </a>
            <a href="/contact" className="block px-2 py-1 text-white">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
