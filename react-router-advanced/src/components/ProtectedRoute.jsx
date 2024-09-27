import React from 'react';
import { Navigate } from 'react-router-dom';

// This could be your custom hook or context to check auth status
const useAuth = () => {
  const isAuthenticated = true; // Replace this with your actual authentication logic
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect them to the login page or another route
    return <Navigate to="/" replace />;
  }

  return children; // Render the child components if authenticated
};

export default ProtectedRoute;
