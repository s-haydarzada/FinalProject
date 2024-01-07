import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";
import { ContactInfo } from "./components";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";

const MainLayout = () => {
  return (
    <>
        <Sidebar />
        <MainHeader/>
        <Outlet />
        <Footer/>
    </>
  );
};

export default MainLayout;
