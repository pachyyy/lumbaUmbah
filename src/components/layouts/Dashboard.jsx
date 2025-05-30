import Sidebar from "../AdminSidebar";
import DashboardNavbar from "../AdminDashboardNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
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

export default Dashboard;
