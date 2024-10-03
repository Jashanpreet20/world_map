import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Applayout from "./components/layout/Applayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CountryDetails from "./components/ui/CountryDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
