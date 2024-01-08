import { Divider, Radio, Space, Switch, Table } from "antd";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";


const MyTable = () => {
  const { id } = useParams();
  const [selectionType, setSelectionType] = useState("checkbox");
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      render: (text) => <Link to={`/product/${id}`}>{text}</Link>,
    },
    {
      title: "Brands",
      dataIndex: "brands",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Sale Price",
      dataIndex: "sale",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text) => <Link to={`/product/${id}`}>{text}</Link>,
    },
    {
      title: "Published",
      dataIndex: "published",
      render: (text) => <Switch defaultChecked onChange={onChange} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="text-xl">
            <IoTrashOutline />
          </button>
          <button className="text-xl">
          <FiEdit />
          </button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      brands: "Nike",
      stock: 3,
      price: 340,
      sale: 100,
      status: "pending",
      view: <FaSearchPlus />,
      published: <Switch />,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "5",
      name: "price",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "6",
      name: "sale",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "7",
      name: "stock",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "8",
      name: "status",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div>
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default MyTable;
