import { TvIcon } from "@heroicons/react/24/outline";
import React from "react";

const SidebarCard = () => {
  return (
    <div className="mx-12 mt-20 shadow-lg  text-white rounded-lg relative ">
      <div className="w-full  overflow-hidden bg-primary   rounded-lg  h-52 ">
        <div className="absolute bg-[#6366f1ab] top-1/2 left-1/2 w-full h-full rounded-lg p-6  -translate-x-1/2 -translate-y-1/2 z-50   ">
          <div className="flex flex-col justify-center items-center">
            <TvIcon className="w-6 h-6  " />

            <h1 className=" font-bold">Dabang Pro</h1>
            <p className=" text-sm font-medium text-center py-3">
              Get Access <br /> to All Features{" "}
            </p>
          </div>

          <div className="w-36 h-10  shadow-lg  rounded-lg">
            <button className="bg-white w-full h-full  rounded-lg   block  text-primary font-bold">
              Get Pro
            </button>
          </div>
        </div>

        <div className=" flex justify-end">
          <div
            className="w-48 h-48 rounded-full -mr-12 -mt-32  z-30 
            
              bg-gradient-to-br from-white from-10%   to-primary to-90% 

              "
          ></div>
        </div>
        <div className="">
          <div className="w-48 h-48 rounded-full -ml-28 mt-12   bg-gradient-to-br from-white from-10%   to-primary to-90% z-30 "></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCard;
