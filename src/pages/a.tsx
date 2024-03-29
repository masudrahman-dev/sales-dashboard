import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useHotkeys } from "react-hotkeys-hook";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../sales-dashboard/layout";
import DashboardContent from "../sales-dashboard/dashboard-content";

const DashboardIndexPage = () => {
  const navigate = useNavigate();
  useHotkeys("g + o", () => navigate("/a/0"));
  useHotkeys("g + p", () => navigate("/a/1"));

  return (
    // <PrivateRoute>
    <DashboardRoutes />
    // </PrivateRoute>
  );
};

const DashboardRoutes = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardContent />} />
        </Routes>
      </Layout>
    </DndProvider>
  );
};

export default DashboardIndexPage;
