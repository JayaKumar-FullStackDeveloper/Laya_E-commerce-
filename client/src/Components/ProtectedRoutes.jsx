// components/ProtectedRoutes.js
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const AdminRoute = () => {
  const { user } = useAuth();
  console.log("UserRoute check:", user);

  if (user && user.role === 'admin') {
    return <Outlet />;
  } else {
    console.log("Not authorized, redirecting to login");
    return <Navigate to="/auth/admin/login" />;
  }
};

export const UserRoute = () => {
  const { user } = useAuth();
  console.log("UserRoute check:", user);

  return user && (user.role === "user") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/user/login" />
  );
};
