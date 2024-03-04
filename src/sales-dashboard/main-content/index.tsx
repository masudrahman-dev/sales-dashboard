import React from "react";
import { v4 } from "uuid";

const MainContent = () => {
  return (
    <div className="">
      <div className="pt-10">
        <div className="grid grid-cols-3  gap-4">
          <div className="border col-span-2">01</div>
          <div className="border">02</div>
          <div className="border">03</div>
          <div className="border">04</div>
          <div className="border">05</div>
          <div className="border">06</div>
          <div className="border">07</div>
        </div>
      </div>
      {[...Array(20)].map((_, i) => {
        return (
          <p key={v4()} className="py-3 border p-2">
            item {i + 1}
          </p>
        );
      })}
    </div>
  );
};

export default MainContent;
