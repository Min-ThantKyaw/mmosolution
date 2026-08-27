import { Navigate, Outlet } from "react-router-dom";
import { authStore } from "../store/auth.store";

export default function ProtectedRoute() {
  const token = authStore.accessToken;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}