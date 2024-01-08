import React from "react";
import { IoBag } from "react-icons/io5";
import {
  HiOutlineCube,
  HiOutlineLogout,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const SidebarDashboard = () => {
  const { pathname } = useLocation();

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
    <div className="bg-neutral-100 w-60 p-4 flex flex-col text-black">
      <div className="flex items-center gap-2 px-1 py-3">
        <IoBag fontSize={24} className="text-[#10B981]" />
        <h1 className="text-2xl text-black font-semibold">Dashtar</h1>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {Dashboard_Sidebar.map((item) => (
          <Link
            to={`/dashboard${item.path}`}
            key={item.key}
            className={`flex items-center gap-2 hover:bg-white hover:text-[#10B981] hover:no-underline active:bg-gradient-to-r from-neutral-200 via-yellow-50 to-green-100 rounded-sm text-base ${
              pathname === item.path
                ? "bg-neutral-700 text-white"
                : "text-neutral-400"
            }`}
          >
            <div className="flex gap-2 mb-2 items-center text-xl">
              {item.icon}
              {item.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-0.5 pt-2 border-t border-neutral-700">
        <div className="flex items-center gap-2 text-xl justify-center text-red-500 cursor-pointer">
          <HiOutlineLogout className="" />
          <h1 className="font-semibold">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
