import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreen from "@components/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    // Simulate an async operation to check authentication
    const checkAuth = async () => {
      // Simulate a delay for checking authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    checkAuth();
  }, []);

  const userToken = localStorage.getItem('userToken');

  console.log('isAuthenticated:', isAuthenticated); 
  console.log('userToken:', userToken); 

  if (loading) {
    return <LoadingScreen />; // Display a loading screen
  }

  return isAuthenticated || userToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
