import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
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
