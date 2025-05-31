import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, redirectPath = "/signin" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
