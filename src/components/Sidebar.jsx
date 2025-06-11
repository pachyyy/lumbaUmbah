import { UserIcon, List, Book, LogOut, Home, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/AuthProvider";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [navLinks, setNavLinks] = useState([]);

  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    setNavLinks([]);
    if (auth.user) {
      setCurrentRole(auth.user.role);
    }

    if (currentRole === "admin") {
      setNavLinks(prevNavlinks => {
        return [
          ...prevNavlinks,
          {
            name: "Home",
            href: "/dashboard/admin",
            icon: Home,
          },
          {
            name: "Data User",
            href: "/dashboard/admin/data-user",
            icon: UserIcon,
          },
          {
            name: "Data Laundry",
            href: "/dashboard/admin/data-laundry",
            icon: List,
          },
        ];
      });
    } else if (currentRole === "user") {
      setNavLinks(prevNavlinks => {
        return [
          ...prevNavlinks,
          {
            name: "Home",
            href: "/dashboard/user",
            icon: Home,
          },
          {
            name: "View Orders",
            href: "/dashboard/user/view-orders",
            icon: List,
          },
          {
            name: "Book a Service",
            href: "/dashboard/user/book-service",
            icon: Book,
          },
          {
            name: "Add Address",
            href: "/dashboard/user/add-address",
            icon: MapPin,
          },
        ];
      });
    }
  }, [currentRole, auth]);

  return (
    <aside className="left-0 top-0 hidden h-screen w-60 z-50 bg-white border-r border-gray-200 lg:fixed lg:block">
      <div className="mt-0 flex h-full flex-col p-5 space-y-8 justify-between">
        <div className="flex flex-col items-start space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo/logo-navy.png" alt="logo" className="h-10 w-10" />
            <h3 className="font-semibold">Lumba Umbah</h3>
          </Link>
          <hr className="w-full h-1 text-muted-foreground" />
          <ul className="w-full space-y-3">
            {navLinks.map((nav, index) => {
              const isActive = location.pathname === nav.href;
              const Icon = nav.icon
              return (
                <Link
                    to={nav.href}
                    key={index}
                    className={`flex items-center text-sm w-full gap-2 rounded-md p-2 font-medium  hover:bg-gray-100  ${
                      isActive ? "bg-blue-50 text-blue-700" : "bg-white text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    <span className="truncate">{nav.name}</span>
                </Link>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => auth.logout()}
          className={`flex cursor-pointer items-center w-full gap-2 rounded-md bg-white p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 `}
        >
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          <span className="truncate">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
