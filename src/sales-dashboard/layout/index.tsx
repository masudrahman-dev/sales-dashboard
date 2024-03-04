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
            <div className="h-screen fixed  overflow-y-auto min-w-72 ">
              <Sidebar />
            </div>
          </aside>
          <div className="relative ">
            <main className="mt-12 px-6  fixed inset-0  md:left-72 left-0 overflow-y-auto ">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
