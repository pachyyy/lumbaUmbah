import { UserIcon, Bell, Menu, X, Home, List, Book } from "lucide-react";
import { useAuth } from "@/hooks/AuthProvider";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AdminDashboardNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showAside, setShowAside] = useState(false)

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
        ];
      });
    }
  }, [currentRole, auth]);

  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-200 bg-white">
      <div className="mx-5 flex w-full gap-1 items-center justify-between md:justify-end">

        <div className="flex items-center gap-1 md:hidden">
          <button onClick={() => setShowAside(true)} className="h-10 cursor-pointer w-10 rounded-md bg-white border border-gray-200 flex items-center justify-center">
            <Menu className="h-4 w-4" />
          </button>
          <hr className="w-8 h-1 text-muted-foreground rotate-90" />
          <Link to="/">
            <img src="/logo/logo-navy.png" alt="logo" className="h-10 w-10" />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-1 relative">
          <button className="h-10 cursor-pointer w-10 rounded-md bg-white border border-gray-200 flex items-center justify-center">
            <Bell className="h-4 w-4" />
          </button>

          <hr className="hidden md:block w-8 h-1 text-muted-foreground rotate-90" />

          <div className="items-center gap-3 hidden md:flex">
            <div className="flex flex-col items-end">
              <h3 className="text-sm text-primary font-medium capitalize">{auth.user.full_name}</h3>
              <span className="text-muted-foreground text-sm capitalize">
                {auth.user.role}
              </span>
            </div>
            <img src="https://github.com/shadcn.png" className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200"/>
          </div>

          {/* mobile */}
          <div 
            className="cursor-pointer flex md:hidden"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img src="https://github.com/shadcn.png" className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200"/>
          </div>

          {/* dropdown */}
          <div
            className={`absolute max-w-sm w-full top-14 right-0 flex md:hidden items-center gap-2 p-3 bg-white shadow-sm rounded-md transition-all duration-300 ease-in-out transform
              ${showDropdown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}
          >
            <div className="flex w-full items-start flex-col gap-3">
              <h4 className="text-sm font-medium">Menu</h4>
              <hr className="w-full h-1 text-muted-foreground" />
              <h4 className="text-sm">User Profile</h4>
              <button onClick={() => auth.logout()} className="text-sm">Logout</button>
            </div>
          </div>

        </div>
      </div>

      <aside 
        className={`transform transition-transform duration-300 ease-in-out ${showAside ? 'translate-x-0' : '-translate-x-full'} block md:hidden z-50 absolute w-56 bg-white top-0 left-0 h-screen outline outline-gray-200`}
      >
        <div className="w-full p-3 h-auto flex flex-col gap-3">
          <button onClick={() => setShowAside(false)} className="h-10 cursor-pointer w-10 rounded-md bg-white border border-gray-200 flex items-center justify-center self-end">
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col items-center space-y-2 w-full">
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
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default AdminDashboardNavbar;
