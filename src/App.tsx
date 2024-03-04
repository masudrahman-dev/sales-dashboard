import React, { Suspense } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Spinner } from "@medusajs/icons";
import Layout from "./sales-dashboard/layout";
import IndexPage from "./pages";
import DashboardIndexPage from "./pages/a";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IndexPage />} />
      <Route path="a/*" element={<DashboardIndexPage />} />
    </>
  )
);

const Loading = () => (
  <div className="bg-grey-5 text-grey-90 flex h-screen w-full items-center justify-center">
    <Spinner />
  </div>
);
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
