import React from "react";
import { v4 as uuidv4 } from "uuid";

import { BeakerIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlass } from "@medusajs/icons";

const App = () => {
  return (
    <div className="flex ">
      <aside className=" border hidden ">
        <div className="h-screen fixed overflow-y-auto px-3 min-w-72 space-y-3">
          <div className="flex items-center gap-3 pt-3 justify-center ">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <span className="text-primary">Dabang</span>
          </div>
          <div>
            {[...Array(10)].map((_, i) => {
              return (
                <p key={uuidv4()} className="py-3 text-tine  border p-2 w-full">
                  <span className="">item {i + 1}</span>
                </p>
              );
            })}
          </div>
        </div>
      </aside>
      <div className="relative  ">
        <nav className=" border w-full fixed bg-white p-3">
          <div className=" flex justify-between  space-x-2">
            <div className=" border  text-2xl font-bold">Dashboard</div>
            <div className="w-full">
              <label
                className="flex relative items-center  space-x-1"
                htmlFor="search"
              >
                <span className="absolute  inset-y-0 left-0 flex items-center pl-2">
                  <MagnifyingGlass className="w-5 h-5 text-primary " />
                </span>
                <input
                  type="search"
                  placeholder="Search Here..."
                  className="block  max-w-[500px] w-full pl-10 pr-3 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  name="search"
                  id="search"
                />
              </label>

              {/* <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              /> */}
            </div>
            <div className=" border  ">item3</div>
            <div className=" border  ">item4</div>
          </div>
        </nav>
        <main className="mt-12">
          main content
          <div>
            {[...Array(20)].map((_, i) => {
              return (
                <p key={uuidv4()} className="py-3 border p-2">
                  item {i + 1}
                </p>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
