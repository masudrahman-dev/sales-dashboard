import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import clx from "../../utils/clx";

const Sidebar = () => {
  const style = " py-3 pl-3 hover:bg-primary hover:text-white block w-full";
  return (
    <>
      <div className="flex items-center  pt-3 justify-center border-r ">
        <BeakerIcon className="h-6 w-6 text-blue-500" />
        <span className="text-primary font-bold text-xl">Dabang</span>
      </div>
      <ul className="border-r flex flex-col gap-3">
        {[...Array(10)].map((_, i) => {
          return (
            <NavLink
              to={`/a/${i}`}
              key={v4()}
              className={({ isActive }) =>
                [isActive ? "text-rose-700 py-3 pl-3" : style].join(" ")
              }
            >
              {/* {classNameFn}  */}
              item {i}
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
