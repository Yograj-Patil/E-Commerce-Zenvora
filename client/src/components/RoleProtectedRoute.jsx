import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    if (user.role === "merchant") {
      return <Navigate to="/merchant" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleProtectedRoute;