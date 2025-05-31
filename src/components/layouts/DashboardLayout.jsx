import Sidebar from "../Sidebar";
import DashboardNavbar from "../DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Sidebar />

      <main className="flex items-center justify-center h-full max-w-7xl mx-auto w-full mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
