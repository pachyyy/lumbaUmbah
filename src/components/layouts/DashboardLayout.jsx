import Sidebar from "../Sidebar";
import DashboardNavbar from "../DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Sidebar />

      <main className="bg-neutral-100 w-full min-h-screen">
        <section className="flex items-center justify-center h-auto max-w-7xl mx-auto w-full pt-20 px-5 -z-50">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
