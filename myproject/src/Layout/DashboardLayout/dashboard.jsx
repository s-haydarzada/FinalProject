import React, { useState } from "react";
import { Layout, Menu, Button, theme, Avatar, Badge } from "antd";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { TbBrand4Chan } from "react-icons/tb";
import {
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{ backgroundColor: colorBgContainer }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(item) => {
            navigate(`/dashboard${item.key}`);
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/",
              label: "Dashboard",
              icon: <HiOutlineViewGrid />,
            },
            {
              key: "/products",
              label: "Products",
              icon: <HiOutlineCube />,
            },
            {
              key: "/orders",
              label: "Orders",
              icon: <HiOutlineShoppingCart />,
            },
            {
              key: "/customers",
              label: "Customers",
              icon: <HiOutlineUsers />,
            },
            {
              key: "/brands",
              label: "Brands",
              icon: <TbBrand4Chan />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "5px",
            paddingRight: "20px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <RiMenuUnfoldFill size={22}/> : <RiMenuFoldFill size={22}/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Badge dot>
          <Avatar className="flex justify-center items-center" shape="square" icon={<FaUser />} />
          </Badge>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {<Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
