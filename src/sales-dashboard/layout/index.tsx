import React, { ReactNode } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>

      <div>
        <Navbar />
        <div className="flex  ">
          <aside className="border hidden  md:block relative ">
            <div className=" fixed  min-w-72 ">
              {/* <Sidebar /> */}
            </div>
          </aside>
          <div className="relative ">
            {/* md:left-72 */}
            <main className="mt-12 px-6  fixed inset-0   left-0 overflow-y-auto ">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
