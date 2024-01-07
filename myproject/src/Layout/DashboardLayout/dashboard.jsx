import React from "react";
import { Outlet } from "react-router-dom";
import SidebarDashboard from "./components/SidebarDashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-neutral-100 w-screen h-screen overflow-hidden">
      <SidebarDashboard/>
      <div className="p-4">
        <div className="bg-teal-200">Header</div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
