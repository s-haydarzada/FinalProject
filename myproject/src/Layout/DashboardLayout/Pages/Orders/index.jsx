import { Table } from "antd";
import React from "react";
import MyOrdersPage from "./components/MyOrderPage";

const Orders = () => {
  return (
    <section>
      <div className="w-full h-[100px]">Header</div>
      <MyOrdersPage />
    </section>
  );
};

export default Orders;
