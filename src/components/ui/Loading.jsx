import React from "react";
import { Spinner } from "@material-tailwind/react";
export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full mx-auto">
      <Spinner color="blue" />
    </div>
  );
}
