import { UserIcon, Bell } from "lucide-react";
import { useAuth } from "@/hooks/AuthProvider";

const AdminDashboardNavbar = () => {
  const auth = useAuth()

  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-200 bg-white">
      <div className="mx-5 flex w-full gap-1 items-center justify-end">
        <button className="h-10 cursor-pointer w-10 rounded-md bg-white border border-gray-200 flex items-center justify-center">
          <Bell className="h-4 w-4" />
        </button>

        <hr className="w-8 h-1 text-muted-foreground rotate-90" />

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <h3 className="text-sm text-primary capitalize">{auth.user.full_name}</h3>
            <span className="text-muted-foreground text-sm capitalize">
              {auth.user.role}
            </span>
          </div>
          <img src="https://github.com/shadcn.png" className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200"/>
        </div>
      </div>
    </nav>
  );
};

export default AdminDashboardNavbar;
