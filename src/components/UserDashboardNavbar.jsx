import { UserIcon, Bell } from "lucide-react";

const UserDashboardNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-200 bg-white">
      <div className="mx-5 flex w-full gap-4 items-center justify-end">
        <button className="h-10 cursor-pointer w-10 rounded-md bg-gray-100 flex items-center justify-center">
          <Bell className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
            <UserIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">Udin Rajagukguk</h3>
            <span className="text-muted-foreground text-sm">User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserDashboardNavbar;
