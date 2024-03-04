import React from "react";

const App = () => {
  return (
    <div className="flex ">
      <aside className=" border">
        <div className="h-screen fixed overflow-y-auto px-3 min-w-72 space-y-3">
          {[...Array(20)].map((_, i) => {
            return <p className="py-3 border p-2 w-full">item {i + 1}</p>;
          })}
        </div>
      </aside>
      <div className="relative ml-72">
        <nav className="h-12 border w-full fixed">navbar</nav>
        <main className="mt-12">
          main content
          <div>
            {[...Array(20)].map((_, i) => {
              return <p className="py-3 border p-2">item {i + 1}</p>;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
