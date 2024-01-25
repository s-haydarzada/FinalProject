import { Avatar, Badge, Breadcrumb } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Contexts/CardContext";
import { GetOrders, PostOrders } from "../../../../services/products";
import { useFormik } from "formik";

const Checkout = () => {
  const { basket, total,setBasket } = useContext(CartContext);

  const item = {
    type: "separator",
    separator: ">",
  };

  const [initialValue, setInitialValue] = useState({
    email: "",
    region: "",
    name: "",
    surname: "",
    address: "",
  });

  const { handleSubmit, handleReset, handleChange } = useFormik({
    initialValues: initialValue,
    onSubmit: async (values) => {
      try {
        const orderData = { products: basket, userData: values };

        const postedOrder = await PostOrders(orderData);

        console.log(postedOrder.data);
        setBasket([])
        handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await GetOrders();
        console.log(res);
        setOrders(res);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <section className="mt-14 px-12">
      <Breadcrumb
        className="py-4 mb-10 text-sm"
        items={[
          {
            title: (
              <Link to="/viewcart" className="cursor-pointer">
                ViewCart
              </Link>
            ),
          },
          {
            title: "Checkout",
          },
        ]}
      />
      <div className="flex w-full h-full">
        <div className="border w-3/5 pt-3">
          <form action="" className="mx-10" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label htmlFor="" className="font-semibold text-[24px]">
                Contact
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email or mobile phone number"
                // onClick={()=>{
                //   setFieldValue("email",e.target.value)
                // }}
                onChange={handleChange}
                className="border p-3 mt-1 focus:border-[#8a8f6a] outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[24px]">
                Delivery
              </label>
              <input
                type="text"
                name="region"
                // onClick={()=>{
                //   setFieldValue("region",e.target.value)
                // }}
                onChange={handleChange}
                placeholder="Country/Region"
                className="border p-3 mt-1 focus:border-[#8a8f6a] outline-none rounded-md"
              />
            </div>
            <div className="flex w-full mt-3 justify-between items-center gap-3">
              <input
                type="text"
                name="name"
                // onClick={()=>{
                //   setFieldValue("name",e.target.value)
                // }}
                onChange={handleChange}
                placeholder="First Name"
                className="border w-full p-3 mt-1 focus:border-[#8a8f6a] outline-none rounded-md"
              />
              <input
                type="text"
                name="surname"
                // onClick={()=>{
                //   setFieldValue("surname",e.target.value)
                // }}
                onChange={handleChange}
                placeholder="Last Name"
                className="border w-full p-3 mt-1 focus:border-[#8a8f6a] outline-none rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              // onClick={()=>{
              //   setFieldValue("address",e.target.value)
              // }}
              onChange={handleChange}
              className="w-full border p-3 mt-3 focus:border-[#8a8f6a] outline-none rounded-md"
            />
            <div className="flex flex-col mb-5 mt-5">
              <h5 className="font-semibold text-[24px]">Payment</h5>
              <span className="text-gray-400 mb-2">
                All transactions are secure and encrypted.
              </span>
              <p className="w-full bg-[#F6F8E9] p-4 border-[1px] rounded-md border-[#8A8F6A]">
                Cash on delivery(COD)
              </p>
            </div>
            <button
              className="p-4 bg-[#8A8F6A] text-white text-[18px] hover:bg-[#717556] duration-500 w-full font-medium rounded-md my-4"
              type="submit"
            >
              Complete order
            </button>
          </form>
        </div>
        <div className="border w-2/5 h-[500px]">
          <div className="flex flex-col px-7">
            {basket.map((item) => (
              <div
                key={item.productId}
                className="flex justify-between items-center mt-5"
              >
                <Badge
                  count={item.productCount}
                  color="gray"
                  className="w-20 h-20 rounded-md border-[1px]"
                >
                  <img
                    src={item.product.images[0].url}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </Badge>
                <p className="text-[16px]">{item.product.title}</p>
                <p className="text-[16px]">$ {item.product.productPrice}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col px-7">
            <div className="flex justify-between items-center mt-10">
              <p className="text-xl font-semibold">Total:</p>
              <span className="font-semibold text-xl">$ {total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;