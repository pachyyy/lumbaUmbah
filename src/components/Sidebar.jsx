import { UserIcon, List, Book, LogOut } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";

const AdminSidebar = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [navLinks, setNavLinks] = useState([]);
  const { role } = useParams();

  const auth = useAuth();

  useEffect(() => {
    setCurrentRole(role);
    setNavLinks([]);

    if (currentRole === "admin") {
      setNavLinks(prevNavlinks => {
        return [
          ...prevNavlinks,
          {
            name: "Data User",
            href: "/dashboard/admin/data-user",
            icon: <UserIcon />,
          },
          {
            name: "Data Laundry",
            href: "/dashboard/admin/data-laundry",
            icon: <List />,
          },
        ];
      });
    } else if (currentRole === "user") {
      setNavLinks(prevNavlinks => {
        return [
          ...prevNavlinks,
          {
            name: "View Orders",
            href: "/dashboard/user/view-orders",
            icon: <List />,
          },
          {
            name: "Book a Service",
            href: "/dashboard/user/book-service",
            icon: <Book />,
          },
        ];
      });
    }
  }, [currentRole, role]);

  return (
    <aside className="left-0 top-0 hidden h-screen w-60 z-50 bg-sky-200 border-r border-gray-200 lg:fixed lg:block">
      <div className="mt-0 flex h-full flex-col p-5 space-y-8 justify-between">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
          <a href="#">
            <img src="/logo/logo-navy.png" alt="logo" className="h-12 w-12" />
          </a>
          <h3 className="font-semibold">Lumba Umbah</h3>
        </div>
          <ul className="w-full space-y-3">
            {navLinks.map((nav, index) => {
              const isActive = window.location.pathname === nav.href;
              return (
                <li key={index}>
                  <a
                    href={nav.href}
                    className={`flex items-center w-full gap-2 rounded-md bg-white p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 ${
                      isActive ? "bg-blue-50 text-blue-700" : ""
                    }`}
                  >
                    {nav.icon}
                    <span className="truncate">{nav.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => auth.logout()}
          className={`flex cursor-pointer items-center w-full gap-2 rounded-md bg-white p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700`}
        >
          <LogOut className="w-5 h-5" />
          <span className="truncate">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
