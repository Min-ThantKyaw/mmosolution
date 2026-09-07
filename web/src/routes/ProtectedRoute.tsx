import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";

type allowedRoles = "ADMIN" | "WRITER" | "USER";

export default function ProtectedRoute({ allowedRoles }: { allowedRoles?: allowedRoles[] }) {
  const { user } = useAuth() || {};
  const location = useLocation();

  // if (!user) {
  //   // Redirect to login page if user is not authenticated
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }

  // if (allowedRoles && !allowedRoles.includes(user.role as allowedRoles)) { 
  //   return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  // }

  return <Outlet />;
}