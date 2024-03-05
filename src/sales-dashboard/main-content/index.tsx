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
                <p className="text-xl font-bold">Today's Sales</p>
                <p className="text-sm text-slate-500">Sales Summary</p>
              </div>
              <Button />
            </div>
            <div className="flex gap-3 justify-between mt-6">
              <Card
                key={v4()}
                icon={<ChartBar />}
                pageLink="/"
                title="Total Sales"
                total="$1k"
              />
              <Card
                key={v4()}
                className="bg-yellow-100"
                icon={<ChartBar />}
                pageLink="/"
                title="Total Sales"
                total="300"
              />
              <Card
                className="bg-green-100"
                key={v4()}
                icon={<ChartBar />}
                pageLink="/"
                title="Total Sales"
                total="5"
              />
              <Card
                className="bg-indigo-100"
                key={v4()}
                icon={<ChartBar />}
                pageLink="/"
                title="Total Sales"
                total="8"
              />
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
