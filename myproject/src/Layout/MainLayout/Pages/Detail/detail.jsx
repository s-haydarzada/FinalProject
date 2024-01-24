import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./../../../../Contexts/CardContext";
import { ProductContext } from "./../../../../Contexts/ProductContext";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../_variants";
import { GetSingleProduct } from "../../../../services/products";

const Detail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToBasket } = useContext(CartContext);
  const [singleItem, setSingleItem] = useState([]);

  const product = products.find((item) => {
    return item._id === id;
  });

  console.log(product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetSingleProduct(product._id);
        const singleData = res.data;
        console.log(singleData);
        if (singleData.images && singleData.images.length > 0) {
          setSingleItem(singleData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [product._id]);


  // if products is not found

  if (!singleItem) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Spin />
      </section>
    );
  }

  const { images, title, description, productPrice, _id } = singleItem;
  const firstImage = images && images.length > 0 ? images[0] : [];

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex flex-1 h-[300px] items-center justify-center mb-8 lg:mb-0">
              <img
                className="max-w-[100px] h-full duration-700 overflow-clip lg:max-w-sm"
                src={firstImage.url}
                alt=""
              />
              <div>
                {/* {singleItem.images.map((item)=>{
                  <img src={item.url}/>
                })} */}
              </div>
            </div>
          </motion.div>

          <div className="flex-1 py-16 ml-10 text-center lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl font-medium mb-6 text-red-500">
                $ {productPrice}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToBasket(_id, 1, product)}
                className="bg-primary py-4 px-8 text-white rounded-md hover:bg-gray-300 hover:text-black"
              >
                Add to cart
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
