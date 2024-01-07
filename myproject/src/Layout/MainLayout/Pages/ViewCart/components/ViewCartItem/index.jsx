import React, { useContext } from "react";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const ViewCartItem = ({ item }) => {
  const { id, title, image, amount, price } = item;

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4 justify-between">
        <Link to={`/product/${id}`}>
          <img
            className="max-w-[80px] mx-5 text-center p-3"
            src={image}
            alt=""
          />
        </Link>
        <Link
          to={`/product/${id}`}
          className="text-sm ml-5 font-medium uppercase max-w-[240px] text-primary hover:underline"
        >
          {title}
        </Link>
        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
          <div
            onClick={() => decreaseAmount(id)}
            className="flex-1 flex justify-center items-center cursor-pointer h-full"
          >
            <IoMdRemove />
          </div>
          <div className="h-full flex justify-center items-center px-2">
            {amount}
          </div>
          <div
            onClick={() => increaseAmount(id)}
            className="flex-1 h-full flex justify-center items-center cursor-pointer"
          >
            <IoMdAdd />
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
          price * amount
        ).toFixed(2)}`}</div>
        <div
          onClick={() => removeFromCart(id)}
          className="text-xl cursor-pointer"
        >
          <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
        </div>
      </div>
    </div>
  );
};

export default ViewCartItem;
