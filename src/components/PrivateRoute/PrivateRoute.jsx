import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  
    console.log('isAuthenticated:', isAuthenticated); // Debugging log
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  

export default PrivateRoute;