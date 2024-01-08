import React from "react";
import { Outlet } from "react-router-dom";
import SidebarDashboard from "./components/SidebarDashboard";
import DashboardHeader from "./components/Header";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-white w-screen h-screen overflow-hidden">
      <SidebarDashboard/>
      <div className="w-full flex-1">
        <DashboardHeader/>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
