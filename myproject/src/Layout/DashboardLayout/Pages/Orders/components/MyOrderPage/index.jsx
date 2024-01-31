import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { GetOrders } from "../../../../../../services/products";

const MyOrdersPage = () => {
  const [order, setOrder] = useState([]);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customer",
      key: "customer",
      render: (text) => <span>{text.name}</span>,
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
      render: (text) => {
        const formattedDate = new Date(text).toLocaleString();
        return <span>{formattedDate}</span>;
      },
    },
    {
      title: "Update",
      dataIndex: "update",
      render: (text) => (
        <span className="text-lg text-gray-500">
          <MdEdit size={22} className="hover:text-green-400 cursor-pointer" />
        </span>
      ),
    },
  ];


  useEffect(() => {
    const getOrderData = async () => {
      try {
        const res = await GetOrders();
        const orderItem = res.data.data;
        setOrder(orderItem);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderData();
  }, []);

  console.log(order);

  return (
    <>
      <Table
        columns={columns}
        pagination={false}
        dataSource={order.map((order, index) => ({
          ...order,
          key: index.toString(),
        }))}
      />
    </>
  );
};

export default MyOrdersPage;