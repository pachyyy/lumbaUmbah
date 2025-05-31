import { useAuth } from "@/hooks/AuthProvider";

const DashboardHome = () => {
  const auth = useAuth();

  return <div>Welcome, {auth.user.username}</div>;
};

export default DashboardHome;
