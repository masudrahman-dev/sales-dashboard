import { ArrowUpTray, ChartBar } from "@medusajs/icons";
import { Share1Icon } from "@radix-ui/react-icons";
import React from "react";
import { v4 } from "uuid";
import Button from "../../components/button";
import { NavLink } from "react-router-dom";
import Card from "../../components/card";

const MainContent = () => {
  return (
    <div className="">
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12  gap-4">
          <div className="border rounded-lg shadow md:col-span-7 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p>Today's Sales</p>
                <p>Sales Summary</p>
              </div>
              <Button />
            </div>
            <div>
              <div className="bg-rose-200 p-5 rounded-lg space-y-2">
                <span className=" text-white w-8 h-8 rounded-full bg-rose-400 flex justify-center items-center">
                  <ChartBar />
                </span>
                <p className="font-bold text-xl">$1k</p>
                <p className="text-slate-500 text-sm">Total Sales</p>
                <NavLink className={"text-blue-500 block"} to={"/"}>
                  +8% from yesterday
                </NavLink>
              </div>
              <Card pageLink="/" title="Total Sales" total="$1k"  />
            </div>
          </div>
          <div className="border md:col-span-5">
            02
            <div></div>
          </div>
          <div className="border md:col-span-6">03</div>
          <div className="border md:col-span-3">04</div>
          <div className="border md:col-span-3">05</div>
          <div className="border md:col-span-6">06</div>
          <div className="border md:col-span-3">07</div>
          <div className="border md:col-span-3">07</div>
        </div>
      </div>
      {/* {[...Array(20)].map((_, i) => {
        return (
          <p key={v4()} className="py-3 border p-2">
            item {i + 1}
          </p>
        );
      })} */}
    </div>
  );
};

export default MainContent;
