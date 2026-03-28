import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("adminToken")
  );

  const handleLogin = () => setIsLoggedIn(true);
  
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <AdminDashboard onLogout={handleLogout} />
  ) : (
    <AdminLogin onLogin={handleLogin} />
  );
}