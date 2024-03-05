import { ArrowUpTray } from "@medusajs/icons";
import React from "react";

const Button = () => {
  return (
    <button className="w-32 h-10  rounded-lg border inline-flex space-x-1  justify-center items-center text-primary focus:ring ">
      <span>
        <ArrowUpTray />
      </span>
      <span>Export</span>
    </button>
  );
};

export default Button;
