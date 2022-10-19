import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login" />;
};

export default PrivateRoutes;
