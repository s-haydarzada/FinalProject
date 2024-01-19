import React, { createContext, useEffect, useState } from 'react';
import { ProductsGetAll } from '../services/products';

export const ProductContext=createContext()

const ProductProvider = ({children}) => {
const [products,setProducts]=useState([]);


useEffect(()=>{
  const fetchProducts = async()=>{
    try {
      const response = await ProductsGetAll();
      const productList = response.data.product;
      setProducts(productList)
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts();
},[])

  return <ProductContext.Provider value={{products,setProducts}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider;
