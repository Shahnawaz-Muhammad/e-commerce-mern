import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("auth_token") ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="auth/login" replace />
  );
};

export default ProtectedRoute;
