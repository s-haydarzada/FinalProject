import React, { useContext } from "react";
import { CartContext } from "../../../../Contexts/CardContext";
import { Empty } from "antd";
import { empty } from "../../../../assets/Images";
import ViewCartItem from "./components/ViewCartItem";

const Viewcart = () => {
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <section className="w-full h-[600px] bg-violet-400 mt-16 px-12 py-10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="flex justify-between items-center border">
            <th className="border-e pr-32 p-3 text-center">Image</th>
            <th className="border-e pr-32 p-3 text-center">Product</th>
            <th className="border-e pr-32 p-3 text-center">Price</th>
            <th className="border-e pr-32 p-3 text-center">Quantity</th>
            <th className="border-e pr-32 p-3 text-center">Total</th>
            <th className="border-e pr-32 p-3 text-center">Remove</th>
          </tr>
        </thead>
        {/* <ul className="flex justify-between items-center border">
          <li className="border-e pr-32 p-3 text-center">Image</li>
          <li className="border-e pr-32 p-3 text-center">Product</li>
          <li className="border-e pr-32 p-3 text-center">Price</li>
          <li className="border-e pr-32 p-3 text-center">Quantity</li>
          <li className="border-e pr-32 p-3 text-center">Total</li>
          <li className="border-e pr-32 p-3 text-center">Remove</li>
        </ul> */}
         <tbody className="flex justify-between items-center border">
          {cart.map((item) => (
            <ViewCartItem key={item.id} item={item} />
          ))}
        </tbody>
        {/* <div className="">
          <ul className="flex justify-between items-center border p-3">
            {cart.map((item) => {
              return (
                <li>
                  <ViewCartItem item={item} key={item.id} />
                </li>
              );
            })}
          </ul>
        </div> */}
      </table>
    </section>
  );
};

export default Viewcart;
