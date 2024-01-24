import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from './../../../../Contexts/CardContext';

const BasketItem = ({ basketItem }) => {
  const { productId, productCount, product } = basketItem;
  const { title, productPrice, images } = product || {};
  
  if (!product) {
    return null; 
  }

  const {removeFromCart,increaseAmount,decreaseAmount}=useContext(CartContext);

  const firstImage = images && images.length > 0 ? images[0] : [];
  const imageUrl = firstImage ? firstImage.url : [];

  
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4">
        <Link to={`/product/${productId}`}>
          <img className="max-w-[60px]" src={imageUrl} alt="" />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${productId}`}
              className="text-sm font-medium uppercase max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={()=>removeFromCart(productId)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={()=>decreaseAmount(productId)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">{productCount}</div>
              <div onClick={()=>increaseAmount(productId)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd/>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around ">${productPrice}</div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(productPrice * productCount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
