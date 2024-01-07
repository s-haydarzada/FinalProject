import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../../assets/Images/index";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import Menu from "../Menu/index";
import { LuMenu } from "react-icons/lu";
import MenuItem from "../MenuItem/index";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../../../../Contexts/SidebarContext";
import { CartContext } from "../../../../Contexts/CardContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActivate, setIsActivate] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const menu = [
    {
      id: 0,
      name: "Home",
      subMenuItems: [{ id: 0, name: "Home" }],
    },
    {
      id: 1,
      name: "Shop",
      subMenuItems: [
        { id: 0, name: "Shop 1" },
        { id: 1, name: "Shop 2" },
      ],
    },
    {
      id: 2,
      name: "Products",
      subMenuItems: [
        { id: 0, name: "Product 1" },
        { id: 1, name: "Product 2" },
      ],
    },
    {
      id: 3,
      name: "Blog",
      subMenuItems: [
        { id: 0, name: "Blog" },
        { id: 1, name: "Blog Details" },
      ],
    },
    {
      id: 4,
      name: "Pages",
      subMenuItems: [
        { id: 0, name: "Home" },
        { id: 1, name: "About" },
        { id: 2, name: "Login" },
        { id: 3, name: "Register" },
        { id: 4, name: "Wishlist" },
        { id: 5, name: "About" },
      ],
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActivate(true) : setIsActivate(false);
    });
  }, []);
  

  return (
    <header
      className={`${
        isActivate ? "bg-white shadow-md" : "bg-none py-10"
      } fixed top-0 w-full z-10 transition-all`}
    >
      <div className="py-3 px-12 w-full bg-white flex justify-between items-center my-5">
        <div className="flex items-center gap-10">
          <Link to="https://boyka-demo.myshopify.com/">
            <img
              src={logo}
              alt=""
              className="w-[100px] md:w-[120px] object-cover"
            />
          </Link>
          <Menu menu={menu} />
        </div>
        <div className="flex gap-4 text-lg mr-4">
          <div className="flex items-center gap-1 cursor-pointer relative">
            <IoSearch />
            <span className="hidden md:block">Search</span>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 cursor-pointer transition duration-300"
          >
            <MdShoppingCart />
            <span className="text-sm">Cart ({itemAmount})</span>
          </div>
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <AiOutlineClose className="text-gray-700 text-xl cursor-pointer" />
            ) : (
              <LuMenu className="cursor-pointer" />
            )}
            {toggle && (
              <div className="absolute left-0 right-0 flex items-center justify-center flex-col mt-3 bg-[#121212] text-white border-[1px] p-3 border-gray-700 px-5 py-4">
                {menu.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer hover:text-blue-500 decoration-2 font-medium mb-3 border-[1px] border-gray-400 w-full flex items-center justify-center flex-col py-3 "
                  >
                    <MenuItem name={item.name} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
