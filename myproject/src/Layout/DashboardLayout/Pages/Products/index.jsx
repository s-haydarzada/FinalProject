import React from "react";
import { Typography } from "antd";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import MyTable from "../DashboardPage/components/MyTable";

const Products = () => {
  return (
    <div className="p-4 h-screen overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <Typography.Title level={3}>Products</Typography.Title>
        <div className="flex justify-end items-center gap-3">
          <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-red-400 border border-transparent w-[150px] rounded-md h-12">
            <FaRegTrashCan size={18} />
            <span className="ml-2">Delete</span>
          </button>
          <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-[150px] rounded-md h-12">
            <FaPlus size={18} />
            <span className="ml-2">Add Product</span>
          </button>
        </div>
      </div>
      <form
        action=""
        className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex mt-5"
      >
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <input
            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
            type="search"
            name="search"
            placeholder="Search Product"
          />
        </div>
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
            <option value="All" hidden="">
              Category
            </option>
            <option value="62cfad3d484d89068aa7a819">Adidas</option>
            <option value="62cfab4b484d89068aa7a7ff">Puma</option>
            <option value="62c827b5a427b63741da9175">Nike</option>
          </select>
        </div>
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
            <option value="All" hidden="">
              Price
            </option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <div className="w-full mx-1">
            <button
              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full"
              type="submit"
            >
              Filter
            </button>
          </div>
          <div className="w-full mx-1">
            <button
              className="align-bottom leading-5 transition-colors duration-150 font-medium  text-gray-600 dark:text-gray-400 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 w-full mr-3 flex items-center justify-center cursor-pointer  px-4 md:py-1 py-2 h-12 text-sm dark:bg-gray-700"
              type="reset"
            >
              <span className="text-black dark:text-gray-200">Reset</span>
            </button>
          </div>
        </div>
      </form>
      <MyTable/>
    </div>
  );
};

export default Products;
