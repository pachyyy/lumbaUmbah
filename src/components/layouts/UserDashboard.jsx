import Sidebar from "../UserSidebar";
import UserDashboardNavbar from "../UserDashboardNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <UserDashboardNavbar />
      <Sidebar />

      <main className="flex items-center justify-center h-full max-w-7xl mx-auto w-full mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;