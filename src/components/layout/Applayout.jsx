import React from "react";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";
export default function Applayout() {
  return (
    <div className="bg-black w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
