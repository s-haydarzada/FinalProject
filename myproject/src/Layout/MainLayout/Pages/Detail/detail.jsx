import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./../../../../Contexts/CardContext";
import { ProductContext } from "./../../../../Contexts/ProductContext";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../_variants";

const Detail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //if product is not found

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Spin/>
      </section>
    );
  }

  const { image, title, description, price } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
             <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0">
            <img className="max-w-[100px] scale-75 hover:scale-100 duration-700 overflow-clip lg:max-w-sm" src={image} alt="" />
          </div>
          </motion.div>
         
          <div className="flex-1 py-16 ml-10 text-center lg:text-left">
            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
            <h1 className="text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl font-medium mb-6 text-red-500">$ {price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(product,product.id)} className="bg-primary py-4 px-8 text-white rounded-md hover:bg-gray-300 hover:text-black">Add to cart</button>  
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
