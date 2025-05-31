import { useAuth } from "@/hooks/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const auth = useAuth()
  if (!auth.token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
