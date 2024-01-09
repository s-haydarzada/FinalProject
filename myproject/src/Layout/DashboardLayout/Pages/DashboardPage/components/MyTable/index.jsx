import { Divider, Radio, Space, Switch, Table } from "antd";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { LiaSearchPlusSolid } from "react-icons/lia";

const MyTable = () => {
  const { id } = useParams();
  const [selectionType, setSelectionType] = useState("checkbox");

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
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Sale Price",
      dataIndex: "sale",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => <StatusColumn text={text} />,
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text) => (
        <Link>
          <span className="text-lg text-gray-500">
            <LiaSearchPlusSolid />
          </span>
        </Link>
      ),
    },
    {
      title: "Published",
      dataIndex: "published",
      render: (_, record) => (
        <Switch
          size="small"
          checked={record.isChecked}
          onChange={(checked) => onChange(record.key, checked)}
          style={{ backgroundColor: record.switchColor }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button className="text-xl hover:text-green-600">
            <FiEdit />
          </button>
          <button className="text-xl hover:text-red-600">
            <IoTrashOutline />
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
      status: "Selling",
      published: <Switch />,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      brands: "Adidas",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Sold out",
      published: <Switch />,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      brands: "Puma",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Selling",
      published: <Switch />,
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sydney No. 1 Lake Park",
      brands: "Nike",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Sold out",
      published: <Switch />,
    },
    {
      key: "5",
      name: "price",
      age: 99,
      address: "Sydney No. 1 Lake Park",
      brands: "Puma",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Selling",
      published: <Switch />,
    },
    {
      key: "6",
      name: "sale",
      age: 99,
      address: "Sydney No. 1 Lake Park",
      brands: "Adidas",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Sold out",
      published: <Switch />,
    },
    {
      key: "7",
      name: "stock",
      age: 99,
      address: "Sydney No. 1 Lake Park",
      brands: "Nike",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Selling",
      published: <Switch />,
    },
    {
      key: "8",
      name: "status",
      age: 99,
      address: "Sydney No. 1 Lake Park",
      brands: "Puma",
      stock: 3,
      price: 340,
      sale: 100,
      status: "Sold out",
      published: <Switch />,
    },
  ];

  const StatusColumn = ({ text }) => {
    let color = "";
    let borderColor = "";
    let backgroundColor = "";

    switch (text) {
      case "Selling":
        color = "#2eb82e";
        borderColor = "#70db70";
        backgroundColor = "#c2f0c2";
        break;
      case "Sold out":
        color = "#ff704d";
        borderColor = "#ff704d";
        backgroundColor = "#ffd6cc";
        break;
      default:
        break;
    }

    const style = {
      color: color,
      border: `1px solid ${borderColor}`,
      borderRadius: "14px",
      backgroundColor: backgroundColor,
      display: "inline-block",
      padding: "0 6px",
      textAlign:"center",
      fontSize:"12px"
    };

    return <span style={style}>{text}</span>;
  };

  const [switchStates, setSwitchStates] = useState(
    data.map((item) => ({
      key: item.key,
      isChecked: true,
      switchColor: "green",
    }))
  );

  const onChange = (key, checked) => {
    setSwitchStates((prevStates) =>
      prevStates.map((state) =>
        state.key === key
          ? {
              ...state,
              isChecked: checked,
              switchColor: checked ? "green" : "red",
            }
          : state
      )
    );
  };

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
    <div className="w-full overflow-x-auto scrollbar-hide mb-24">
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data.map((item) => ({
          ...item,
          ...switchStates.find((state) => state.key === item.key),
        }))}
      />
    </div>
  );
};

export default MyTable;
