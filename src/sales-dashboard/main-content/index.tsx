import React from "react";
import { v4 } from "uuid";

const MainContent = () => {
  return (
    <div className="">
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12  gap-4">
          <div className="border md:col-span-7">01</div>
          <div className="border md:col-span-5">02</div>
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
