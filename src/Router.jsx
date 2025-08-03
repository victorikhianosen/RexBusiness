// src/routes/Router.jsx
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Business/Auth/Login";
import Register from "./Pages/Business/Auth/Register";
import AdminLogin from "./Pages/Admin/Auth/AdminLogin";
import AdminRegister from "./Pages/Admin/Auth/AdminRegister";
import Dashboard from "./Pages/Business/Dashboard/Dashboard";
import LaunchPad from "./Pages/Business/LaunchPad/LaunchPad";
import BusinessAuth from "./Middleware/BusinessAuth";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Business Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/launchpad" element={<LaunchPad />} /> */}
           <Route element={<BusinessAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/launchpad" element={<LaunchPad />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
