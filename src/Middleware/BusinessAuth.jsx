// src/components/ProtectedBusinessRoute.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const BusinessAuth = () => {
  const { user, token } = useContext(AppContext);
  const isAuthenticated = token && user;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default BusinessAuth;
