import React from "react";
import { IoBag } from "react-icons/io5";
import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Link } from 'react-router-dom';

const SidebarDashboard = () => {
  const Dashboard_Sidebar = [
    {
      key: "dashboard",
      label: "Dashboard",
      path: "/",
      icon: <HiOutlineViewGrid />,
    },
    {
      key: "products",
      label: "Products",
      path: "/products",
      icon: <HiOutlineCube />,
    },
    {
      key: "orders",
      label: "Orders",
      path: "/orders",
      icon: <HiOutlineShoppingCart />,
    },
    {
      key: "customers",
      label: "Customers",
      path: "/customers",
      icon: <HiOutlineUsers />,
    },
  ];

  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <IoBag fontSize={24} />
        <span className="text-neutral-100 text-lg">Dashtar</span>
      </div>
      <div className="flex-1">
        {Dashboard_Sidebar.map((item) => (
            <div key={item.key} className="flex gap-2 mb-2 items-center">
              {item.icon}
              {item.label}
            </div>
        ))}
      </div>
      <div>button part</div>
    </div>
  );
};

export default SidebarDashboard;
