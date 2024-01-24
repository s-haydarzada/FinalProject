import { message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useContext, useState, MouseEvent } from "react";
import { img1 } from "../../../../../../assets/Images";
import { AddBasket } from "../../../../components";
import { BsPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { useMotionTemplate, motion } from "framer-motion";
import ShowModal from "../ShowModal";
import { IoHeart } from "react-icons/io5";

const CardItem = ({ product, customStyle }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { addToBasket, itemAmount } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { images, productPrice, salePrice, title, _id } = product;

  const firstImage = images && images.length > 0 ? images[0] : [];
  const imageUrl = firstImage ? firstImage.url : [];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    addToBasket(_id, 1, product);
  };

  const showMessage = () => {
    message.success("SUCCESSFULLY IS ADDED");
  };

  function handleMouse({ clientX, clientY, currentTarget }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPosition = clientY - top;

    setMousePosition({ x: xPosition, y: yPosition });
  }

  return (
    <div>
      <div className="hover:shadow-lg h-[380px] mb-4 mt-5 relative overflow-hidden group transition">
        <div
          onMouseMove={handleMouse}
          className="shadow-zinc-300 border-[#e4e4e4] mb-4 h-[290px] flex flex-col justify-center items-center"
        >
          <motion.div
            style={{
              background: useMotionTemplate`radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px,rgb(251,251,251), transparent 80%`,
            }}
            className="h-full w-full mx-auto flex justify-center items-center relative"
          >
            <Link to={`/product/${product._id}`}>
              <img
                className="h-[270px] w-full object-cover"
                src={imageUrl}
                alt=""
              />
            </Link>
          </motion.div>
          <div className="absolute right-10 bottom-36 scale-0 group-hover:right-10 group-hover:scale-125 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#dddddd] drop-shadow-xl opacity-0 group-hover:opacity-100 duration-500">
            <button
              onClick={showModal}
              className="hover:bg-[#8a8f6a] w-full h-full rounded-full flex justify-center items-center duration-300"
            >
              <IoSearch className="text-lg" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1 scale-0 group-hover:scale-110 p-2 flex justify-between w-[90%] items-center gap-y-2 opacity-0 group-hover:opacity-100 group-hover:scale-up-center duration-500">
          <button onClick={handleAddToCart} type="submit">
            <div className="flex justify-center items-center text-white w-28 h-10">
              <BsPlus
                style={customStyle}
                className="text-2xl text-black font-bold"
              />
              <span style={customStyle} className="text-black">
                Add to cart
              </span>
            </div>
          </button>
          <div>
            <IoHeart className="text-red-600 heart cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-[100px]">
          <button>
            <div className="">
              <Link to={`/product/${product._id}`}>
                <h2 className="font-semibold">{title.slice(0, 20)}...</h2>
              </Link>
            </div>
            <div
              style={customStyle}
              className="flex justify-between px-3 items-center text-black text-sm w-40 h-10 absolute bottom-0 left-0 bg-transparent p-2  gap-y-2 opacity-100 group-hover:opacity-0 transition-all"
            >
              {salePrice ? (
                <>
                  <span>${salePrice}</span>
                  <span className="line-through">${productPrice}</span>
                </>
              ) : (
                <span>${productPrice}</span>
              )}
            </div>
          </button>
        </div>
      </div>
      <ShowModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        product={product}
      />
    </div>
  );
};

export default CardItem;
