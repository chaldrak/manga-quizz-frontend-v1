import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();
  return auth?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
