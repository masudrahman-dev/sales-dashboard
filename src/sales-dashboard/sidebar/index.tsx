import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import { v4 } from "uuid";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center gap-3 pt-3 justify-center">
        <BeakerIcon className="h-6 w-6 text-blue-500" />
        <span className="text-primary">Dabang</span>
      </div>
      <div>
        {[...Array(20)].map((_, i) => {
          return (
            <p key={v4()} className="py-3 text-tine border p-2 w-full">
              <span className="">item {i + 1}</span>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
