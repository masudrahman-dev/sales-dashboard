import React from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./sales-dashboard/navbar";
import MainContent from "./sales-dashboard/main-content";
import Sidebar from "./sales-dashboard/sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  ">
        <aside className="border hidden  md:block relative ">
          <div className="h-screen fixed  overflow-y-auto px-3 min-w-72 space-y-3">
            <Sidebar />
          </div>
        </aside>
        <div className="relative ">
          <main className="mt-12 px-6  fixed inset-0  md:left-72 left-0 overflow-y-auto ">
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
