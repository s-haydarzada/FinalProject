import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const item = {
    type: "separator", // Must have
    separator: ">",
  };
  return (
    <section className="pt-32 pb-12 lg:py-32 flex bg-blue-900 flex-col h-screen">
        <Breadcrumb className="bg-red-300 py-4 px-12"
          items={[
            {
              title: <Link to="/">Home</Link>,
            },
            {
              title: "Products",
            },
          ]}
        />
      <div>
          <h1>salam</h1>
      </div>
    </section>
  );
};

export default Shop;
